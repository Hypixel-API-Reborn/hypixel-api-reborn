import SkyBlockInventoryItem from '../../../Inventory/SkyBlockInventoryItem.js';
import SkyBlockMemberInventoriesArmorDecoded from './SkyBlockMemberInventoriesArmorDecoded.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberInventoriesArmorDecoded', () => {
  const data = new SkyBlockMemberInventoriesArmorDecoded({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberInventoriesArmorDecoded);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberInventoriesArmorDecoded>();
  expect(data.helmet).toBeDefined();
  expectTypeOf(data.helmet).toEqualTypeOf<SkyBlockInventoryItem | null>();
  expect(data.chestplate).toBeDefined();
  expectTypeOf(data.chestplate).toEqualTypeOf<SkyBlockInventoryItem | null>();
  expect(data.leggings).toBeDefined();
  expectTypeOf(data.leggings).toEqualTypeOf<SkyBlockInventoryItem | null>();
  expect(data.boots).toBeDefined();
  expectTypeOf(data.boots).toEqualTypeOf<SkyBlockInventoryItem | null>();
});
