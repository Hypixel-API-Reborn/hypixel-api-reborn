import { CalculateAverage, Divide, TicksToMilliseconds } from './index.js';
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

test('TicksToMilliseconds', () => {
  expect(TicksToMilliseconds(1)).toBe(50);
  expectTypeOf(TicksToMilliseconds(1)).toBeNumber();
  expect(TicksToMilliseconds(20)).toBe(1000);
  expectTypeOf(TicksToMilliseconds(20)).toBeNumber();
  expect(TicksToMilliseconds(123)).toBe(6150);
  expectTypeOf(TicksToMilliseconds(123)).toBeNumber();
});

test('CalculateAverage', () => {
  expect(CalculateAverage([])).toBe(0);
  expectTypeOf(CalculateAverage([])).toBeNumber();
  expect(CalculateAverage([1, 2, 3, 4, 5])).toBe(3);
  expectTypeOf(CalculateAverage([1, 2, 3, 4, 5])).toBeNumber();
  expect(CalculateAverage([100, 156, 1, 487453, 67984532, 52431234, 0, 2, 1, 10])).toBe(12090348.9);
  expectTypeOf(CalculateAverage([1, 2, 3, 4, 5])).toBeNumber();
});
