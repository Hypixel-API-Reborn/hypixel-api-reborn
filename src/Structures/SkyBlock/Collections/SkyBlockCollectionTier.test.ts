import SkyBlockCollectionTier from './SkyBlockCollectionTier.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockCollectionTier', () => {
  const data = new SkyBlockCollectionTier({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockCollectionTier);
  expectTypeOf(data).toEqualTypeOf<SkyBlockCollectionTier>();

  expect(data.tier).toBeDefined();
  expectTypeOf(data.tier).toEqualTypeOf<number>();
  expect(data.amountRequired).toBeDefined();
  expectTypeOf(data.amountRequired).toEqualTypeOf<number>();
  expect(data.unlocks).toBeDefined();
  expectTypeOf(data.unlocks).toEqualTypeOf<string[]>();
});
