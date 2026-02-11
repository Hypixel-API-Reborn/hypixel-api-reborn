import GameCountsGameCountsMCGOModes from './GameCountsMCGOModes.js';
import GameCountsMCGO from './GameCountsMCGO.js';
import { expect, expectTypeOf, test } from 'vitest';

test('GameCountsMCGO', () => {
  const data = new GameCountsMCGO({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(GameCountsMCGO);
  expectTypeOf(data).toEqualTypeOf<GameCountsMCGO>();
  expect(data.modes).toBeDefined();
  expect(data.modes).toBeInstanceOf(GameCountsGameCountsMCGOModes);
  expectTypeOf(data.modes).toEqualTypeOf<GameCountsGameCountsMCGOModes>();
});
