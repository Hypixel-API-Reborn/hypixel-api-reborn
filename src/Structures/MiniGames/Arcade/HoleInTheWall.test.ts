import HoleInTheWall from './HoleInTheWall.js';
import { expect, expectTypeOf, test } from 'vitest';

test('HoleInTheWall', () => {
  const data = new HoleInTheWall({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(HoleInTheWall);
  expectTypeOf(data).toEqualTypeOf<HoleInTheWall>();
  expect(data.wins).toBeDefined();
  expect(data.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.wins).toEqualTypeOf<number>();
  expect(data.rounds).toBeDefined();
  expect(data.scoreRecordFinals).toBeDefined();
  expect(data.scoreRecordNormal).toBeDefined();
  expect(data.scoreRecordOverall).toBeDefined();
});
