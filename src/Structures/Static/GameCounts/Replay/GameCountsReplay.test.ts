import GameCountsGameContsReplayModes from './GameCountsReplayModes.js';
import GameCountsReplay from './GameCountsReplay.js';
import { expect, expectTypeOf, test } from 'vitest';

test('GameCountsReplay', () => {
  const data = new GameCountsReplay({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(GameCountsReplay);
  expectTypeOf(data).toEqualTypeOf<GameCountsReplay>();
  expect(data.modes).toBeDefined();
  expect(data.modes).toBeInstanceOf(GameCountsGameContsReplayModes);
  expectTypeOf(data.modes).toEqualTypeOf<GameCountsGameContsReplayModes>();
});
