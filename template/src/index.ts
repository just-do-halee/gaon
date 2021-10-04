import { Result, Ok, Err } from 'rusultts';

export const divide = (a: number, b: number): Result<number> => {
  if ('development' === process.env.NODE_ENV) {
    console.log('blazingly fast!');
  }
  if (b === 0) {
    return Err.new(`b cannot be 0`, null);
  }
  return Ok.new(a / b);
};

const res = divide(4, 2).unwrap();
console.log(`4 / 2 = ${res}`);
