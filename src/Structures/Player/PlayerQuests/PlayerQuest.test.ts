import PlayerQuest from './PlayerQuest.js';
import PlayerQuestCompletions from './PlayerQuestCompletions.js';
import { expect, expectTypeOf, test } from 'vitest';

test('PlayerQuest', () => {
  const data = new PlayerQuest({ stats: 'meow' }, 'meow');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(PlayerQuest);
  expectTypeOf(data).toEqualTypeOf<PlayerQuest>();
  expect(data.name).toBeDefined();
  expect(data.name).toBe('meow');
  expectTypeOf(data.name).toEqualTypeOf<string>();
  expect(data.completions).toBeDefined();
  expect(data.completions).toBeInstanceOf(PlayerQuestCompletions);
  expectTypeOf(data.completions).toEqualTypeOf<PlayerQuestCompletions>();
});
