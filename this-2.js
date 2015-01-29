// Referenced from: Hack Reactor Javascript Crash Course at jsconf2014 (http://www.hackreactor.com/)
var fn = function () { console.log(this.name); };
var obj = { myfn: fn, name: 'obj' };
var ob2 = { myfn: obj.myfn, name: 'ob2' }; 
obj.myfn(); // logs obj
ob2.myfn(); // logs ob2

/*

`this` references the object to the left of the dot at call-time. This is potentially confusing behavior.

*/