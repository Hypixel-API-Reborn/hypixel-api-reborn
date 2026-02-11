import GameCountsLegacyModes from './GameCountsLegacyModes.js';
import { expect, expectTypeOf, test } from 'vitest';

test('GameCountsLegacyModes', () => {
  const data = new GameCountsLegacyModes({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(GameCountsLegacyModes);
  expectTypeOf(data).toEqualTypeOf<GameCountsLegacyModes>();
  expect(data.vampireZ).toBeDefined();
  expect(data.vampireZ).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.vampireZ).toEqualTypeOf<number>();
  expect(data.walls).toBeDefined();
  expect(data.walls).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.walls).toEqualTypeOf<number>();
  expect(data.quakecraft).toBeDefined();
  expect(data.quakecraft).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.quakecraft).toEqualTypeOf<number>();
  expect(data.gingerbread).toBeDefined();
  expect(data.gingerbread).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.gingerbread).toEqualTypeOf<number>();
  expect(data.paintball).toBeDefined();
  expect(data.paintball).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.paintball).toEqualTypeOf<number>();
  expect(data.arena).toBeDefined();
  expect(data.arena).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.arena).toEqualTypeOf<number>();
});
