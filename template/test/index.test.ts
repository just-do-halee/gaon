import { Err } from 'rusultts';
import { divide } from '../src';

describe('blah', () => {
  it('works', () => {
    expect(divide(1, 1).unwrap()).toEqual(1);
    try {
      divide(1, 0).unwrap();
    } catch (e) {
      expect(Err.eSplit(e)[0]).toEqual('b cannot be 0');
    }
  });
});
