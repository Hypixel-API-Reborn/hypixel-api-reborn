import RawSkyBlockInventoryItem from '../../../Inventory/RawSkyBlockInventoryItem.js';
import SkyBlockMemberInventoriesWardrobeSlot from './SkyBlockMemberInventoriesWardrobeSlot.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberInventoriesWardrobeSlot', () => {
  const data = new SkyBlockMemberInventoriesWardrobeSlot({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberInventoriesWardrobeSlot);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberInventoriesWardrobeSlot>();
  expect(data.id).toBeDefined();
  expect(data.id).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.id).toEqualTypeOf<number>();
  expect(data.helmet).toBeDefined();
  expectTypeOf(data.helmet).toEqualTypeOf<RawSkyBlockInventoryItem | null>();
  expect(data.chestplate).toBeDefined();
  expectTypeOf(data.chestplate).toEqualTypeOf<RawSkyBlockInventoryItem | null>();
  expect(data.leggings).toBeDefined();
  expectTypeOf(data.leggings).toEqualTypeOf<RawSkyBlockInventoryItem | null>();
  expect(data.boots).toBeDefined();
  expectTypeOf(data.boots).toEqualTypeOf<RawSkyBlockInventoryItem | null>();
});
