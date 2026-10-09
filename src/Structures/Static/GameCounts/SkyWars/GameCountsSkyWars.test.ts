import GameCountsMCGOModes from './GameCountsSkyWarsModes.ts';
import GameCountsSkyWars from './GameCountsSkyWars.ts';
import { expect, expectTypeOf, test } from 'vitest';

test('GameCountsSkyWars', () => {
  const data = new GameCountsSkyWars({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(GameCountsSkyWars);
  expectTypeOf(data).toEqualTypeOf<GameCountsSkyWars>();
  expect(data.modes).toBeDefined();
  expect(data.modes).toBeInstanceOf(GameCountsMCGOModes);
  expectTypeOf(data.modes).toEqualTypeOf<GameCountsMCGOModes>();
});
