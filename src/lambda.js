import R, { curry } from 'ramda';

const lambdaMap = [1, 2, 3].map(x => x * x);

console.log(lambdaMap);

const add = (x, y) => x + y; // ❌

const addc = x => y => x + y;

// curry((x, y) => x + y): x => y => x + y
