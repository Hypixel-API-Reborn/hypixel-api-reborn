import GameCountsBasicModes from '../GameCountsBasicModes.js';
import GameCountsSurvivalGames from './GameCountsSurvivalGames.js';
import { expect, expectTypeOf, test } from 'vitest';

test('GameCountsSurvivalGames', () => {
  const data = new GameCountsSurvivalGames({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(GameCountsSurvivalGames);
  expectTypeOf(data).toEqualTypeOf<GameCountsSurvivalGames>();
  expect(data.modes).toBeDefined();
  expect(data.modes).toBeInstanceOf(GameCountsBasicModes);
  expectTypeOf(data.modes).toEqualTypeOf<GameCountsBasicModes>();
});
