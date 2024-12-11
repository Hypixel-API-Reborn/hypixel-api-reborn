import Divide from './Divide.js';
import { expect, expectTypeOf, test } from 'vitest';

test('Divide', () => {
  expect(Divide(10, 2)).toBe(5);
  expectTypeOf(Divide(10, 2)).toBeNumber();
  expect(Divide(10, 0)).toBe(10);
  expectTypeOf(Divide(10, 0)).toBeNumber();
  expect(Divide(0, 0)).toBe(0);
  expectTypeOf(Divide(0, 0)).toBeNumber();
  expect(Divide(-5, 10)).toBe(-0.5);
  expectTypeOf(Divide(-5, 10)).toBeNumber();
});
