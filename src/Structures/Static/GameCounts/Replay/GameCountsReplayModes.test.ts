import GameContsReplayModes from './GameCountsReplayModes.js';
import { expect, expectTypeOf, test } from 'vitest';

test('GameContsReplayModes', () => {
  const data = new GameContsReplayModes({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(GameContsReplayModes);
  expectTypeOf(data).toEqualTypeOf<GameContsReplayModes>();
  expect(data.base).toBeDefined();
  expect(data.base).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.base).toEqualTypeOf<number>();
});
