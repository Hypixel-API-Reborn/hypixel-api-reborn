/* eslint-disable @stylistic/max-len */
import SkyBlockMemberPlayerStatsEndIslandDragonFight from './SkyBlockMemberPlayerStatsEndIslandDragonFight.js';
import SkyBlockMemberPlayerStatsEndIslandDragonFightDragon from './SkyBlockMemberPlayerStatsEndIslandDragonFightDragon.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberPlayerStatsEndIslandDragonFight', () => {
  const data = new SkyBlockMemberPlayerStatsEndIslandDragonFight({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberPlayerStatsEndIslandDragonFight);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberPlayerStatsEndIslandDragonFight>();
  expect(data.enderCrystalsDestroyed).toBeDefined();
  expect(data.enderCrystalsDestroyed).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.enderCrystalsDestroyed).toEqualTypeOf<number>();
  expect(data.protector).toBeDefined();
  expect(data.protector).toBeInstanceOf(SkyBlockMemberPlayerStatsEndIslandDragonFightDragon);
  expectTypeOf(data.protector).toEqualTypeOf<SkyBlockMemberPlayerStatsEndIslandDragonFightDragon>();
  expect(data.old).toBeDefined();
  expect(data.old).toBeInstanceOf(SkyBlockMemberPlayerStatsEndIslandDragonFightDragon);
  expectTypeOf(data.old).toEqualTypeOf<SkyBlockMemberPlayerStatsEndIslandDragonFightDragon>();
  expect(data.unstable).toBeDefined();
  expect(data.unstable).toBeInstanceOf(SkyBlockMemberPlayerStatsEndIslandDragonFightDragon);
  expectTypeOf(data.unstable).toEqualTypeOf<SkyBlockMemberPlayerStatsEndIslandDragonFightDragon>();
  expect(data.young).toBeDefined();
  expect(data.young).toBeInstanceOf(SkyBlockMemberPlayerStatsEndIslandDragonFightDragon);
  expectTypeOf(data.young).toEqualTypeOf<SkyBlockMemberPlayerStatsEndIslandDragonFightDragon>();
  expect(data.strong).toBeDefined();
  expect(data.strong).toBeInstanceOf(SkyBlockMemberPlayerStatsEndIslandDragonFightDragon);
  expectTypeOf(data.strong).toEqualTypeOf<SkyBlockMemberPlayerStatsEndIslandDragonFightDragon>();
  expect(data.wise).toBeDefined();
  expect(data.wise).toBeInstanceOf(SkyBlockMemberPlayerStatsEndIslandDragonFightDragon);
  expectTypeOf(data.wise).toEqualTypeOf<SkyBlockMemberPlayerStatsEndIslandDragonFightDragon>();
  expect(data.superior).toBeDefined();
  expect(data.superior).toBeInstanceOf(SkyBlockMemberPlayerStatsEndIslandDragonFightDragon);
  expectTypeOf(data.superior).toEqualTypeOf<SkyBlockMemberPlayerStatsEndIslandDragonFightDragon>();
});
