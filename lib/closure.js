"use strict";

var closingScope = function closingScope(freeX) {
  var freeY = 2;
  var func = function func(z) {
    return freeX + freeY + z;
  };
  return func;
};

var closure = closingScope(1);

var result = closure(3);

console.log(result);