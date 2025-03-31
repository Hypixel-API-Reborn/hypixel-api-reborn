import SkyblockBazaarProductOrder from './SkyblockBazaarProductOrder.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockBazaarProductOrder', () => {
  const data = new SkyblockBazaarProductOrder({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockBazaarProductOrder);
  expectTypeOf(data).toEqualTypeOf<SkyblockBazaarProductOrder>();
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
