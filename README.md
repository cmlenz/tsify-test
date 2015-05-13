Test repository to demonstrate [tsify](https://github.com/smrq/tsify) issue [#43](https://github.com/smrq/tsify/issues/43).

	> git clone …
	> npm install
	> gulp
	[10:48:21] Using gulpfile ~/Develop/Github/tsify-test/gulpfile.js
	[10:48:21] Starting 'default'...

	events.js:85
	    throw er; // Unhandled 'error' event
	          ^
	TS2322: src/test.ts(6,12): TS2322: [object Object]

Note the error message. Also note that the other errors are not displayed.

Comment out lines 5–7 in `src/test.ts` and rerun gulp:

	TS2322: src/test.ts(10,5): TS2322: Type 'number' is not assignable to type 'string'.

Now it's showing the second error, but the third isn't shown.
