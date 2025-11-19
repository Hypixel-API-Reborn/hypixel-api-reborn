import OneTimeAchievement from './OneTimeAchievement.js';
import { expect, expectTypeOf, test } from 'vitest';

test('OneTimeAchievement', () => {
  const data = new OneTimeAchievement('mrrp', { stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(OneTimeAchievement);
  expectTypeOf(data).toEqualTypeOf<OneTimeAchievement>();
  expect(data.points).toBeDefined();
  expect(data.points).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.points).toEqualTypeOf<number>();
  expect(data.gamePercentUnlocked).toBeDefined();
  expect(data.gamePercentUnlocked).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.gamePercentUnlocked).toEqualTypeOf<number>();
  expect(data.globalPercentUnlocked).toBeDefined();
  expect(data.globalPercentUnlocked).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.globalPercentUnlocked).toEqualTypeOf<number>();
});
