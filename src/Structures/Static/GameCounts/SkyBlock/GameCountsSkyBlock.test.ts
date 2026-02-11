import GameCountsGameCountsSkyBlockModes from './GameCountsSkyBlockModes.js';
import GameCountsSkyBlock from './GameCountsSkyBlock.js';
import { expect, expectTypeOf, test } from 'vitest';

test('GameCountsSkyBlock', () => {
  const data = new GameCountsSkyBlock({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(GameCountsSkyBlock);
  expectTypeOf(data).toEqualTypeOf<GameCountsSkyBlock>();
  expect(data.modes).toBeDefined();
  expect(data.modes).toBeInstanceOf(GameCountsGameCountsSkyBlockModes);
  expectTypeOf(data.modes).toEqualTypeOf<GameCountsGameCountsSkyBlockModes>();
});
