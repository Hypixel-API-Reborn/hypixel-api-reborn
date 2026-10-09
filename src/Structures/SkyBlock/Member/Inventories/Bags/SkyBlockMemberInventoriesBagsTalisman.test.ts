import SkyBlockMemberInventoriesBagsTalisman from './SkyBlockMemberInventoriesBagsTalisman.ts';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberInventoriesBagsTalisman', () => {
  const data = new SkyBlockMemberInventoriesBagsTalisman({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberInventoriesBagsTalisman);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberInventoriesBagsTalisman>();
});
