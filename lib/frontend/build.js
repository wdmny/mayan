'use strict'

// Build frontend plugins
const format = require('util').format
const Promise = require('bluebird')
const kleur = require('kleur')
const Listr = require('listr')

const { buildModules, cleanupModules } = require('./tasks/buildModules')
const buildJs = require('./tasks/buildJs')
const buildCss = require('./tasks/buildCss')
const buildHtml = require('./tasks/buildHtml')
const buildDependencies = require('./tasks/buildDependencies')
const runScript = require('../util').runScript

function createBuild(ctx) {
  const buildFrontend = frontend => {
    console.log(kleur.blue(format('\r\nBuilding frontend %s/%d', frontend.configName, frontend.id)))

    const src = process.cwd() + `/plugins/${frontend.configName}`
    const dest = `${process.cwd()}/maya_build/plugins/${frontend.configName}`
    const prodMode = ctx.env === 'prod' || ctx.env === 'production'

    return new Listr([
      {
        title: 'Running pre-build scripts',
        task: (c, task) => runScript(src, 'maya-pre-build', ctx.env).then(res => {
          task.output = res
        })
      },
      {
        title: 'Installing node_modules',
        task: () => buildModules(src)
      },
      {
        title: 'Installing dependencies',
        task: () => buildDependencies(src)
      },
      {
        title: 'Building Javascript files',
        task: () => buildJs(src, dest, frontend, prodMode)
      },
      {
        title: 'Building SCSS/CSS files',
        task: () => buildCss(src, dest, frontend, prodMode)
      },
      {
        title: 'Building HTML files',
        task: () => buildHtml(src, dest, frontend, prodMode)
      },
      {
        title: 'Running post-build scripts',
        task: (c, task) => runScript(dest, 'maya-post-build', ctx.env).then(res => {
          task.output = res
        })
      },
      {
        title: 'Cleaning up',
        task: () => cleanupModules(src)
      }
    ]).run().then(() => console.log(kleur.green('Done')))
  }

  const buildEachPlugin = () => {
    return Promise.map(ctx.plugins, buildFrontend, { concurrency: 1 })
  }

  return buildEachPlugin().return(ctx)
}

module.exports = createBuild
