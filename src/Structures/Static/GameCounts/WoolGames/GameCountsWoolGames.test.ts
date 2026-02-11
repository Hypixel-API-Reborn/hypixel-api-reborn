import GameCountsGameCountsWoolGamesModes from './GameCountsWoolGamesModes.js';
import GameCountsWoolGames from './GameCountsWoolGames.js';
import { expect, expectTypeOf, test } from 'vitest';

test('GameCountsWoolGames', () => {
  const data = new GameCountsWoolGames({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(GameCountsWoolGames);
  expectTypeOf(data).toEqualTypeOf<GameCountsWoolGames>();
  expect(data.modes).toBeDefined();
  expect(data.modes).toBeInstanceOf(GameCountsGameCountsWoolGamesModes);
  expectTypeOf(data.modes).toEqualTypeOf<GameCountsGameCountsWoolGamesModes>();
});
