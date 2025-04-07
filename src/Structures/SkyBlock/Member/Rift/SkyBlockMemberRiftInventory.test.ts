import SkyBlockMemberRiftInventory from './SkyBlockMemberRiftInventory.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyBlockInventoryItem from '../../Inventory/SkyBlockInventoryItem.js';
import type { Armor, Equipment } from '../../../../Types/SkyBlock.js';

test('SkyBlockMemberRiftInventory', () => {
  const data = new SkyBlockMemberRiftInventory({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberRiftInventory);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberRiftInventory>();
  expect(data.enderChestPageIcons).toBeDefined();
  expectTypeOf(data.enderChestPageIcons).toEqualTypeOf<[]>();
  expect(data.getInventory).toBeDefined();
  expectTypeOf(data.getInventory).toEqualTypeOf<() => Promise<SkyBlockInventoryItem[]>>();
  expect(data.getArmor).toBeDefined();
  expectTypeOf(data.getArmor).toEqualTypeOf<() => Promise<Armor>>();
  expect(data.getEnderChest).toBeDefined();
  expectTypeOf(data.getEnderChest).toEqualTypeOf<() => Promise<SkyBlockInventoryItem[]>>();
  expect(data.getEquipment).toBeDefined();
  expectTypeOf(data.getEquipment).toEqualTypeOf<() => Promise<Equipment>>();
});
