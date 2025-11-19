import SkyBlockMemberInventoriesBackpack from './SkyBlockMemberInventoriesBackpack.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberInventoriesBackpack', () => {
  const data = new SkyBlockMemberInventoriesBackpack({ stats: 'meow' }, '0');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberInventoriesBackpack);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberInventoriesBackpack>();
  expect(data.backpackItemBase64).toBeDefined();
  expectTypeOf(data.backpackItemBase64).toEqualTypeOf<string>();
  expect(data.backpackContentsBase64).toBeDefined();
  expectTypeOf(data.backpackContentsBase64).toEqualTypeOf<string>();
});
