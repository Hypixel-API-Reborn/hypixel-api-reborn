import SkyblockCollection from './SkyblockCollection.js';
import SkyblockCollections from './SkyblockCollections.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockCollections', () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = new SkyblockCollections();
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockCollections);
  expectTypeOf(data).toEqualTypeOf<SkyblockCollections>();
  expect(data.lastUpdated).toBeDefined();
  expectTypeOf(data.lastUpdated).toEqualTypeOf<number>();
  expect(data.lastUpdatedAt).toBeDefined();
  expectTypeOf(data.lastUpdatedAt).toEqualTypeOf<Date>();
  expect(data.version).toBeDefined();
  expectTypeOf(data.version).toEqualTypeOf<string>();
  expect(data.farming).toBeDefined();
  expectTypeOf(data.farming).toEqualTypeOf<SkyblockCollection[]>();
  expect(data.mining).toBeDefined();
  expectTypeOf(data.mining).toEqualTypeOf<SkyblockCollection[]>();
  expect(data.combat).toBeDefined();
  expectTypeOf(data.combat).toEqualTypeOf<SkyblockCollection[]>();
  expect(data.foraging).toBeDefined();
  expectTypeOf(data.foraging).toEqualTypeOf<SkyblockCollection[]>();
  expect(data.fishing).toBeDefined();
  expectTypeOf(data.fishing).toEqualTypeOf<SkyblockCollection[]>();
  expect(data.rift).toBeDefined();
  expectTypeOf(data.rift).toEqualTypeOf<SkyblockCollection[]>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => string>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toEqual(data.version);
  expectTypeOf(data.toString()).toEqualTypeOf<string>();
});
