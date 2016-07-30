'use strict';

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var aList = _ramda2.default.range(1, 4);

var cube = function cube(x) {
  return x * x * x;
};

var cubesumIP = function cubesumIP(list) {
  var sumi = 0;
  for (var i = 0; i < list.length; i++) {
    sumi += cube(list[i]);
  }
  return sumi;
};

var cubesumFP = (0, _ramda.compose)(_ramda.sum, (0, _ramda.map)(cube));

var csIP = cubesumIP(aList);
var csFP = cubesumFP(aList);
console.log(csIP, csFP);