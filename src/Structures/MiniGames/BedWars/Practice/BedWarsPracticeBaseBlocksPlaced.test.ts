import BedWarsPracticeBaseBlocksPlaced from './BedWarsPracticeBaseBlocksPlaced.js';
import { expect, expectTypeOf, test } from 'vitest';

test('BedWarsPracticeBaseBlocksPlaced', () => {
  const data = new BedWarsPracticeBaseBlocksPlaced({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(BedWarsPracticeBaseBlocksPlaced);
  expectTypeOf(data).toEqualTypeOf<BedWarsPracticeBaseBlocksPlaced>();
  expect(data.blocksPlaced).toBeDefined();
  expect(data.blocksPlaced).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.blocksPlaced).toEqualTypeOf<number>();
});
