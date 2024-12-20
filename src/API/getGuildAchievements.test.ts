import Client from '../Client.js';
import GuildAchievements from '../Structures/Static/Achievements/GuildAchievements.js';
import OneTimeAchivement from '../Structures/Static/Achievements/OneTimeAchivement.js';
import RequestData from '../Private/RequestData.js';
import TieredAchivement from '../Structures/Static/Achievements/TieredAchivement.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { AchivementTier } from '../Types/Static.js';

test('getGuildAchievements (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getGuildAchievements({ raw: true });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<GuildAchievements | RequestData>();
  client.destroy();
});

test('getGuildAchievements', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  let data = await client.getGuildAchievements();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<GuildAchievements | RequestData>();
  data = data as GuildAchievements;
  expect(data.lastUpdatedTimestamp).toBeDefined();
  expectTypeOf(data.lastUpdatedTimestamp).toEqualTypeOf<number>();
  expect(data.lastUpdatedAt).toBeDefined();
  expectTypeOf(data.lastUpdatedAt).toEqualTypeOf<Date>();
  expect(data.oneTimeAchievements).toBeDefined();
  expectTypeOf(data.oneTimeAchievements).toEqualTypeOf<OneTimeAchivement[]>();
  data.oneTimeAchievements.forEach((achievement: OneTimeAchivement) => {
    expect(achievement.codeName).toBeDefined();
    expectTypeOf(achievement.codeName).toEqualTypeOf<string>();
    expect(achievement.name).toBeDefined();
    expectTypeOf(achievement.name).toEqualTypeOf<string>();
    expect(achievement.description).toBeDefined();
    expectTypeOf(achievement.description).toEqualTypeOf<string>();
    expect(achievement.secret).toBeDefined();
    expectTypeOf(achievement.secret).toEqualTypeOf<boolean>();
    expect(achievement.legacy).toBeDefined();
    expectTypeOf(achievement.legacy).toEqualTypeOf<boolean>();
    expect(achievement.points).toBeDefined();
    expectTypeOf(achievement.points).toEqualTypeOf<number>();
    expect(achievement.gamePercentUnlocked).toBeDefined();
    expectTypeOf(achievement.gamePercentUnlocked).toEqualTypeOf<number>();
    expect(achievement.globalPercentUnlocked).toBeDefined();
    expectTypeOf(achievement.globalPercentUnlocked).toEqualTypeOf<number>();
    expect(achievement.toString()).toBeDefined();
    expect(achievement.toString()).toBe(achievement.codeName);
    expectTypeOf(achievement.toString()).toEqualTypeOf<string>();
  });
  expect(data.tieredAchievements).toBeDefined();
  expectTypeOf(data.tieredAchievements).toEqualTypeOf<TieredAchivement[]>();
  data.tieredAchievements.forEach((achievement: TieredAchivement) => {
    expect(achievement.codeName).toBeDefined();
    expectTypeOf(achievement.codeName).toEqualTypeOf<string>();
    expect(achievement.name).toBeDefined();
    expectTypeOf(achievement.name).toEqualTypeOf<string>();
    expect(achievement.description).toBeDefined();
    expectTypeOf(achievement.description).toEqualTypeOf<string>();
    expect(achievement.secret).toBeDefined();
    expectTypeOf(achievement.secret).toEqualTypeOf<boolean>();
    expect(achievement.legacy).toBeDefined();
    expectTypeOf(achievement.legacy).toEqualTypeOf<boolean>();
    expect(achievement.tiers).toBeDefined();
    expectTypeOf(achievement.tiers).toEqualTypeOf<AchivementTier[]>();
    achievement.tiers.forEach((tier) => {
      expect(tier).toBeDefined();
      expectTypeOf(tier).toEqualTypeOf<AchivementTier>();
      expect(tier.tier).toBeDefined();
      expect(tier.tier).toBeGreaterThanOrEqual(0);
      expectTypeOf(tier.tier).toEqualTypeOf<number>();
      expect(tier.points).toBeUndefined();
      expectTypeOf(tier.points).toEqualTypeOf<number | undefined>();
      expect(tier.amount).toBeDefined();
      expect(tier.amount).toBeGreaterThanOrEqual(0);
      expectTypeOf(tier.amount).toEqualTypeOf<number>();
    });
    expect(achievement.toString()).toBeDefined();
    expect(achievement.toString()).toBe(achievement.codeName);
    expectTypeOf(achievement.toString()).toEqualTypeOf<string>();
  });
  client.destroy();
});
