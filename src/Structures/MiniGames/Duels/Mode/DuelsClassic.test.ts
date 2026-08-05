import DuelsClassic from './DuelsClassic.js';
import DuelsMode from './DuelsMode.js';
import { expect, expectTypeOf, test } from 'vitest';

test('DuelsClassic', () => {
  const data = new DuelsClassic({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(DuelsClassic);
  expectTypeOf(data).toEqualTypeOf<DuelsClassic>();
  expect(data.doubles).toBeDefined();
  expect(data.doubles).toBeInstanceOf(DuelsMode);
  expectTypeOf(data.doubles).toEqualTypeOf<DuelsMode>();
});
