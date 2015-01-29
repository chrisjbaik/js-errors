// Referenced from: http://www.toptal.com/javascript/10-most-common-javascript-mistakes

Game.prototype.restart = function () {
  this.clearLocalStorage();
  this.timer = setTimeout(function() {
    this.clearBoard();    // will run with `window` as `this`, throwing error
  }, 0);
};


/*

Alternatives:

1) Save a reference to the correct `this`, and use it later.

Game.prototype.restart = function () {
  this.clearLocalStorage();
  var self = this;   // save reference to 'this', while it's still this!
  this.timer = setTimeout(function(){
    self.clearBoard();    // oh OK, I do know who 'self' is!
  }, 0);
};

2) Use the `bind` method.

Game.prototype.restart = function () {
  this.clearLocalStorage();
  this.timer = setTimeout(this.reset.bind(this), 0);  // bind to 'this'
};

Game.prototype.reset = function(){
    this.clearBoard();    // ahhh, back in the context of the right 'this'!
};

*/