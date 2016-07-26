'use strict';

var _sanctuary = require('sanctuary');

var _sanctuary2 = _interopRequireDefault(_sanctuary);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
/* eslint new-cap: ["error", { "capIsNew": false }] */
// 'use strict';
// import R from 'ramda';
var match = _lodash2.default.curry(function (what, str) {
  return str.match(what);
});

console.log(match(/\s+/g, 'hello   world'));

console.log(_sanctuary2.default.Left('Cannot divede by zero'));

console.log(_sanctuary2.default.Right([1, 2, 3]).inspect());