import Season from './Season.js';
import Seasonal from './Seasonal.js';
import { expect, expectTypeOf, test } from 'vitest';

test('Seasonal', () => {
  const data = new Seasonal({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(Seasonal);
  expectTypeOf(data).toEqualTypeOf<Seasonal>();
  expect(data.silver).toBeDefined();
  expect(data.silver).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.silver).toEqualTypeOf<number>();
  expect(data.anniversary).toBeDefined();
  expectTypeOf(data.anniversary).toEqualTypeOf<Season>();
  expect(data.christmas).toBeDefined();
  expectTypeOf(data.christmas).toEqualTypeOf<Season>();
  expect(data.easter).toBeDefined();
  expectTypeOf(data.easter).toEqualTypeOf<Season>();
  expect(data.halloween).toBeDefined();
  expectTypeOf(data.halloween).toEqualTypeOf<Season>();
  expect(data.summer).toBeDefined();
  expectTypeOf(data.summer).toEqualTypeOf<Season>();
});
