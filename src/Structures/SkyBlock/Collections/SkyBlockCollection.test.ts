import SkyBlockCollection from './SkyBlockCollection.js';
import SkyBlockCollectionTier from './SkyBlockCollectionTier.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockCollection', () => {
  const data = new SkyBlockCollection({ stats: 'meow' }, 'a');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockCollection);
  expectTypeOf(data).toEqualTypeOf<SkyBlockCollection>();
  expect(data.id).toBeDefined();
  expectTypeOf(data.id).toEqualTypeOf<string>();
  expect(data.name).toBeDefined();
  expectTypeOf(data.name).toEqualTypeOf<string>();
  expect(data.maxTiers).toBeDefined();
  expectTypeOf(data.maxTiers).toEqualTypeOf<number>();
  expect(data.tiers).toBeDefined();
  expectTypeOf(data.tiers).toEqualTypeOf<SkyBlockCollectionTier[]>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => string>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toEqual(data.id);
  expectTypeOf(data.toString()).toEqualTypeOf<string>();
});
