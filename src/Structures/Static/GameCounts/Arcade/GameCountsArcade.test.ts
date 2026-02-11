import GameCountsArcade from './GameCountsArcade.js';
import GameCountsArcadeModes from './GameCountsArcadeModes.js';
import { expect, expectTypeOf, test } from 'vitest';

test('GameCountsArcade', () => {
  const data = new GameCountsArcade({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(GameCountsArcade);
  expectTypeOf(data).toEqualTypeOf<GameCountsArcade>();
  expect(data.modes).toBeDefined();
  expect(data.modes).toBeInstanceOf(GameCountsArcadeModes);
  expectTypeOf(data.modes).toEqualTypeOf<GameCountsArcadeModes>();
});
