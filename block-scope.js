// Referenced from: http://www.toptal.com/javascript/10-most-common-javascript-mistakes

var i = 10;

for (var i = 0; i < 5; i++) {
  /* ... */
}
console.log(i);  // what will this output?

/*

Alternatives:

1) From Javascript Version 1.7, can use `let` keyword:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

2) Rename block-scope variables so there's no overlap.

*/