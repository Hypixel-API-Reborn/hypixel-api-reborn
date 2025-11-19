import GameAchievements from './GameAchievements.js';
import OneTimeAchievement from './OneTimeAchievement.js';
import TieredAchievement from './TieredAchievement.js';
import { expect, expectTypeOf, test } from 'vitest';

test('GameAchievements', () => {
  const data = new GameAchievements('mrrp', { stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(GameAchievements);
  expectTypeOf(data).toEqualTypeOf<GameAchievements>();
  expect(data.game).toBeDefined();
  expectTypeOf(data.game).toEqualTypeOf<string>();
  expect(data.points).toBeDefined();
  expect(data.points).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.points).toEqualTypeOf<number>();
  expect(data.legacyPoints).toBeDefined();
  expect(data.legacyPoints).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.legacyPoints).toEqualTypeOf<number>();
  expect(data.oneTimeAchievements).toBeDefined();
  expectTypeOf(data.oneTimeAchievements).toEqualTypeOf<OneTimeAchievement[]>();
  expect(data.tieredAchievements).toBeDefined();
  expectTypeOf(data.tieredAchievements).toEqualTypeOf<TieredAchievement[]>();
});
