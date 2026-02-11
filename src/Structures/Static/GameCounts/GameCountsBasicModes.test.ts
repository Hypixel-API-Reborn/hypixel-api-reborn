import GameCountsBasicModes from './GameCountsBasicModes.js';
import { expect, expectTypeOf, test } from 'vitest';

test('GameCountsBasicModes', () => {
  const data = new GameCountsBasicModes({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(GameCountsBasicModes);
  expectTypeOf(data).toEqualTypeOf<GameCountsBasicModes>();
  expect(data.soloNormal).toBeDefined();
  expect(data.soloNormal).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.soloNormal).toEqualTypeOf<number>();
  expect(data.teamNormal).toBeDefined();
  expect(data.teamNormal).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.teamNormal).toEqualTypeOf<number>();
});
