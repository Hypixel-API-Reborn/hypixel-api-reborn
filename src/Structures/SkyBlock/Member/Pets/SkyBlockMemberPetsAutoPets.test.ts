import SkyBlockMemberPetsAutoPetRule from './SkyBlockMemberPetsAutoPetRule.js';
import SkyBlockMemberPetsAutoPets from './SkyBlockMemberPetsAutoPets.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberPetsAutoPets', () => {
  const data = new SkyBlockMemberPetsAutoPets({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberPetsAutoPets);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberPetsAutoPets>();
  expect(data.rulesLimit).toBeDefined();
  expect(data.rulesLimit).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.rulesLimit).toEqualTypeOf<number>();
  expect(data.rules).toBeDefined();
  expectTypeOf(data.rules).toEqualTypeOf<SkyBlockMemberPetsAutoPetRule[]>();
});
