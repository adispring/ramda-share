'use strict';
// var curry = require('lodash').curry;
import R from 'ramda';
import S from 'sanctuary';
import L from 'lodash';

const match = L.curry((what, str) => str.match(what));

console.log(match(/\s+/g, 'hello   world'));

console.log(S.Left('Cannot divede by zero'));

console.log(S.Right([1, 2, 3]).inspect());


