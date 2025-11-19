import GuildAchievements from './GuildAchievements.js';
import OneTimeAchievement from './OneTimeAchievement.js';
import TieredAchievement from './TieredAchievement.js';
import { expect, expectTypeOf, test } from 'vitest';

test('GuildAchievements', () => {
  const data = new GuildAchievements({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(GuildAchievements);
  expectTypeOf(data).toEqualTypeOf<GuildAchievements>();
  expect(data.lastUpdatedTimestamp).toBeDefined();
  expect(data.lastUpdatedTimestamp).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.lastUpdatedTimestamp).toEqualTypeOf<number>();
  expect(data.lastUpdatedAt).toBeDefined();
  expect(data.lastUpdatedAt).toBeInstanceOf(Date);
  expectTypeOf(data.lastUpdatedAt).toEqualTypeOf<Date>();
  expect(data.oneTimeAchievements).toBeDefined();
  expectTypeOf(data.oneTimeAchievements).toEqualTypeOf<OneTimeAchievement[]>();
  expect(data.tieredAchievements).toBeDefined();
  expectTypeOf(data.tieredAchievements).toEqualTypeOf<TieredAchievement[]>();
});
