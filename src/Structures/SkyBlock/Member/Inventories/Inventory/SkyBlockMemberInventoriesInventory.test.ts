import SkyBlockMemberInventoriesInventory from './SkyBlockMemberInventoriesInventory.js';
import SkyBlockMemberInventoriesInventoryDecoded from './SkyBlockMemberInventoriesInventoryDecoded.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberInventoriesInventory', () => {
  const data = new SkyBlockMemberInventoriesInventory({
    // eslint-disable-next-line max-len
    data: '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'
  });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberInventoriesInventory);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberInventoriesInventory>();
  expect(data.base64).toBeDefined();
  expectTypeOf(data.base64).toEqualTypeOf<string | null>();
  expect(data.decodeData).toBeDefined();
  expectTypeOf(data.decodeData).toEqualTypeOf<() => Promise<SkyBlockMemberInventoriesInventoryDecoded | null>>();
  expect(data.decodeData()).toBeDefined();
  expectTypeOf(data.decodeData()).toEqualTypeOf<Promise<SkyBlockMemberInventoriesInventoryDecoded | null>>();
});
