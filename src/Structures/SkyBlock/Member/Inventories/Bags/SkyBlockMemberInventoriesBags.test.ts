import SkyBlockMemberInventoriesBags from './SkyBlockMemberInventoriesBags.js';
import SkyBlockMemberInventoriesBagsTalisman from './SkyBlockMemberInventoriesBagsTalisman.js';
import SkyBlockMemberInventoriesInventory from '../Inventory/SkyBlockMemberInventoriesInventory.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberInventoriesBags', () => {
  const data = new SkyBlockMemberInventoriesBags({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberInventoriesBags);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberInventoriesBags>();
  expect(data.potion).toBeDefined();
  expect(data.potion).toBeInstanceOf(SkyBlockMemberInventoriesInventory);
  expectTypeOf(data.potion).toEqualTypeOf<SkyBlockMemberInventoriesInventory>();
  expect(data.talisman).toBeDefined();
  expect(data.talisman).toBeInstanceOf(SkyBlockMemberInventoriesBagsTalisman);
  expectTypeOf(data.talisman).toEqualTypeOf<SkyBlockMemberInventoriesBagsTalisman>();
  expect(data.fishing).toBeDefined();
  expect(data.fishing).toBeInstanceOf(SkyBlockMemberInventoriesInventory);
  expectTypeOf(data.fishing).toEqualTypeOf<SkyBlockMemberInventoriesInventory>();
  expect(data.sacks).toBeDefined();
  expect(data.sacks).toBeInstanceOf(SkyBlockMemberInventoriesInventory);
  expectTypeOf(data.sacks).toEqualTypeOf<SkyBlockMemberInventoriesInventory>();
  expect(data.quiver).toBeDefined();
  expect(data.quiver).toBeInstanceOf(SkyBlockMemberInventoriesInventory);
  expectTypeOf(data.quiver).toEqualTypeOf<SkyBlockMemberInventoriesInventory>();
});
