import BedWarsPracticeModeAttempts from './BedWarsPracticeModeAttempts.js';
import { expect, expectTypeOf, test } from 'vitest';

test('BedWarsPracticeModeAttempts', () => {
  const data = new BedWarsPracticeModeAttempts({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(BedWarsPracticeModeAttempts);
  expectTypeOf(data).toEqualTypeOf<BedWarsPracticeModeAttempts>();
  expect(data.failed).toBeDefined();
  expect(data.failed).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.failed).toEqualTypeOf<number>();
  expect(data.successful).toBeDefined();
  expect(data.successful).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.successful).toEqualTypeOf<number>();
  expect(data.total).toBeDefined();
  expect(data.total).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.total).toEqualTypeOf<number>();
});
