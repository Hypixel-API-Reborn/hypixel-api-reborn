import PlayerQuest from './PlayerQuest.js';
import PlayerQuests from './PlayerQuests.js';
import { expect, expectTypeOf, test } from 'vitest';

test('PlayerQuests', () => {
  const data = new PlayerQuests({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(PlayerQuests);
  expectTypeOf(data).toEqualTypeOf<PlayerQuests>();
  expect(data.quests).toBeDefined();
  expectTypeOf(data.quests).toEqualTypeOf<PlayerQuest[]>();
  expect(data.autoActivate).toBeDefined();
  expectTypeOf(data.autoActivate).toEqualTypeOf<boolean>();
});
