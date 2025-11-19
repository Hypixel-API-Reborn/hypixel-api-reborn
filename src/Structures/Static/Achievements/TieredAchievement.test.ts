import TieredAchievement from './TieredAchievement.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { AchievementTier } from '../../../Types/Static.js';

test('TieredAchievement', () => {
  const data = new TieredAchievement('mrrp', { stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(TieredAchievement);
  expectTypeOf(data).toEqualTypeOf<TieredAchievement>();
  expect(data.tiers).toBeDefined();
  expectTypeOf(data.tiers).toEqualTypeOf<AchievementTier[]>();
});
