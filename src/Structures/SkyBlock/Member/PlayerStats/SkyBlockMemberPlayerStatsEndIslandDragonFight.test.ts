import SkyBlockMemberPlayerStatsEndIslandDragonFight from './SkyBlockMemberPlayerStatsEndIslandDragonFight.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberPlayerStatsEndIslandDragonFight', () => {
  const data = new SkyBlockMemberPlayerStatsEndIslandDragonFight({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberPlayerStatsEndIslandDragonFight);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberPlayerStatsEndIslandDragonFight>();
});
