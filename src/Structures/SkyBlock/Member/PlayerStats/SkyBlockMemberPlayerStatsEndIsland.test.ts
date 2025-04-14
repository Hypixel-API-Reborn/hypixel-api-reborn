import SkyBlockMemberPlayerStatsEndIsland from './SkyBlockMemberPlayerStatsEndIsland.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyBlockMemberPlayerStatsEndIslandDragonFight from './SkyBlockMemberPlayerStatsEndIslandDragonFight.js';

test('SkyBlockMemberPlayerStatsEndIsland', () => {
  const data = new SkyBlockMemberPlayerStatsEndIsland({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberPlayerStatsEndIsland);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberPlayerStatsEndIsland>();
  expect(data.dragonFight).toBeDefined();
  expectTypeOf(data.dragonFight).toEqualTypeOf<SkyBlockMemberPlayerStatsEndIslandDragonFight>();
  expect(data.summoningEyesCollected).toBeDefined();
  expectTypeOf(data.summoningEyesCollected).toEqualTypeOf<number>();
  expect(data.specialZealotLootCollected).toBeDefined();
  expectTypeOf(data.specialZealotLootCollected).toEqualTypeOf<number>();
});
