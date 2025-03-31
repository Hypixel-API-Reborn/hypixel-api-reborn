// eslint-disable-next-line max-len
import SkyblockMemberPlayerStatsEndIslandDragonFightDragon from './SkyblockMemberPlayerStatsEndIslandDragonFightDragon.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockMemberPlayerStatsEndIslandDragonFightDragon', () => {
  const data = new SkyblockMemberPlayerStatsEndIslandDragonFightDragon({ stats: 'meow' }, 'protector');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberPlayerStatsEndIslandDragonFightDragon);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberPlayerStatsEndIslandDragonFightDragon>();
  expect(data.mostDamage).toBeDefined();
  expectTypeOf(data.mostDamage).toEqualTypeOf<number>();
  expect(data.highestRank).toBeDefined();
  expectTypeOf(data.highestRank).toEqualTypeOf<number>();
  expect(data.fastestKill).toBeDefined();
  expectTypeOf(data.fastestKill).toEqualTypeOf<number>();
  expect(data.amountSummoned).toBeDefined();
  expectTypeOf(data.amountSummoned).toEqualTypeOf<number>();
  expect(data.summoningEyesContributed).toBeDefined();
  expectTypeOf(data.summoningEyesContributed).toEqualTypeOf<number>();
});
