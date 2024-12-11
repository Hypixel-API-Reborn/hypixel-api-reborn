import PlayerAchievements from './PlayerAchievements.js';
import PlayerAchievementsRewards from './PlayerAchievementsRewards.js';
import { expect, expectTypeOf, test } from 'vitest';

test('PlayerAchievements', () => {
  const data = new PlayerAchievements({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(PlayerAchievements);
  expectTypeOf(data).toEqualTypeOf<PlayerAchievements>();
  expect(data.points).toBeDefined();
  expect(data.points).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.points).toEqualTypeOf<number>();
  expect(data.rewards).toBeDefined();
  expectTypeOf(data.rewards).toEqualTypeOf<PlayerAchievementsRewards>();
  expect(data.tracking).toBeDefined();
  expectTypeOf(data.tracking).toEqualTypeOf<string[]>();
  expect(data.achivements).toBeDefined();
  expectTypeOf(data.achivements).toEqualTypeOf<Record<string, number>>();
  expect(data.oneTime).toBeDefined();
  expectTypeOf(data.oneTime).toEqualTypeOf<string[]>();
  expect(data.totem).toBeDefined();
  expectTypeOf(data.totem).toEqualTypeOf<Record<string, any>>();
});
