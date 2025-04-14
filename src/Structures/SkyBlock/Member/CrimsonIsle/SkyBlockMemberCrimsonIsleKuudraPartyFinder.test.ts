import SkyBlockMemberCrimsonIsleKuudraPartyFinder from './SkyBlockMemberCrimsonIsleKuudraPartyFinder.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { CrimsonIsleKuudraTier } from '../../../../Types/SkyBlock.js';
import type { UserInput } from '../../../../Types/Global.js';

test('SkyBlockMemberCrimsonIsleKuudraPartyFinder', () => {
  const data = new SkyBlockMemberCrimsonIsleKuudraPartyFinder({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberCrimsonIsleKuudraPartyFinder);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberCrimsonIsleKuudraPartyFinder>();
  expect(data.searchTier).toBeDefined();
  expectTypeOf(data.searchTier).toEqualTypeOf<CrimsonIsleKuudraTier | 'UNKNOWN'>();
  expect(data.groupBuildTier).toBeDefined();
  expectTypeOf(data.groupBuildTier).toEqualTypeOf<CrimsonIsleKuudraTier | 'UNKNOWN'>();
  expect(data.groupBuildNote).toBeDefined();
  expectTypeOf(data.groupBuildNote).toEqualTypeOf<UserInput | null>();
  expect(data.groupBuildRequiredCombatLevel).toBeDefined();
  expectTypeOf(data.groupBuildRequiredCombatLevel).toEqualTypeOf<number | null>();
});
