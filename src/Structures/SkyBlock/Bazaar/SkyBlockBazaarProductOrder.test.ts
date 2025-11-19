import SkyBlockBazaarProductOrder from './SkyBlockBazaarProductOrder.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockBazaarProductOrder', () => {
  const data = new SkyBlockBazaarProductOrder({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockBazaarProductOrder);
  expectTypeOf(data).toEqualTypeOf<SkyBlockBazaarProductOrder>();
  expect(data.amount).toBeDefined();
  expect(data.amount).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.amount).toEqualTypeOf<number>();
  expect(data.pricePerUnit).toBeDefined();
  expect(data.pricePerUnit).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.pricePerUnit).toEqualTypeOf<number>();
  expect(data.orders).toBeDefined();
  expect(data.orders).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.orders).toEqualTypeOf<number>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => number>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toBe(data.amount);
  expectTypeOf(data.toString()).toEqualTypeOf<number>();
});
