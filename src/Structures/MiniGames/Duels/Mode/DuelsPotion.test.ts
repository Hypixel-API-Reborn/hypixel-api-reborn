import DuelsPotion from './DuelsPotion.ts';
import { expect, expectTypeOf, test } from 'vitest';

test('DuelsPotion', () => {
  const data = new DuelsPotion({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(DuelsPotion);
  expectTypeOf(data).toEqualTypeOf<DuelsPotion>();
});
