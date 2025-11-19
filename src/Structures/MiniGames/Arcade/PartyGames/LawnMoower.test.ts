import LawnMoower from './LawnMoower.js';
import { expect, expectTypeOf, test } from 'vitest';

test('LawnMoower', () => {
  const data = new LawnMoower({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(LawnMoower);
  expectTypeOf(data).toEqualTypeOf<LawnMoower>();
});
