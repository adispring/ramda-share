'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var add = exports.add = function add(x, y) {
  return x + y;
};

// curryAdd is a closure, it's inner return function can hold its context.
var curryAdd = exports.curryAdd = function curryAdd(x, y) {
  if (typeof y === 'undefined') {
    return function (yn) {
      return x + yn;
    };
  }
  return x + y;
};

var a = add(1, 2);
var addOne = add(1);
// const c = addOne(2);

console.log('add(1, 2): ' + a + '\n add(1): ' + addOne + '\n ');

var ac = curryAdd(1, 2);
var addOnec = curryAdd(1);
var cc = addOnec(2);

console.log('curryAdd(1, 2): ' + ac + '\n curryAdd(1): ' + addOnec + '\n addOnec(2): ' + cc);