import SkyBlockMemberPlayerStatsEndIsland from './SkyBlockMemberPlayerStatsEndIsland.js';
import SkyBlockMemberPlayerStatsEndIslandDragonFight from './SkyBlockMemberPlayerStatsEndIslandDragonFight.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberPlayerStatsEndIsland', () => {
  const data = new SkyBlockMemberPlayerStatsEndIsland({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberPlayerStatsEndIsland);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberPlayerStatsEndIsland>();
  expect(data.dragonFight).toBeDefined();
  expect(data.dragonFight).toBeInstanceOf(SkyBlockMemberPlayerStatsEndIslandDragonFight);
  expectTypeOf(data.dragonFight).toEqualTypeOf<SkyBlockMemberPlayerStatsEndIslandDragonFight>();
  expect(data.summoningEyesCollected).toBeDefined();
  expect(data.summoningEyesCollected).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.summoningEyesCollected).toEqualTypeOf<number>();
  expect(data.specialZealotLootCollected).toBeDefined();
  expect(data.specialZealotLootCollected).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.specialZealotLootCollected).toEqualTypeOf<number>();
});
