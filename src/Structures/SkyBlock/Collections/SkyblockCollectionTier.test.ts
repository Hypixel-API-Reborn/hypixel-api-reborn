import SkyblockCollectionTier from './SkyblockCollectionTier.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockCollectionTier', () => {
  const data = new SkyblockCollectionTier({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockCollectionTier);
  expectTypeOf(data).toEqualTypeOf<SkyblockCollectionTier>();

  expect(data.tier).toBeDefined();
  expectTypeOf(data.tier).toEqualTypeOf<number>();
  expect(data.amountRequired).toBeDefined();
  expectTypeOf(data.amountRequired).toEqualTypeOf<number>();
  expect(data.unlocks).toBeDefined();
  expectTypeOf(data.unlocks).toEqualTypeOf<string[]>();
});
