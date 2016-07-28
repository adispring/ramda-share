"use strict";

// import R from 'ramda';

var memoize = function memoize(f) {
  var cache = {};
  return function () {
    var argStr = JSON.stringify(arguments);
    cache[argStr] = cache[argStr] || f.apply(f, arguments);
    return cache[argStr];
  };
};

var count = 0;
var sqrt = memoize(function (x) {
  count += 1;
  return x * x;
});

sqrt(3);
sqrt(3);
sqrt(3);

console.log("count: " + count);

sqrt(4);
sqrt(5);

console.log("count: " + count);

// 箭头函数不会在其内部暴露出  arguments 对象
// const memoizeArrow = f => {
//   const cache = {};
//   return (...args) => {
//     const argStr = JSON.stringify(args);
//     cache[argStr] = cache[argStr] || f.apply(f, args);
//     return cache[argStr];
//   };
// };