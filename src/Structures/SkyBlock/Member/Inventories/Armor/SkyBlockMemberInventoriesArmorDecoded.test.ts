import SkyBlockMemberInventoriesArmorDecoded from './SkyBlockMemberInventoriesArmorDecoded.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberInventoriesArmorDecoded', () => {
  const data = new SkyBlockMemberInventoriesArmorDecoded({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberInventoriesArmorDecoded);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberInventoriesArmorDecoded>();
});
