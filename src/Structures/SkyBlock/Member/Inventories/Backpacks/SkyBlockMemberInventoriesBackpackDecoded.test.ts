import SkyBlockInventoryItem from '../../../Inventory/SkyBlockInventoryItem.js';
import SkyBlockMemberInventoriesBackpackDecoded from './SkyBlockMemberInventoriesBackpackDecoded.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberInventoriesBackpackDecoded', () => {
  const data = new SkyBlockMemberInventoriesBackpackDecoded({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberInventoriesBackpackDecoded);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberInventoriesBackpackDecoded>();
  expect(data.icon).toBeDefined();
  expect(data.icon).toBeInstanceOf(SkyBlockInventoryItem);
  expectTypeOf(data.icon).toEqualTypeOf<SkyBlockInventoryItem>();
  expect(data.items).toBeDefined();
  expectTypeOf(data.items).toEqualTypeOf<SkyBlockInventoryItem[]>();
});
