import SkyblockMemberPlayerStatsEndIslandDragonFight from './SkyblockMemberPlayerStatsEndIslandDragonFight.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockMemberPlayerStatsEndIslandDragonFight', () => {
  const data = new SkyblockMemberPlayerStatsEndIslandDragonFight({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberPlayerStatsEndIslandDragonFight);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberPlayerStatsEndIslandDragonFight>();
});
