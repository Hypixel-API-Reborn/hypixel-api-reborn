import SkyblockBazzarProductOrder from './SkyblockBazzarProductOrder.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockBazzarProductOrder', () => {
  const data = new SkyblockBazzarProductOrder({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockBazzarProductOrder);
  expectTypeOf(data).toEqualTypeOf<SkyblockBazzarProductOrder>();
  expect(data.amount).toBeDefined();
  expectTypeOf(data.amount).toEqualTypeOf<number>();
  expect(data.pricePerUnit).toBeDefined();
  expectTypeOf(data.pricePerUnit).toEqualTypeOf<number>();
  expect(data.orders).toBeDefined();
  expectTypeOf(data.orders).toEqualTypeOf<number>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => number>();
  expect(data.toString()).toBeDefined();
  expectTypeOf(data.toString()).toEqualTypeOf<number>();
});
