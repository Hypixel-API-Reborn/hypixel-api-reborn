import SkyBlockInventoryItem from '../../../Inventory/SkyBlockInventoryItem.ts';
import SkyBlockMemberInventoriesInventoryDecoded from './SkyBlockMemberInventoriesInventoryDecoded.ts';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberInventoriesInventoryDecoded', () => {
  const data = new SkyBlockMemberInventoriesInventoryDecoded([]);
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberInventoriesInventoryDecoded);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberInventoriesInventoryDecoded>();
  expect(data.items).toBeDefined();
  expectTypeOf(data.items).toEqualTypeOf<SkyBlockInventoryItem[]>();
});
