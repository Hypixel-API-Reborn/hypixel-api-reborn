import PlayerQuest from './PlayerQuest.js';
import PlayerQuestCompletions from './PlayerQuestCompletions.js';
import { expect, expectTypeOf, test } from 'vitest';

test('PlayerQuest', () => {
  const data = new PlayerQuest({ stats: 'meow' }, 'meow');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(PlayerQuest);
  expectTypeOf(data).toEqualTypeOf<PlayerQuest>();
  expect(data.name).toBeDefined();
  expectTypeOf(data.name).toEqualTypeOf<string>();
  expect(data.completions).toBeDefined();
  expectTypeOf(data.completions).toEqualTypeOf<PlayerQuestCompletions>();
});
