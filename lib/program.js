'use strict';
// var curry = require('lodash').curry;

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _sanctuary = require('sanctuary');

var _sanctuary2 = _interopRequireDefault(_sanctuary);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var match = _lodash2.default.curry(function (what, str) {
  return str.match(what);
});

console.log(match(/\s+/g, "hello   world"));