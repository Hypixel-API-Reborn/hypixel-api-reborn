import GameCountsWalls3Modes from './GameCountsWalls3Modes.js';
import { expect, expectTypeOf, test } from 'vitest';

test('GameCountsWalls3Modes', () => {
  const data = new GameCountsWalls3Modes({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(GameCountsWalls3Modes);
  expectTypeOf(data).toEqualTypeOf<GameCountsWalls3Modes>();
  expect(data.standard).toBeDefined();
  expect(data.standard).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.standard).toEqualTypeOf<number>();
  expect(data.faceOff).toBeDefined();
  expect(data.faceOff).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.faceOff).toEqualTypeOf<number>();
});
