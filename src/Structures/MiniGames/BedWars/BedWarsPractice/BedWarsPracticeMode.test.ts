import BedWarsPracticeMode from './BedWarsPracticeMode.js';
import { expect, expectTypeOf, test } from 'vitest';

test('BedWarsPracticeMode', () => {
  const data = new BedWarsPracticeMode({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(BedWarsPracticeMode);
  expectTypeOf(data).toEqualTypeOf<BedWarsPracticeMode>();
  expect(data.blocksPlaced).toBeDefined();
  expect(data.blocksPlaced).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.blocksPlaced).toEqualTypeOf<number>();
  expect(data.successfulAttempts).toBeDefined();
  expect(data.successfulAttempts).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.successfulAttempts).toEqualTypeOf<number>();
  expect(data.failedAttempts).toBeDefined();
  expect(data.failedAttempts).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.failedAttempts).toEqualTypeOf<number>();
  expect(data.attempts).toBeDefined();
  expect(data.attempts).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.attempts).toEqualTypeOf<number>();
  expect(data.successfulRatio).toBeDefined();
  expect(data.successfulRatio).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.successfulRatio).toEqualTypeOf<number>();
});
