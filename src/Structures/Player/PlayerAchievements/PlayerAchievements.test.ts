import PlayerAchievements from './PlayerAchievements.js';
import PlayerAchievementsRewards from './PlayerAchievementsRewards.js';
import PlayerAchievementsTotem from './PlayerAchievementsTotem.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { PlayerAchievementsOneTimeSort } from '../../../Types/Player.js';

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
