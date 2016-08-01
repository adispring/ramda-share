'use strict';

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _ramdaFantasy = require('ramda-fantasy');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dog = {
  hasky: {
    bark: 'aooo~~~'
  },
  teddy: {
    bark: 'wan,wan'
  }
};

var cat = {
  dragonLi: {
    miu: 'mia~~~~v'
  },
  egyptianMau: {
    miu: 'miu, miu'
  }
};

var sound = _ramda2.default.compose(_ramda2.default.map(_ramda2.default.prop('bark')), _ramdaFantasy.Maybe, _ramda2.default.prop('hasky'));

var hskcatbark = sound(cat);
var hskdogbark = sound(dog);
console.log('hskcatbark: ' + hskcatbark + '; hskdogbark: ' + hskdogbark);