import GameQuests from './GameQuests.js';
import Quest from './Quest.js';
import { expect, expectTypeOf, test } from 'vitest';

test('GameQuests', () => {
  const data = new GameQuests('', [{ stats: 'meow' }]);
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(GameQuests);
  expectTypeOf(data).toEqualTypeOf<GameQuests>();
  expect(data.game).toBeDefined();
  expectTypeOf(data.game).toEqualTypeOf<string>();
  expect(data.quests).toBeDefined();
  expectTypeOf(data.quests).toEqualTypeOf<Quest[]>();
});
