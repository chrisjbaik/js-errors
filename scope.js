// Referenced from: http://www.smashingmagazine.com/2009/08/01/what-you-need-to-know-about-javascript-scope/

var g = "global";
function go() { 
  var l = "local";
}
go();
console.log(l); // throws a reference error

/*

Alternatives:

1) Remove `var` keyword to make `l` a global variable. (And optionally, initialize `l` outside the function to be clearer.)

*/