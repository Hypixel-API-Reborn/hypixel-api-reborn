import SkyBlockMemberInventoriesEquipment from './SkyBlockMemberInventoriesEquipment.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberInventoriesEquipment', () => {
  const data = new SkyBlockMemberInventoriesEquipment({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberInventoriesEquipment);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberInventoriesEquipment>();
});
