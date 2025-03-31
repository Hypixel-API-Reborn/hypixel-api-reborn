import SkyblockMemberPetsAutoPets from './SkyblockMemberPetsAutoPets.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyblockMemberPetsAutoPetRule from './SkyblockMemberPetsAutoPetRule.js';

test('SkyblockMemberPetsAutoPets', () => {
  const data = new SkyblockMemberPetsAutoPets({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberPetsAutoPets);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberPetsAutoPets>();
  expect(data.rulesLimit).toBeDefined();
  expectTypeOf(data.rulesLimit).toEqualTypeOf<number>();
  expect(data.rules).toBeDefined();
  expectTypeOf(data.rules).toEqualTypeOf<SkyblockMemberPetsAutoPetRule[]>();
});
