import SkyblockMemberPlayerStatsEndIsland from './SkyblockMemberPlayerStatsEndIsland.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyblockMemberPlayerStatsEndIslandDragonFight from './SkyblockMemberPlayerStatsEndIslandDragonFight.js';

test('SkyblockMemberPlayerStatsEndIsland', () => {
  const data = new SkyblockMemberPlayerStatsEndIsland({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberPlayerStatsEndIsland);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberPlayerStatsEndIsland>();
  expect(data.dragonFight).toBeDefined();
  expectTypeOf(data.dragonFight).toEqualTypeOf<SkyblockMemberPlayerStatsEndIslandDragonFight>();
  expect(data.summoningEyesCollected).toBeDefined();
  expectTypeOf(data.summoningEyesCollected).toEqualTypeOf<number>();
  expect(data.specialZealotLootCollected).toBeDefined();
  expectTypeOf(data.specialZealotLootCollected).toEqualTypeOf<number>();
});
