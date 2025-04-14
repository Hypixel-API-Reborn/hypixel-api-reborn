import SkyBlockCollection from './SkyBlockCollection.js';
import SkyBlockCollections from './SkyBlockCollections.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockCollections', () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = new SkyBlockCollections();
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockCollections);
  expectTypeOf(data).toEqualTypeOf<SkyBlockCollections>();
  expect(data.lastUpdated).toBeDefined();
  expectTypeOf(data.lastUpdated).toEqualTypeOf<number>();
  expect(data.lastUpdatedAt).toBeDefined();
  expectTypeOf(data.lastUpdatedAt).toEqualTypeOf<Date>();
  expect(data.version).toBeDefined();
  expectTypeOf(data.version).toEqualTypeOf<string>();
  expect(data.farming).toBeDefined();
  expectTypeOf(data.farming).toEqualTypeOf<SkyBlockCollection[]>();
  expect(data.mining).toBeDefined();
  expectTypeOf(data.mining).toEqualTypeOf<SkyBlockCollection[]>();
  expect(data.combat).toBeDefined();
  expectTypeOf(data.combat).toEqualTypeOf<SkyBlockCollection[]>();
  expect(data.foraging).toBeDefined();
  expectTypeOf(data.foraging).toEqualTypeOf<SkyBlockCollection[]>();
  expect(data.fishing).toBeDefined();
  expectTypeOf(data.fishing).toEqualTypeOf<SkyBlockCollection[]>();
  expect(data.rift).toBeDefined();
  expectTypeOf(data.rift).toEqualTypeOf<SkyBlockCollection[]>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => string>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toEqual(data.version);
  expectTypeOf(data.toString()).toEqualTypeOf<string>();
});
