# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="1.3.0"></a>
# 1.3.0 (2018-08-14)


### Bug Fixes

* copy files recursively,not just top-level src ([c90781b](https://github.com/ZengineHQ/mayan/commit/c90781b))
* globbing patterns to be recursive and exclude node modules ([fd44b76](https://github.com/ZengineHQ/mayan/commit/fd44b76))


### Features

* allow publish confirm prompt to be skipped refs [#4](https://github.com/ZengineHQ/mayan/issues/4) ([864ac0f](https://github.com/ZengineHQ/mayan/commit/864ac0f))



<a name="1.2.0"></a>
# 1.2.0 (2018-08-09)


### Bug Fixes

* context overwritten when running scripts leading to no MAYA_ENV ([bedec49](https://github.com/ZengineHQ/mayan/commit/bedec49))
* run frontend post-build scripts from the destination directory ([830b686](https://github.com/ZengineHQ/mayan/commit/830b686))
* run the post-build script in the final destination directory for backend services ([e04882c](https://github.com/ZengineHQ/mayan/commit/e04882c))
* wait until post-build scripts are done before creating backend service archive ([511a008](https://github.com/ZengineHQ/mayan/commit/511a008))


### Chores

* remove support for the old “maya-build” backend service scripts ([b6e47ad](https://github.com/ZengineHQ/mayan/commit/b6e47ad))


### BREAKING CHANGES

* please refer to the documentation for examples on how to migrate your old maya-build scripts



<a name="1.1.0"></a>
# 1.1.0 (2018-08-08)


### Bug Fixes

* api endpoint should default to zenginehq ([4d61286](https://github.com/ZengineHQ/mayan/commit/4d61286))
* babel plugins config ([152519e](https://github.com/ZengineHQ/mayan/commit/152519e))
* backend post build scripts ([6bbbb32](https://github.com/ZengineHQ/mayan/commit/6bbbb32))
* camelCaseToDash generating output inconsistent with maya ([8646ea7](https://github.com/ZengineHQ/mayan/commit/8646ea7))
* don’t assume frontend module will have a package.json ([a3bcfe4](https://github.com/ZengineHQ/mayan/commit/a3bcfe4))
* ensure plugin registration is always last ([be91cde](https://github.com/ZengineHQ/mayan/commit/be91cde))
* fallback to zengine api in backend deploy as well ([95a17eb](https://github.com/ZengineHQ/mayan/commit/95a17eb))
* handleScriptOutput fails when empty result ([c9c78ce](https://github.com/ZengineHQ/mayan/commit/c9c78ce))
* make runSequential throw so Listr knows an error ocurred ([d6fd23e](https://github.com/ZengineHQ/mayan/commit/d6fd23e))
* make sure context sets default environment ([f1e8ae2](https://github.com/ZengineHQ/mayan/commit/f1e8ae2))
* path to backend build ([9c137d5](https://github.com/ZengineHQ/mayan/commit/9c137d5))
* path to backend service archive ([1b147fb](https://github.com/ZengineHQ/mayan/commit/1b147fb))
* publish command also missing default endpoint ([c9cc944](https://github.com/ZengineHQ/mayan/commit/c9cc944))
* runScript error when no package.json ([25b8bdd](https://github.com/ZengineHQ/mayan/commit/25b8bdd))
* wgn dashed replacement ([50288ba](https://github.com/ZengineHQ/mayan/commit/50288ba))


### Features

* add a ‘skip-build’ parameter for the deploy command ([b375375](https://github.com/ZengineHQ/mayan/commit/b375375))
* add backend and frontend flags for deploy command ([6971962](https://github.com/ZengineHQ/mayan/commit/6971962))
* add backend and frontend flags for publish task as well ([408b8c0](https://github.com/ZengineHQ/mayan/commit/408b8c0))
* allow both build and deploy steps to be skipped for the publish command ([ce16d23](https://github.com/ZengineHQ/mayan/commit/ce16d23))
* build backend plugin and run post build npm script ([4f7b602](https://github.com/ZengineHQ/mayan/commit/4f7b602))
* cleanup temporary build folder ([993e4ab](https://github.com/ZengineHQ/mayan/commit/993e4ab))
* copy node modules over and include into build process for frontend plugins ([0789080](https://github.com/ZengineHQ/mayan/commit/0789080))
* display a message when done deploying backend/frontend ([44cba52](https://github.com/ZengineHQ/mayan/commit/44cba52))
* display output from pre/post build scripts ([bf26ebf](https://github.com/ZengineHQ/mayan/commit/bf26ebf))
* dont abort deploy if no css, just send an empty file instead ([ad68820](https://github.com/ZengineHQ/mayan/commit/ad68820))
* enable yargs strict mode to catch invalid commands ([d7feff1](https://github.com/ZengineHQ/mayan/commit/d7feff1))
* implement a top level verbose flag ([09838a6](https://github.com/ZengineHQ/mayan/commit/09838a6))
* implement backend and frontend build params ([07b2985](https://github.com/ZengineHQ/mayan/commit/07b2985))
* implement zipping the service ([555a70e](https://github.com/ZengineHQ/mayan/commit/555a70e))
* improve how script output is handled ([b5f4118](https://github.com/ZengineHQ/mayan/commit/b5f4118))
* minify conditionally ([0e052fa](https://github.com/ZengineHQ/mayan/commit/0e052fa))
* replace strings in frontend plugin ([9f67210](https://github.com/ZengineHQ/mayan/commit/9f67210))
* require confirmation for publishing plugins ([29880cc](https://github.com/ZengineHQ/mayan/commit/29880cc))
* rework backend service build to use listr ([95de9df](https://github.com/ZengineHQ/mayan/commit/95de9df))
* rework frontend build to use listr and display detailed progress ([ec2690b](https://github.com/ZengineHQ/mayan/commit/ec2690b))
* run pre and post build scripts for frontend plugins ([843ed86](https://github.com/ZengineHQ/mayan/commit/843ed86))
* support for common dependency pattern in frontend plugins ([7796e85](https://github.com/ZengineHQ/mayan/commit/7796e85))
* support legacy frontend modules package location ([7cb769c](https://github.com/ZengineHQ/mayan/commit/7cb769c))
* support symlinked dev helper modules for frontend plugins ([b141398](https://github.com/ZengineHQ/mayan/commit/b141398))
* use gulp to build frontend plugins ([f1bc5eb](https://github.com/ZengineHQ/mayan/commit/f1bc5eb))



<a name="1.2.0"></a>
# 1.2.0 (2018-08-09)


### Bug Fixes

* context overwritten when running scripts leading to no MAYA_ENV ([bedec49](https://github.com/ZengineHQ/mayan/commit/bedec49))
* run frontend post-build scripts from the destination directory ([830b686](https://github.com/ZengineHQ/mayan/commit/830b686))
* run the post-build script in the final destination directory for backend services ([e04882c](https://github.com/ZengineHQ/mayan/commit/e04882c))
* wait until post-build scripts are done before creating backend service archive ([511a008](https://github.com/ZengineHQ/mayan/commit/511a008))


### Chores

* remove support for the old “maya-build” backend service scripts ([b6e47ad](https://github.com/ZengineHQ/mayan/commit/b6e47ad))


### BREAKING CHANGES

* please refer to the documentation for examples on how to migrate your old maya-build scripts



<a name="1.1.0"></a>
# 1.1.0 (2018-08-08)


### Bug Fixes

* api endpoint should default to zenginehq ([4d61286](https://github.com/ZengineHQ/mayan/commit/4d61286))
* babel plugins config ([152519e](https://github.com/ZengineHQ/mayan/commit/152519e))
* backend post build scripts ([6bbbb32](https://github.com/ZengineHQ/mayan/commit/6bbbb32))
* camelCaseToDash generating output inconsistent with maya ([8646ea7](https://github.com/ZengineHQ/mayan/commit/8646ea7))
* don’t assume frontend module will have a package.json ([a3bcfe4](https://github.com/ZengineHQ/mayan/commit/a3bcfe4))
* ensure plugin registration is always last ([be91cde](https://github.com/ZengineHQ/mayan/commit/be91cde))
* fallback to zengine api in backend deploy as well ([95a17eb](https://github.com/ZengineHQ/mayan/commit/95a17eb))
* handleScriptOutput fails when empty result ([c9c78ce](https://github.com/ZengineHQ/mayan/commit/c9c78ce))
* make runSequential throw so Listr knows an error ocurred ([d6fd23e](https://github.com/ZengineHQ/mayan/commit/d6fd23e))
* make sure context sets default environment ([f1e8ae2](https://github.com/ZengineHQ/mayan/commit/f1e8ae2))
* path to backend build ([9c137d5](https://github.com/ZengineHQ/mayan/commit/9c137d5))
* path to backend service archive ([1b147fb](https://github.com/ZengineHQ/mayan/commit/1b147fb))
* publish command also missing default endpoint ([c9cc944](https://github.com/ZengineHQ/mayan/commit/c9cc944))
* runScript error when no package.json ([25b8bdd](https://github.com/ZengineHQ/mayan/commit/25b8bdd))
* wgn dashed replacement ([50288ba](https://github.com/ZengineHQ/mayan/commit/50288ba))


### Features

* add a ‘skip-build’ parameter for the deploy command ([b375375](https://github.com/ZengineHQ/mayan/commit/b375375))
* add backend and frontend flags for deploy command ([6971962](https://github.com/ZengineHQ/mayan/commit/6971962))
* add backend and frontend flags for publish task as well ([408b8c0](https://github.com/ZengineHQ/mayan/commit/408b8c0))
* allow both build and deploy steps to be skipped for the publish command ([ce16d23](https://github.com/ZengineHQ/mayan/commit/ce16d23))
* build backend plugin and run post build npm script ([4f7b602](https://github.com/ZengineHQ/mayan/commit/4f7b602))
* cleanup temporary build folder ([993e4ab](https://github.com/ZengineHQ/mayan/commit/993e4ab))
* copy node modules over and include into build process for frontend plugins ([0789080](https://github.com/ZengineHQ/mayan/commit/0789080))
* display a message when done deploying backend/frontend ([44cba52](https://github.com/ZengineHQ/mayan/commit/44cba52))
* display output from pre/post build scripts ([bf26ebf](https://github.com/ZengineHQ/mayan/commit/bf26ebf))
* dont abort deploy if no css, just send an empty file instead ([ad68820](https://github.com/ZengineHQ/mayan/commit/ad68820))
* enable yargs strict mode to catch invalid commands ([d7feff1](https://github.com/ZengineHQ/mayan/commit/d7feff1))
* implement a top level verbose flag ([09838a6](https://github.com/ZengineHQ/mayan/commit/09838a6))
* implement backend and frontend build params ([07b2985](https://github.com/ZengineHQ/mayan/commit/07b2985))
* implement zipping the service ([555a70e](https://github.com/ZengineHQ/mayan/commit/555a70e))
* improve how script output is handled ([b5f4118](https://github.com/ZengineHQ/mayan/commit/b5f4118))
* minify conditionally ([0e052fa](https://github.com/ZengineHQ/mayan/commit/0e052fa))
* replace strings in frontend plugin ([9f67210](https://github.com/ZengineHQ/mayan/commit/9f67210))
* require confirmation for publishing plugins ([29880cc](https://github.com/ZengineHQ/mayan/commit/29880cc))
* rework backend service build to use listr ([95de9df](https://github.com/ZengineHQ/mayan/commit/95de9df))
* rework frontend build to use listr and display detailed progress ([ec2690b](https://github.com/ZengineHQ/mayan/commit/ec2690b))
* run pre and post build scripts for frontend plugins ([843ed86](https://github.com/ZengineHQ/mayan/commit/843ed86))
* support for common dependency pattern in frontend plugins ([7796e85](https://github.com/ZengineHQ/mayan/commit/7796e85))
* support legacy frontend modules package location ([7cb769c](https://github.com/ZengineHQ/mayan/commit/7cb769c))
* support symlinked dev helper modules for frontend plugins ([b141398](https://github.com/ZengineHQ/mayan/commit/b141398))
* use gulp to build frontend plugins ([f1bc5eb](https://github.com/ZengineHQ/mayan/commit/f1bc5eb))



<a name="1.1.0"></a>
# 1.1.0 (2018-08-08)


### Bug Fixes

* api endpoint should default to zenginehq ([4d61286](https://github.com/ZengineHQ/mayan/commit/4d61286))
* babel plugins config ([152519e](https://github.com/ZengineHQ/mayan/commit/152519e))
* backend post build scripts ([6bbbb32](https://github.com/ZengineHQ/mayan/commit/6bbbb32))
* camelCaseToDash generating output inconsistent with maya ([8646ea7](https://github.com/ZengineHQ/mayan/commit/8646ea7))
* don’t assume frontend module will have a package.json ([a3bcfe4](https://github.com/ZengineHQ/mayan/commit/a3bcfe4))
* ensure plugin registration is always last ([be91cde](https://github.com/ZengineHQ/mayan/commit/be91cde))
* fallback to zengine api in backend deploy as well ([95a17eb](https://github.com/ZengineHQ/mayan/commit/95a17eb))
* handleScriptOutput fails when empty result ([c9c78ce](https://github.com/ZengineHQ/mayan/commit/c9c78ce))
* make runSequential throw so Listr knows an error ocurred ([d6fd23e](https://github.com/ZengineHQ/mayan/commit/d6fd23e))
* make sure context sets default environment ([f1e8ae2](https://github.com/ZengineHQ/mayan/commit/f1e8ae2))
* path to backend build ([9c137d5](https://github.com/ZengineHQ/mayan/commit/9c137d5))
* path to backend service archive ([1b147fb](https://github.com/ZengineHQ/mayan/commit/1b147fb))
* publish command also missing default endpoint ([c9cc944](https://github.com/ZengineHQ/mayan/commit/c9cc944))
* runScript error when no package.json ([25b8bdd](https://github.com/ZengineHQ/mayan/commit/25b8bdd))
* wgn dashed replacement ([50288ba](https://github.com/ZengineHQ/mayan/commit/50288ba))


### Features

* add a ‘skip-build’ parameter for the deploy command ([b375375](https://github.com/ZengineHQ/mayan/commit/b375375))
* add backend and frontend flags for deploy command ([6971962](https://github.com/ZengineHQ/mayan/commit/6971962))
* add backend and frontend flags for publish task as well ([408b8c0](https://github.com/ZengineHQ/mayan/commit/408b8c0))
* allow both build and deploy steps to be skipped for the publish command ([ce16d23](https://github.com/ZengineHQ/mayan/commit/ce16d23))
* build backend plugin and run post build npm script ([4f7b602](https://github.com/ZengineHQ/mayan/commit/4f7b602))
* cleanup temporary build folder ([993e4ab](https://github.com/ZengineHQ/mayan/commit/993e4ab))
* copy node modules over and include into build process for frontend plugins ([0789080](https://github.com/ZengineHQ/mayan/commit/0789080))
* display a message when done deploying backend/frontend ([44cba52](https://github.com/ZengineHQ/mayan/commit/44cba52))
* display output from pre/post build scripts ([bf26ebf](https://github.com/ZengineHQ/mayan/commit/bf26ebf))
* dont abort deploy if no css, just send an empty file instead ([ad68820](https://github.com/ZengineHQ/mayan/commit/ad68820))
* enable yargs strict mode to catch invalid commands ([d7feff1](https://github.com/ZengineHQ/mayan/commit/d7feff1))
* implement a top level verbose flag ([09838a6](https://github.com/ZengineHQ/mayan/commit/09838a6))
* implement backend and frontend build params ([07b2985](https://github.com/ZengineHQ/mayan/commit/07b2985))
* implement zipping the service ([555a70e](https://github.com/ZengineHQ/mayan/commit/555a70e))
* improve how script output is handled ([b5f4118](https://github.com/ZengineHQ/mayan/commit/b5f4118))
* minify conditionally ([0e052fa](https://github.com/ZengineHQ/mayan/commit/0e052fa))
* replace strings in frontend plugin ([9f67210](https://github.com/ZengineHQ/mayan/commit/9f67210))
* require confirmation for publishing plugins ([29880cc](https://github.com/ZengineHQ/mayan/commit/29880cc))
* rework backend service build to use listr ([95de9df](https://github.com/ZengineHQ/mayan/commit/95de9df))
* rework frontend build to use listr and display detailed progress ([ec2690b](https://github.com/ZengineHQ/mayan/commit/ec2690b))
* run pre and post build scripts for frontend plugins ([843ed86](https://github.com/ZengineHQ/mayan/commit/843ed86))
* support for common dependency pattern in frontend plugins ([7796e85](https://github.com/ZengineHQ/mayan/commit/7796e85))
* support legacy frontend modules package location ([7cb769c](https://github.com/ZengineHQ/mayan/commit/7cb769c))
* support symlinked dev helper modules for frontend plugins ([b141398](https://github.com/ZengineHQ/mayan/commit/b141398))
* use gulp to build frontend plugins ([f1bc5eb](https://github.com/ZengineHQ/mayan/commit/f1bc5eb))
