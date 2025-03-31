import SkyblockMemberCrimsonIsleKuudraPartyFinder from './SkyblockMemberCrimsonIsleKuudraPartyFinder.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { CrimsonIsleKuudraTier } from '../../../../Types/Skyblock.js';
import type { UserInput } from '../../../../Types/Global.js';

test('SkyblockMemberCrimsonIsleKuudraPartyFinder', () => {
  const data = new SkyblockMemberCrimsonIsleKuudraPartyFinder({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberCrimsonIsleKuudraPartyFinder);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberCrimsonIsleKuudraPartyFinder>();
  expect(data.searchTier).toBeDefined();
  expectTypeOf(data.searchTier).toEqualTypeOf<CrimsonIsleKuudraTier | 'UNKNOWN'>();
  expect(data.groupBuildTier).toBeDefined();
  expectTypeOf(data.groupBuildTier).toEqualTypeOf<CrimsonIsleKuudraTier | 'UNKNOWN'>();
  expect(data.groupBuildNote).toBeDefined();
  expectTypeOf(data.groupBuildNote).toEqualTypeOf<UserInput | null>();
  expect(data.groupBuildRequiredCombatLevel).toBeDefined();
  expectTypeOf(data.groupBuildRequiredCombatLevel).toEqualTypeOf<number | null>();
});
