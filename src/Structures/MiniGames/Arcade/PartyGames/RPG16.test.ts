import RPG16 from './RPG16.js';
import { expect, expectTypeOf, test } from 'vitest';

test('RPG16', () => {
  const data = new RPG16({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RPG16);
  expectTypeOf(data).toEqualTypeOf<RPG16>();
});
