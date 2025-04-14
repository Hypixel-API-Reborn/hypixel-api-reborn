import SkyBlockMemberRiftEnigma from './SkyBlockMemberRiftEnigma.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberRiftEnigma', () => {
  const data = new SkyBlockMemberRiftEnigma({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberRiftEnigma);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberRiftEnigma>();
  expect(data.boughtCloak).toBeDefined();
  expectTypeOf(data.boughtCloak).toEqualTypeOf<boolean>();
  expect(data.foundSouls).toBeDefined();
  expectTypeOf(data.foundSouls).toEqualTypeOf<string[]>();
  expect(data.claimedBonusIndex).toBeDefined();
  expectTypeOf(data.claimedBonusIndex).toEqualTypeOf<number>();
});
