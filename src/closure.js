
const closingScope = freeX => {
  const freeY = 2;
  const func = z => freeX + freeY + z;
  return func;
};

const closure = closingScope(1);

const result = closure(3);

console.log(result);
