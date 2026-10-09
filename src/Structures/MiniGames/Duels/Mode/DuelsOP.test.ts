import DuelsMode from './DuelsMode.ts';
import DuelsOP from './DuelsOP.ts';
import { expect, expectTypeOf, test } from 'vitest';

test('DuelsOP', () => {
  const data = new DuelsOP({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(DuelsOP);
  expectTypeOf(data).toEqualTypeOf<DuelsOP>();
  expect(data.doubles).toBeDefined();
  expect(data.doubles).toBeInstanceOf(DuelsMode);
  expectTypeOf(data.doubles).toEqualTypeOf<DuelsMode>();
});
