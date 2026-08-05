import DuelsMegaWalls from './DuelsMegaWalls.js';
import DuelsMode from './DuelsMode.js';
import { expect, expectTypeOf, test } from 'vitest';

test('DuelsMegaWalls', () => {
  const data = new DuelsMegaWalls({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(DuelsMegaWalls);
  expectTypeOf(data).toEqualTypeOf<DuelsMegaWalls>();
  expect(data.doubles).toBeDefined();
  expect(data.doubles).toBeInstanceOf(DuelsMode);
  expectTypeOf(data.doubles).toEqualTypeOf<DuelsMode>();
  expect(data.four).toBeDefined();
  expect(data.four).toBeInstanceOf(DuelsMode);
  expectTypeOf(data.four).toEqualTypeOf<DuelsMode>();
});
