import BedWarsItemsPurchased from './BedWarsItemsPurchased.js';
import { expect, expectTypeOf, test } from 'vitest';

test('BedWarsItemsPurchased', () => {
  const data = new BedWarsItemsPurchased({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(BedWarsItemsPurchased);
  expectTypeOf(data).toEqualTypeOf<BedWarsItemsPurchased>();
  expect(data.itemsPurchased).toBeDefined();
  expect(data.itemsPurchased).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.itemsPurchased).toEqualTypeOf<number>();
  expect(data.permanentItemsPurchased).toBeDefined();
  expect(data.permanentItemsPurchased).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.permanentItemsPurchased).toEqualTypeOf<number>();
});
