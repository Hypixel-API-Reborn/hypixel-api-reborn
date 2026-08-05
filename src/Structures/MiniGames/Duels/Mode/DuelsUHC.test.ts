import DuelsMode from './DuelsMode.js';
import DuelsUHC from './DuelsUHC.js';
import { expect, expectTypeOf, test } from 'vitest';

test('DuelsUHC', () => {
  const data = new DuelsUHC({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(DuelsUHC);
  expectTypeOf(data).toEqualTypeOf<DuelsUHC>();
  expect(data.doubles).toBeDefined();
  expect(data.doubles).toBeInstanceOf(DuelsMode);
  expectTypeOf(data.doubles).toEqualTypeOf<DuelsMode>();
  expect(data.four).toBeDefined();
  expect(data.four).toBeInstanceOf(DuelsMode);
  expectTypeOf(data.four).toEqualTypeOf<DuelsMode>();
  expect(data.meetup).toBeDefined();
  expect(data.meetup).toBeInstanceOf(DuelsMode);
  expectTypeOf(data.meetup).toEqualTypeOf<DuelsMode>();
  expect(data.tournament).toBeDefined();
  expect(data.tournament).toBeInstanceOf(DuelsMode);
  expectTypeOf(data.tournament).toEqualTypeOf<DuelsMode>();
});
