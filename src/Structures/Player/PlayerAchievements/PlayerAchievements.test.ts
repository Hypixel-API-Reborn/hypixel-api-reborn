import PlayerAchievements from './PlayerAchievements.ts';
import PlayerAchievementsRewards from './PlayerAchievementsRewards.ts';
import PlayerAchievementsTotem from './PlayerAchievementsTotem.ts';
import { expect, expectTypeOf, test } from 'vitest';
import type { PlayerAchievementsOneTimeSort } from '../../../Types/index.ts';

test('PlayerAchievements', () => {
  const data = new PlayerAchievements({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(PlayerAchievements);
  expectTypeOf(data).toEqualTypeOf<PlayerAchievements>();
  expect(data.points).toBeDefined();
  expect(data.points).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.points).toEqualTypeOf<number>();
  expect(data.rewards).toBeDefined();
  expect(data.rewards).toBeInstanceOf(PlayerAchievementsRewards);
  expectTypeOf(data.rewards).toEqualTypeOf<PlayerAchievementsRewards>();
  expect(data.tracking).toBeDefined();
  expectTypeOf(data.tracking).toEqualTypeOf<string[]>();
  expect(data.achievements).toBeDefined();
  expectTypeOf(data.achievements).toEqualTypeOf<Record<string, number>>();
  expect(data.oneTime).toBeDefined();
  expectTypeOf(data.oneTime).toEqualTypeOf<string[]>();
  expect(data.oneTimeAchievementMenuSort).toBeDefined();
  expectTypeOf(data.oneTimeAchievementMenuSort).toEqualTypeOf<PlayerAchievementsOneTimeSort>();
  expect(data.totem).toBeDefined();
  expect(data.totem).toBeInstanceOf(PlayerAchievementsTotem);
  expectTypeOf(data.totem).toEqualTypeOf<PlayerAchievementsTotem>();
});
