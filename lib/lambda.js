'use strict';

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lambdaMap = [1, 2, 3].map(function (x) {
  return x * x;
});

console.log(lambdaMap);

var add = function add(x, y) {
  return x + y;
}; // ❌

var addc = function addc(x) {
  return function (y) {
    return x + y;
  };
};

// curry((x, y) => x + y): x => y => x + y