import SkyBlockMemberInventoriesArmor from './SkyBlockMemberInventoriesArmor.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberInventoriesArmor', () => {
  const data = new SkyBlockMemberInventoriesArmor({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberInventoriesArmor);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberInventoriesArmor>();
});
