'use strict';
var curry = require('lodash').curry;

var match = curry(function(what, str) {
  return str.match(what);
});

console.log(match(/\s+/g, "hello   world"));
