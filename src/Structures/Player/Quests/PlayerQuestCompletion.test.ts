import PlayerQuestCompletion from './PlayerQuestCompletion.js';
import { expect, expectTypeOf, test } from 'vitest';

test('PlayerQuestCompletion', () => {
  const data = new PlayerQuestCompletion({ time: 1688570159583 });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(PlayerQuestCompletion);
  expectTypeOf(data).toEqualTypeOf<PlayerQuestCompletion>();
  expect(data.amount).toBeDefined();
  expectTypeOf(data.amount).toEqualTypeOf<number>();
  expect(data.timestamp).toBeDefined();
  expectTypeOf(data.timestamp).toEqualTypeOf<number>();
  expect(data.timestampAt).toBeDefined();
  expectTypeOf(data.timestampAt).toEqualTypeOf<Date>();
});
