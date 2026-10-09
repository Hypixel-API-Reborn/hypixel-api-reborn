import GameCountsWalls3 from './GameCountsWalls3.ts';
import GameCountsWalls3Modes from './GameCountsWalls3Modes.ts';
import { expect, expectTypeOf, test } from 'vitest';

test('GameCountsWalls3', () => {
  const data = new GameCountsWalls3({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(GameCountsWalls3);
  expectTypeOf(data).toEqualTypeOf<GameCountsWalls3>();
  expect(data.modes).toBeDefined();
  expect(data.modes).toBeInstanceOf(GameCountsWalls3Modes);
  expectTypeOf(data.modes).toEqualTypeOf<GameCountsWalls3Modes>();
});
