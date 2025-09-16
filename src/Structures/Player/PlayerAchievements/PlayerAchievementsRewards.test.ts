import PlayerAchievementsRewards from './PlayerAchievementsRewards.js';
import { expect, expectTypeOf, test } from 'vitest';

test('PlayerAchievementsRewards', () => {
  const data = new PlayerAchievementsRewards({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(PlayerAchievementsRewards);
  expectTypeOf(data).toEqualTypeOf<PlayerAchievementsRewards>();
});
