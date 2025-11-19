import Challenges from './Challenges.js';
import GameChallenges from './GameChallenges.js';
import { expect, expectTypeOf, test } from 'vitest';

test('Challenges', () => {
  const data = new Challenges({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(Challenges);
  expectTypeOf(data).toEqualTypeOf<Challenges>();
  expect(data.lastUpdatedTimestamp).toBeDefined();
  expect(data.lastUpdatedTimestamp).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.lastUpdatedTimestamp).toEqualTypeOf<number>();
  expect(data.lastUpdatedAt).toBeDefined();
  expect(data.lastUpdatedAt).toBeInstanceOf(Date);
  expectTypeOf(data.lastUpdatedAt).toEqualTypeOf<Date>();
  expect(data.challengesPerGame).toBeDefined();
  expectTypeOf(data.challengesPerGame).toEqualTypeOf<Record<string, GameChallenges>>();
});
