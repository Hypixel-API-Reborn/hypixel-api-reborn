import SkyBlockMemberInventoriesBaseInventory from './SkyBlockMemberInventoriesBaseInventory.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberInventoriesBaseInventory', () => {
  const data = new SkyBlockMemberInventoriesBaseInventory({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberInventoriesBaseInventory);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberInventoriesBaseInventory>();
  expect(data.base64).toBeDefined();
  expectTypeOf(data.base64).toEqualTypeOf<string | null>();
  expect(data.decodeData).toBeDefined();
  expectTypeOf(data.decodeData).toEqualTypeOf<() => Promise<any> | any>();
});
