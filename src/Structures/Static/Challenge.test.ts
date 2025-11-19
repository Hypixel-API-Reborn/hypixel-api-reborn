import Challenge from './Challenge.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { ChallengeReward } from '../../Types/Static.js';

test('Challenge', () => {
  const data = new Challenge({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(Challenge);
  expectTypeOf(data).toEqualTypeOf<Challenge>();
  expect(data.id).toBeDefined();
  expectTypeOf(data.id).toEqualTypeOf<string>();
  expect(data.name).toBeDefined();
  expectTypeOf(data.name).toEqualTypeOf<string>();
  expect(data.rewards).toBeDefined();
  expectTypeOf(data.rewards).toEqualTypeOf<ChallengeReward[]>();
});
