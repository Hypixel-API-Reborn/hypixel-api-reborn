import GameCountsGeneric from './GameCountsGeneric.js';
import { expect, expectTypeOf, test } from 'vitest';

test('GameCountsGeneric', () => {
  const data = new GameCountsGeneric({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(GameCountsGeneric);
  expectTypeOf(data).toEqualTypeOf<GameCountsGeneric>();
  expect(data.players).toBeDefined();
  expect(data.players).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.players).toEqualTypeOf<number>();
});
