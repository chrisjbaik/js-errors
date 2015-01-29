// Referenced from: http://stackoverflow.com/questions/13193232/javascript-error-because-of-global-scope-variables
var x = 3;
(function (){
  console.log('before', x); // 3 is expected but 'undefined' is logged
  var x = 7;
  console.log('after', x);
  return ;
})();

/*

Alternatives:

1) Remove the 'var' from line 5.
2) Put line 5 at line 4 (depending on the preferred behavior).

*/