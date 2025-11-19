import Achievements from './Achievements.js';
import GameAchievements from './GameAchievements.js';
import { expect, expectTypeOf, test } from 'vitest';

test('Achievements', () => {
  const data = new Achievements({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(Achievements);
  expectTypeOf(data).toEqualTypeOf<Achievements>();
  expect(data.lastUpdatedTimestamp).toBeDefined();
  expect(data.lastUpdatedTimestamp).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.lastUpdatedTimestamp).toEqualTypeOf<number>();
  expect(data.lastUpdatedAt).toBeDefined();
  expect(data.lastUpdatedAt).toBeInstanceOf(Date);
  expectTypeOf(data.lastUpdatedAt).toEqualTypeOf<Date>();
  expect(data.achievementsPerGame).toBeDefined();
  expectTypeOf(data.achievementsPerGame).toEqualTypeOf<Record<string, GameAchievements>>();
});
