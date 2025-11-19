import PlayerQuestCompletion from './PlayerQuestCompletion.js';
import { expect, expectTypeOf, test } from 'vitest';

test('PlayerQuestCompletion', () => {
  const data = new PlayerQuestCompletion({ stats: 0 });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(PlayerQuestCompletion);
  expectTypeOf(data).toEqualTypeOf<PlayerQuestCompletion>();
  expect(data.amount).toBeDefined();
  expect(data.amount).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.amount).toEqualTypeOf<number>();
  expect(data.timestamp).toBeDefined();
  expectTypeOf(data.timestamp).toEqualTypeOf<number | null>();
  expect(data.timestampAt).toBeDefined();
  expectTypeOf(data.timestampAt).toEqualTypeOf<Date | null>();
});
