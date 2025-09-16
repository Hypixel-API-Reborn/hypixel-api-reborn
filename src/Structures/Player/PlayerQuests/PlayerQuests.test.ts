import PlayerQuest from './PlayerQuest.js';
import PlayerQuests from './PlayerQuests.js';
import { expect, expectTypeOf, test } from 'vitest';

test('PlayerQuests', () => {
  const data = new PlayerQuests({ stats: 'meow' }, false);
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(PlayerQuests);
  expectTypeOf(data).toEqualTypeOf<PlayerQuests>();
  expect(data.quests).toBeDefined();
  data.quests.forEach((quest) => {
    expect(quest).toBeDefined();
    expect(quest).toBeInstanceOf(PlayerQuest);
    expectTypeOf(quest).toEqualTypeOf<PlayerQuest>();
  });
  expectTypeOf(data.quests).toEqualTypeOf<PlayerQuest[]>();
  expect(data.autoActivate).toBeDefined();
  expectTypeOf(data.autoActivate).toEqualTypeOf<boolean>();
});
