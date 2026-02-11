import GameCountsGameCountsPitModes from './GameCountsPitModes.js';
import GameCountsPit from './GameCountsPit.js';
import { expect, expectTypeOf, test } from 'vitest';

test('GameCountsPit', () => {
  const data = new GameCountsPit({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(GameCountsPit);
  expectTypeOf(data).toEqualTypeOf<GameCountsPit>();
  expect(data.modes).toBeDefined();
  expect(data.modes).toBeInstanceOf(GameCountsGameCountsPitModes);
  expectTypeOf(data.modes).toEqualTypeOf<GameCountsGameCountsPitModes>();
});
