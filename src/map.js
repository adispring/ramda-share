import R, { map } from 'ramda';

const sqrt = x => x * x;

const mapSqrt = map(sqrt, [1, 2, 3]);

console.log(mapSqrt);

const mapIP = (fn, list) => {
  const result = [];
  for (let i = 0; i < list.length; i++) {
    result[i] = fn(list[i]);
  }
  return result;
};

console.log(mapIP(sqrt, [1, 2, 3]));

