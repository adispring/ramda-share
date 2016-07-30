import R, { compose, map, sum } from 'ramda';

const aList = R.range(1, 4);

const cube = x => x * x * x;

const cubesumIP = list => {
  let sumi = 0;
  for (let i = 0; i < list.length; i++) {
    sumi += cube(list[i]);
  }
  return sumi;
};

const cubesumFP = compose(sum, map(cube));

const csIP = cubesumIP(aList);
const csFP = cubesumFP(aList);
console.log(csIP, csFP);
