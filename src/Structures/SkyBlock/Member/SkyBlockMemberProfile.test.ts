import SkyBlockMemberProfile from './SkyBlockMemberProfile.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberProfile', () => {
  const data = new SkyBlockMemberProfile({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberProfile);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberProfile>();
  expect(data.firstJoin).toBeDefined();
  expect(data.firstJoin).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.firstJoin).toEqualTypeOf<number>();
  expect(data.firstJoinDate).toBeDefined();
  expect(data.firstJoinDate).toBeInstanceOf(Date);
  expectTypeOf(data.firstJoinDate).toEqualTypeOf<Date>();
  expect(data.personalBankUpgrade).toBeDefined();
  expect(data.personalBankUpgrade).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.personalBankUpgrade).toEqualTypeOf<number>();
  expect(data.bankAccount).toBeDefined();
  expect(data.bankAccount).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.bankAccount).toEqualTypeOf<number>();
  expect(data.hasCookie).toBeDefined();
  expectTypeOf(data.hasCookie).toEqualTypeOf<boolean>();
});
