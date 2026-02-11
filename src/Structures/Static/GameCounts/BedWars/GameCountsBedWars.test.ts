import GameCountsBedWars from './GameCountsBedWars.js';
import GameCountsGameCountsBedWarsModes from './GameCountsBedWarsModes.js';
import { expect, expectTypeOf, test } from 'vitest';

test('GameCountsBedWars', () => {
  const data = new GameCountsBedWars({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(GameCountsBedWars);
  expectTypeOf(data).toEqualTypeOf<GameCountsBedWars>();
  expect(data.modes).toBeDefined();
  expect(data.modes).toBeInstanceOf(GameCountsGameCountsBedWarsModes);
  expectTypeOf(data.modes).toEqualTypeOf<GameCountsGameCountsBedWarsModes>();
});
