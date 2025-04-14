import SkyBlockMemberPlayerDataMinion from './SkyBlockMemberPlayerDataMinion.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { SkyBlockMinionName } from '../../../../Types/SkyBlock.js';

test('SkyBlockMemberPlayerDataMinion', () => {
  const data = new SkyBlockMemberPlayerDataMinion([], 'ACACIA');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberPlayerDataMinion);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberPlayerDataMinion>();
  expect(data.minion).toBeDefined();
  expectTypeOf(data.minion).toEqualTypeOf<SkyBlockMinionName>();
  expect(data.tier1).toBeDefined();
  expectTypeOf(data.tier1).toEqualTypeOf<boolean>();
  expect(data.tier2).toBeDefined();
  expectTypeOf(data.tier2).toEqualTypeOf<boolean>();
  expect(data.tier3).toBeDefined();
  expectTypeOf(data.tier3).toEqualTypeOf<boolean>();
  expect(data.tier4).toBeDefined();
  expectTypeOf(data.tier4).toEqualTypeOf<boolean>();
  expect(data.tier5).toBeDefined();
  expectTypeOf(data.tier5).toEqualTypeOf<boolean>();
  expect(data.tier6).toBeDefined();
  expectTypeOf(data.tier6).toEqualTypeOf<boolean>();
  expect(data.tier7).toBeDefined();
  expectTypeOf(data.tier7).toEqualTypeOf<boolean>();
  expect(data.tier8).toBeDefined();
  expectTypeOf(data.tier8).toEqualTypeOf<boolean>();
  expect(data.tier9).toBeDefined();
  expectTypeOf(data.tier9).toEqualTypeOf<boolean>();
  expect(data.tier10).toBeDefined();
  expectTypeOf(data.tier10).toEqualTypeOf<boolean>();
  expect(data.tier11).toBeDefined();
  expectTypeOf(data.tier11).toEqualTypeOf<boolean>();
  expect(data.tier12).toBeDefined();
  expectTypeOf(data.tier12).toEqualTypeOf<boolean>();
});
