import Challenge from './Challenge.ts';
import GameChallenges from './GameChallenges.ts';
import { expect, expectTypeOf, test } from 'vitest';

test('GameChallenges', () => {
  const data = new GameChallenges('mrrp', [{ stats: 'meow' }]);
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(GameChallenges);
  expectTypeOf(data).toEqualTypeOf<GameChallenges>();
  expect(data.category).toBeDefined();
  expectTypeOf(data.category).toEqualTypeOf<string>();
  expect(data.challenges).toBeDefined();
  expectTypeOf(data.challenges).toEqualTypeOf<Challenge[]>();
});
