import BedWarsBeds from './BedWarsBeds.js';
import { expect, expectTypeOf, test } from 'vitest';

test('BedWarsBeds', () => {
  const data = new BedWarsBeds({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(BedWarsBeds);
  expectTypeOf(data).toEqualTypeOf<BedWarsBeds>();
  expect(data.broken).toBeDefined();
  expect(data.broken).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.broken).toEqualTypeOf<number>();
  expect(data.lost).toBeDefined();
  expect(data.lost).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.lost).toEqualTypeOf<number>();
  expect(data.BLRatio).toBeDefined();
  expect(data.BLRatio).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.BLRatio).toEqualTypeOf<number>();
});
