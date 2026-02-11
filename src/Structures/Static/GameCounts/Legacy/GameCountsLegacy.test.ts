import GameCountsGameCountsLegacyModes from './GameCountsLegacyModes.js';
import GameCountsLegacy from './GameCountsLegacy.js';
import { expect, expectTypeOf, test } from 'vitest';

test('GameCountsLegacy', () => {
  const data = new GameCountsLegacy({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(GameCountsLegacy);
  expectTypeOf(data).toEqualTypeOf<GameCountsLegacy>();
  expect(data.modes).toBeDefined();
  expect(data.modes).toBeInstanceOf(GameCountsGameCountsLegacyModes);
  expectTypeOf(data.modes).toEqualTypeOf<GameCountsGameCountsLegacyModes>();
});
