'use strict';

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sqrt = function sqrt(x) {
  return x * x;
};

var mapSqrt = (0, _ramda.map)(sqrt, [1, 2, 3]);

console.log(mapSqrt);

var mapIP = function mapIP(fn, list) {
  var result = [];
  for (var i = 0; i < list.length; i++) {
    result[i] = fn(list[i]);
  }
  return result;
};

console.log(mapIP(sqrt, [1, 2, 3]));