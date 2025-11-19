import Dtt from './Dtt.js';
import { expect, expectTypeOf, test } from 'vitest';

test('Dtt', () => {
  const data = new Dtt({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(Dtt);
  expectTypeOf(data).toEqualTypeOf<Dtt>();
  expect(data.dropdown).toBeDefined();
  expectTypeOf(data.dropdown).toEqualTypeOf<boolean>();
  expect(data.filter).toBeDefined();
  expectTypeOf(data.filter).toEqualTypeOf<boolean>();
  expect(data.music).toBeDefined();
  expectTypeOf(data.music).toEqualTypeOf<boolean>();
});
