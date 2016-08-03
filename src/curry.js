export const add = (x, y) => x + y;

// curryAdd is a closure, it's inner return function can hold its context.
export const curryAdd = (x, y) => {
  if (typeof y === 'undefined') {
    return yn => x + yn;
  }
  return x + y;
};

const a = add(1, 2);
const addOne = add(1);
// const c = addOne(2);

console.log(`add(1, 2): ${a}\n add(1): ${addOne}\n `);

const ac = curryAdd(1, 2);
const addOnec = curryAdd(1);
const cc = addOnec(2);

console.log(`curryAdd(1, 2): ${ac}\n curryAdd(1): ${addOnec}\n addOnec(2): ${cc}`);
