/* eslint-disable @stylistic/max-len */
import SkyBlockMemberPlayerStatsEndIslandDragonFightDragon from './SkyBlockMemberPlayerStatsEndIslandDragonFightDragon.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberPlayerStatsEndIslandDragonFightDragon', () => {
  const data = new SkyBlockMemberPlayerStatsEndIslandDragonFightDragon({ stats: 'meow' }, 'old');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberPlayerStatsEndIslandDragonFightDragon);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberPlayerStatsEndIslandDragonFightDragon>();
  expect(data.mostDamage).toBeDefined();
  expect(data.mostDamage).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.mostDamage).toEqualTypeOf<number>();
  expect(data.highestRank).toBeDefined();
  expect(data.highestRank).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.highestRank).toEqualTypeOf<number>();
  expect(data.fastestKill).toBeDefined();
  expect(data.fastestKill).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.fastestKill).toEqualTypeOf<number>();
  expect(data.amountSummoned).toBeDefined();
  expect(data.amountSummoned).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.amountSummoned).toEqualTypeOf<number>();
  expect(data.summoningEyesContributed).toBeDefined();
  expect(data.summoningEyesContributed).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.summoningEyesContributed).toEqualTypeOf<number>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => number>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toBe(data.amountSummoned);
  expectTypeOf(data.toString()).toEqualTypeOf<number>();
});
