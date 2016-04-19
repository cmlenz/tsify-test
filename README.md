Test repository for a TypeScript project using Gulp, Browserify, Tsify, Karma, and Jasmine.

Please note that the unit test intentionally contains errors, originally to check how Tsify handles those.
See [#48](https://github.com/TypeStrong/tsify/issues/48). You can easily fix those errors by updating
`src/adder.spec.ts` as follows:
 * Change `Ader` to `Adder` in the import statement
 * Change `3` to `2` in the test expectation
