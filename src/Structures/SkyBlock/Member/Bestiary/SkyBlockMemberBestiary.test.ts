import SkyBlockMemberBestiary from './SkyBlockMemberBestiary.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { BestiaryCategory } from '../../../../Types/SkyBlock.js';

test('SkyBlockMemberBestiary', () => {
  /* eslint-disable camelcase */
  const data = new SkyBlockMemberBestiary({
    kills: {
      last_killed_mob: 'pest_cricket_1',
      pest_fly_1: 16,
      pest_rat_1: 17,
      pest_cricket_1: 11,
      pest_locust_1: 22,
      pest_slug_1: 17,
      pest_mite_1: 15,
      pest_worm_1: 13,
      pest_moth_1: 16,
      pest_beetle_1: 11,
      pest_mosquito_1: 17
    }
  });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberBestiary);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberBestiary>();
  expect(data.kills).toBeDefined();
  expectTypeOf(data.kills).toEqualTypeOf<Record<string, number>>();
  expect(data.deaths).toBeDefined();
  expectTypeOf(data.deaths).toEqualTypeOf<Record<string, number>>();
  expect(data.lastClaimedMilestone).toBeDefined();
  expectTypeOf(data.lastClaimedMilestone).toEqualTypeOf<number>();
  expect(data.level).toBeDefined();
  expectTypeOf(data.level).toEqualTypeOf<number>();
  expect(data.maxLevel).toBeDefined();
  expectTypeOf(data.maxLevel).toEqualTypeOf<number>();
  expect(data.familiesUnlocked).toBeDefined();
  expectTypeOf(data.familiesUnlocked).toEqualTypeOf<number>();
  expect(data.familiesCompleted).toBeDefined();
  expectTypeOf(data.familiesCompleted).toEqualTypeOf<number>();
  expect(data.totalFamilies).toBeDefined();
  expectTypeOf(data.totalFamilies).toEqualTypeOf<number>();
  expect(data.familyTiers).toBeDefined();
  expectTypeOf(data.familyTiers).toEqualTypeOf<number>();
  expect(data.maxFamilyTiers).toBeDefined();
  expectTypeOf(data.maxFamilyTiers).toEqualTypeOf<number>();
  expect(data.categories).toBeDefined();
  expectTypeOf(data.categories).toEqualTypeOf<Record<string, BestiaryCategory>>();
});
