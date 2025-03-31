import SkyblockCollection from './SkyblockCollection.js';
import SkyblockCollectionTier from './SkyblockCollectionTier.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockCollection', () => {
  const data = new SkyblockCollection({ stats: 'meow' }, 'a');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockCollection);
  expectTypeOf(data).toEqualTypeOf<SkyblockCollection>();
  expect(data.id).toBeDefined();
  expectTypeOf(data.id).toEqualTypeOf<string>();
  expect(data.name).toBeDefined();
  expectTypeOf(data.name).toEqualTypeOf<string>();
  expect(data.maxTiers).toBeDefined();
  expectTypeOf(data.maxTiers).toEqualTypeOf<number>();
  expect(data.tiers).toBeDefined();
  expectTypeOf(data.tiers).toEqualTypeOf<SkyblockCollectionTier[]>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => string>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toEqual(data.id);
  expectTypeOf(data.toString()).toEqualTypeOf<string>();
});
