import SkyBlockMemberInventoriesBagsTalisman from './SkyBlockMemberInventoriesBagsTalisman.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberInventoriesBagsTalisman', () => {
  const data = new SkyBlockMemberInventoriesBagsTalisman({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberInventoriesBagsTalisman);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberInventoriesBagsTalisman>();
});
