import SkyBlockMemberInventoriesInventory from './SkyBlockMemberInventoriesInventory.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberInventoriesInventory', () => {
  const data = new SkyBlockMemberInventoriesInventory({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberInventoriesInventory);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberInventoriesInventory>();
});
