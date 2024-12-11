import { expect, test } from 'vitest';
import { monthAB } from './Oscillation.js';

test('Oscillation', () => {
  expect(monthAB(0)).toBe('b');
  expect(monthAB(1)).toBe('a');
  expect(monthAB(2)).toBe('b');
  expect(monthAB(3)).toBe('a');
  expect(monthAB(4)).toBe('b');
  expect(monthAB(5)).toBe('a');
  expect(monthAB(6)).toBe('b');
  expect(monthAB(7)).toBe('a');
  expect(monthAB(8)).toBe('b');
  expect(monthAB(9)).toBe('a');
  expect(monthAB(10)).toBe('b');
  expect(monthAB(11)).toBe('a');
  expect(monthAB(12)).toBe('b');
});
