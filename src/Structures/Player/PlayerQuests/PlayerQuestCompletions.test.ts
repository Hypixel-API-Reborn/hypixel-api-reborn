import PlayerQuestCompletion from './PlayerQuestCompletion.js';
import PlayerQuestCompletions from './PlayerQuestCompletions.js';
import { expect, expectTypeOf, test } from 'vitest';

test('PlayerQuestCompletions', () => {
  const data = new PlayerQuestCompletions([{ stats: 0 }]);
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(PlayerQuestCompletions);
  expectTypeOf(data).toEqualTypeOf<PlayerQuestCompletions>();
  expect(data.amount).toBeDefined();
  expect(data.amount).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.amount).toEqualTypeOf<number>();
  expect(data.completions).toBeDefined();
  data.completions.forEach((completion) => {
    expect(completion).toBeDefined();
    expect(completion).toBeInstanceOf(PlayerQuestCompletion);
    expectTypeOf(completion).toEqualTypeOf<PlayerQuestCompletion>();
  });
  expectTypeOf(data.completions).toEqualTypeOf<PlayerQuestCompletion[]>();
});
