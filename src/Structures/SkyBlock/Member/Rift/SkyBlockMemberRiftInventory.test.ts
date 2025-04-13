import SkyBlockMemberInventoriesArmor from '../Inventories/Armor/SkyBlockMemberInventoriesArmor.js';
import SkyBlockMemberInventoriesEquipment from '../Inventories/Equipment/SkyBlockMemberInventoriesEquipment.js';
import SkyBlockMemberInventoriesInventory from '../Inventories/Inventory/SkyBlockMemberInventoriesInventory.js';
import SkyBlockMemberRiftInventory from './SkyBlockMemberRiftInventory.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberRiftInventory', () => {
  const data = new SkyBlockMemberRiftInventory({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberRiftInventory);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberRiftInventory>();
  expect(data.enderChestPageIcons).toBeDefined();
  expectTypeOf(data.enderChestPageIcons).toEqualTypeOf<[]>();
  expect(data.inventory).toBeDefined();
  expectTypeOf(data.inventory).toEqualTypeOf<SkyBlockMemberInventoriesInventory>();
  expect(data.armor).toBeDefined();
  expectTypeOf(data.armor).toEqualTypeOf<SkyBlockMemberInventoriesArmor>();
  expect(data.equipment).toBeDefined();
  expectTypeOf(data.equipment).toEqualTypeOf<SkyBlockMemberInventoriesEquipment>();
  expect(data.enderChest).toBeDefined();
  expectTypeOf(data.enderChest).toEqualTypeOf<SkyBlockMemberInventoriesInventory>();
});
