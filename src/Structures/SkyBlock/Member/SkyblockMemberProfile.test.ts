import SkyblockMemberProfile from './SkyblockMemberProfile.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockMemberProfile', () => {
  const data = new SkyblockMemberProfile({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberProfile);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberProfile>();
  expect(data.firstJoin).toBeDefined();
  expectTypeOf(data.firstJoin).toEqualTypeOf<number>();
  expect(data.firstJoinDate).toBeDefined();
  expectTypeOf(data.firstJoinDate).toEqualTypeOf<Date>();
  expect(data.personalBankUpgrade).toBeDefined();
  expectTypeOf(data.personalBankUpgrade).toEqualTypeOf<number>();
  expect(data.bankAccount).toBeDefined();
  expectTypeOf(data.bankAccount).toEqualTypeOf<number>();
  expect(data.hasCookie).toBeDefined();
  expectTypeOf(data.hasCookie).toEqualTypeOf<boolean>();
});
