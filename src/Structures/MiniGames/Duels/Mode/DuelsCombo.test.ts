import DuelsCombo from './DuelsCombo.js';
import { expect, expectTypeOf, test } from 'vitest';

test('DuelsCombo', () => {
  const data = new DuelsCombo({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(DuelsCombo);
  expectTypeOf(data).toEqualTypeOf<DuelsCombo>();
});
