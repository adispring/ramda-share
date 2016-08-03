'use strict';

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _biz = require('../lib/mock/biz');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tap = _ramda2.default.tap(console.log);

var captalize = function captalize(str) {
  return '' + _ramda2.default.compose(_ramda2.default.toUpper, _ramda2.default.head)(str) + _ramda2.default.tail(str);
};

var bizProcessFP = _ramda2.default.compose(_ramda2.default.join(','), _ramda2.default.map(captalize), _ramda2.default.map(_ramda2.default.prop('name')), _ramda2.default.filter(function (item) {
  return item.sale > 500;
}));

var bizResult = bizProcessFP(_biz.bizList);
console.log(bizResult);

var bizProcessIP = function bizProcessIP(bizes) {
  var result = '';
  for (var i = 0; i < bizes.length; i++) {
    if (bizes[i].sale > 500) {
      result = result.concat(captalize(bizes[i].name)).concat(',');
    }
  }
  return result.substring(0, result.length - 1);
};

var bizResultIP = bizProcessIP(_biz.bizList);
console.log(bizResultIP);