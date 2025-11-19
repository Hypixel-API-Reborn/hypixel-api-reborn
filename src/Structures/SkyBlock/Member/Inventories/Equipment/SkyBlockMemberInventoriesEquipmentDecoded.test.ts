import SkyBlockInventoryItem from '../../../Inventory/SkyBlockInventoryItem.js';
import SkyBlockMemberInventoriesEquipmentDecoded from './SkyBlockMemberInventoriesEquipmentDecoded.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberInventoriesEquipmentDecoded', () => {
  const data = new SkyBlockMemberInventoriesEquipmentDecoded([]);
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberInventoriesEquipmentDecoded);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberInventoriesEquipmentDecoded>();
  expect(data.gauntlet).toBeDefined();
  expectTypeOf(data.gauntlet).toEqualTypeOf<SkyBlockInventoryItem | null>();
  expect(data.belt).toBeDefined();
  expectTypeOf(data.belt).toEqualTypeOf<SkyBlockInventoryItem | null>();
  expect(data.cloak).toBeDefined();
  expectTypeOf(data.cloak).toEqualTypeOf<SkyBlockInventoryItem | null>();
  expect(data.necklace).toBeDefined();
  expectTypeOf(data.necklace).toEqualTypeOf<SkyBlockInventoryItem | null>();
});
