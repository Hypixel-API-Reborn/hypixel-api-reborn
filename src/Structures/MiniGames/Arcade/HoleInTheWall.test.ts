import HoleInTheWall from './HoleInTheWall.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { ArcadeHoleInTheWallColor } from '../../../Types/Player.js';

test('HoleInTheWall', () => {
  const data = new HoleInTheWall({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(HoleInTheWall);
  expectTypeOf(data).toEqualTypeOf<HoleInTheWall>();
  expect(data.rounds).toBeDefined();
  expect(data.rounds).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.rounds).toEqualTypeOf<number>();
  expect(data.wins).toBeDefined();
  expect(data.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.wins).toEqualTypeOf<number>();
  expect(data.color).toBeDefined();
  expectTypeOf(data.color).toEqualTypeOf<ArcadeHoleInTheWallColor>();
  expect(data.recordF).toBeDefined();
  expect(data.recordF).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.recordF).toEqualTypeOf<number>();
  expect(data.recordQ).toBeDefined();
  expect(data.recordQ).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.recordQ).toEqualTypeOf<number>();
});
