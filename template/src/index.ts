import { Result, Ok } from 'rusultts';
import err from './errors';

export const divide = (a: number, b: number): Result<number> => {
  if ('development' === process.env.NODE_ENV) {
    console.log('blazingly fast!');
  }
  if (b === 0) {
    return err.new('dividedByZero');
  }
  return Ok.new(a / b);
};

try {
  console.log(`4 / 2 = ${divide(4, 2).unwrap()}`);
} catch (e) {
  console.log(err.match(e, 'dividedByZero').unwrap());
}
