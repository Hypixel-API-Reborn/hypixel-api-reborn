import GameCountsUHC from './GameCountsUHC.js';
import GameCountsUHCModes from './GameCountsUHCModes.js';
import { expect, expectTypeOf, test } from 'vitest';

test('GameCountsUHC', () => {
  const data = new GameCountsUHC({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(GameCountsUHC);
  expectTypeOf(data).toEqualTypeOf<GameCountsUHC>();
  expect(data.modes).toBeDefined();
  expect(data.modes).toBeInstanceOf(GameCountsUHCModes);
  expectTypeOf(data.modes).toEqualTypeOf<GameCountsUHCModes>();
});
