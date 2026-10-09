import GameCountsGameCountsSkyBlockModes from './GameCountsSkyBlockModes.ts';
import GameCountsSkyBlock from './GameCountsSkyBlock.ts';
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
