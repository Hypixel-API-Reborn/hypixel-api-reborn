import SkyblockMemberRiftInventory from './SkyblockMemberRiftInventory.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyblockInventoryItem from '../../SkyblockInventoryItem.js';
import type { Armor, Equipment } from '../../../../Types/Skyblock.js';

test('SkyblockMemberRiftInventory', () => {
  const data = new SkyblockMemberRiftInventory({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberRiftInventory);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberRiftInventory>();
  expect(data.enderChestPageIcons).toBeDefined();
  expectTypeOf(data.enderChestPageIcons).toEqualTypeOf<[]>();
  expect(data.getInventory).toBeDefined();
  expectTypeOf(data.getInventory).toEqualTypeOf<() => Promise<SkyblockInventoryItem[]>>();
  expect(data.getArmor).toBeDefined();
  expectTypeOf(data.getArmor).toEqualTypeOf<() => Promise<Armor>>();
  expect(data.getEnderChest).toBeDefined();
  expectTypeOf(data.getEnderChest).toEqualTypeOf<() => Promise<SkyblockInventoryItem[]>>();
  expect(data.getEquipment).toBeDefined();
  expectTypeOf(data.getEquipment).toEqualTypeOf<() => Promise<Equipment>>();
});
