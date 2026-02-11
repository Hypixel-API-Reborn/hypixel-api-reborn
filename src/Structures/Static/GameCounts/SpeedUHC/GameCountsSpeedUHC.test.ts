import GameCountsBasicModes from '../GameCountsBasicModes.js';
import GameCountsSpeedUHC from './GameCountsSpeedUHC.js';
import { expect, expectTypeOf, test } from 'vitest';

test('GameCountsSpeedUHC', () => {
  const data = new GameCountsSpeedUHC({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(GameCountsSpeedUHC);
  expectTypeOf(data).toEqualTypeOf<GameCountsSpeedUHC>();
  expect(data.modes).toBeDefined();
  expect(data.modes).toBeInstanceOf(GameCountsBasicModes);
  expectTypeOf(data.modes).toEqualTypeOf<GameCountsBasicModes>();
});
