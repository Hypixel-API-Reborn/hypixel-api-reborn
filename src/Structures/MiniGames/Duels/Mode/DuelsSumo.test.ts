import DuelsMode from './DuelsMode.js';
import DuelsSumo from './DuelsSumo.js';
import { expect, expectTypeOf, test } from 'vitest';

test('DuelsSumo', () => {
  const data = new DuelsSumo({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(DuelsSumo);
  expectTypeOf(data).toEqualTypeOf<DuelsSumo>();
  expect(data.tournament).toBeDefined();
  expect(data.tournament).toBeInstanceOf(DuelsMode);
  expectTypeOf(data.tournament).toEqualTypeOf<DuelsMode>();
});
