import MonthlyCrate from './MonthlyCrate.js';
import Rewards from './Rewards.js';
import { expect, expectTypeOf, test } from 'vitest';

test('Rewards', () => {
  const data = new Rewards({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(Rewards);
  expectTypeOf(data).toEqualTypeOf<Rewards>();
  expect(data.lastAdsenseGenerateTime).toBeDefined();
  expectTypeOf(data.lastAdsenseGenerateTime).toEqualTypeOf<number>();
  expect(data.lastClaimedReward).toBeDefined();
  expectTypeOf(data.lastClaimedReward).toEqualTypeOf<number>();
  expect(data.rewardHighScore).toBeDefined();
  expectTypeOf(data.rewardHighScore).toEqualTypeOf<number>();
  expect(data.rewardScore).toBeDefined();
  expectTypeOf(data.rewardScore).toEqualTypeOf<number>();
  expect(data.rewardStreak).toBeDefined();
  expectTypeOf(data.rewardStreak).toEqualTypeOf<number>();
  expect(data.rewardTokens).toBeDefined();
  expectTypeOf(data.rewardTokens).toEqualTypeOf<number>();
  expect(data.totalDailyRewards).toBeDefined();
  expectTypeOf(data.totalDailyRewards).toEqualTypeOf<number>();
  expect(data.totalRewards).toBeDefined();
  expectTypeOf(data.totalRewards).toEqualTypeOf<number>();
  expect(data.monthlyCrates).toBeDefined();
  expectTypeOf(data.monthlyCrates).toEqualTypeOf<MonthlyCrate[]>();
});
