import GameCountsBasicModes from '../GameCountsBasicModes.ts';
import GameCountsSurvivalGames from './GameCountsSurvivalGames.ts';
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
