import GameCountsTNTGames from './GameCountsTNTGames.js';
import GameCountsTNTGamesModes from './GameCountsTNTGamesModes.js';
import { expect, expectTypeOf, test } from 'vitest';

test('GameCountsTNTGames', () => {
  const data = new GameCountsTNTGames({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(GameCountsTNTGames);
  expectTypeOf(data).toEqualTypeOf<GameCountsTNTGames>();
  expect(data.modes).toBeDefined();
  expect(data.modes).toBeInstanceOf(GameCountsTNTGamesModes);
  expectTypeOf(data.modes).toEqualTypeOf<GameCountsTNTGamesModes>();
});
