import GameCountsGameCountsSuperSmashModes from './GameCountsSuperSmashModes.js';
import GameCountsSuperSmash from './GameCountsSuperSmash.js';
import { expect, expectTypeOf, test } from 'vitest';

test('GameCountsSuperSmash', () => {
  const data = new GameCountsSuperSmash({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(GameCountsSuperSmash);
  expectTypeOf(data).toEqualTypeOf<GameCountsSuperSmash>();
  expect(data.modes).toBeDefined();
  expect(data.modes).toBeInstanceOf(GameCountsGameCountsSuperSmashModes);
  expectTypeOf(data.modes).toEqualTypeOf<GameCountsGameCountsSuperSmashModes>();
});
