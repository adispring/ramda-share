import R from 'ramda';
import { Maybe } from 'ramda-fantasy';

const dog = {
  hasky: {
    bark: 'wooo~~~',
  },
  teddy: {
    bark: 'wan,wan',
  },
};

const cat = {
  dragonLi: {
    miu: 'mia~~~~v',
  },
  egyptianMau: {
    miu: 'miu, miu',
  },
};

const sound = R.compose(
  R.map(R.prop('bark')),
  Maybe,
  R.prop('hasky')
);

const hskcatbark = sound(cat);
const hskdogbark = sound(dog);
console.log(`hskcatbark: ${hskcatbark}; hskdogbark: ${hskdogbark}`);
