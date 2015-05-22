Test repository to try running Jasme unit tests of TypeScript code with [tsify](https://github.com/smrq/tsify).
See [#48](https://github.com/smrq/tsify/issues/48).

    > git clone …
    > npm install
    > gulp test
    [18:18:44] Using gulpfile ~/Develop/Github/tsify-test/gulpfile.js
    [18:18:44] Starting 'test'...
    [18:18:44] Starting Karma server...
    /some/path/tsify-test/node_modules/karma-browserify/node_modules/browserify/node_modules/resolve/lib/sync.js:33
        throw new Error("Cannot find module '" + x + "' from '" + y + "'");
              ^
    Error: Cannot find module '[object Object]' from '/some/path/tsify-test'
        at Function.module.exports (/some/path/tsify-test/node_modules/karma-browserify/node_modules/browserify/node_modules/resolve/lib/sync.js:33:11)
        at Browserify.plugin (/some/path/tsify-test/node_modules/karma-browserify/node_modules/browserify/index.js:342:29)
        at /some/path/tsify-test/node_modules/karma-browserify/lib/bro.js:197:16
        at Function.forEach (/some/path/tsify-test/node_modules/karma-browserify/node_modules/lodash/dist/lodash.js:3298:15)
        at createBundle (/some/path/tsify-test/node_modules/karma-browserify/lib/bro.js:191:7)
        at framework (/some/path/tsify-test/node_modules/karma-browserify/lib/bro.js:127:9)
        at invoke (/some/path/tsify-test/node_modules/karma/node_modules/di/lib/injector.js:75:15)
        at framework (/some/path/tsify-test/node_modules/karma-browserify/index.js:6:19)
        at Array.invoke (/some/path/tsify-test/node_modules/karma/node_modules/di/lib/injector.js:75:15)
        at get (/some/path/tsify-test/node_modules/karma/node_modules/di/lib/injector.js:48:43)

    /some/path/tsify-test/gulpfile.js:34
          throw error;
                ^
    Error: karma exited with code 1
        at done (/some/path/tsify-test/node_modules/gulp-karma/index.js:56:30)
        at ChildProcess.<anonymous> (/some/path/tsify-test/node_modules/gulp-karma/index.js:82:7)
        at ChildProcess.emit (events.js:110:17)
        at Process.ChildProcess._handle.onexit (child_process.js:1074:12)
