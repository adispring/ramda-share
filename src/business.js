import R from 'ramda';
import { bizList } from '../lib/mock/biz';

const tap = R.tap(console.log);

const captalize = str =>
  `${R.compose(R.toUpper, R.head)(str)}${R.tail(str)}`;

const bizProcessFP = R.compose(
  R.join(','),
  R.map(captalize),
  tap,
  R.map(R.prop('name')),
  R.filter(item => item.sale > 500)
);

const bizResult = bizProcessFP(bizList);
console.log(bizResult);

const bizProcessIP = bizes => {
  let result = '';
  for (let i = 0; i < bizes.length; i++) {
    if (bizes[i].sale > 500) {
      result = result.concat(captalize(bizes[i].name)).concat(',');
    }
  }
  return result.substring(0, result.length - 1);
};

const bizResultIP = bizProcessIP(bizList);
console.log(bizResultIP);
