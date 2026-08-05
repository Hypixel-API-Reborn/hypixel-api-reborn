import DuelsBow from './DuelsBow.js';
import { expect, expectTypeOf, test } from 'vitest';

test('DuelsBow', () => {
  const data = new DuelsBow({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(DuelsBow);
  expectTypeOf(data).toEqualTypeOf<DuelsBow>();
});
