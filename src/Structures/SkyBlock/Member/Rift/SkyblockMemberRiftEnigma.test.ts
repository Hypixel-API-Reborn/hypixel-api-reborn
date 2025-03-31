import SkyblockMemberRiftEnigma from './SkyblockMemberRiftEnigma.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockMemberRiftEnigma', () => {
  const data = new SkyblockMemberRiftEnigma({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberRiftEnigma);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberRiftEnigma>();
  expect(data.boughtCloak).toBeDefined();
  expectTypeOf(data.boughtCloak).toEqualTypeOf<boolean>();
  expect(data.foundSouls).toBeDefined();
  expectTypeOf(data.foundSouls).toEqualTypeOf<string[]>();
  expect(data.claimedBonusIndex).toBeDefined();
  expectTypeOf(data.claimedBonusIndex).toEqualTypeOf<number>();
});
