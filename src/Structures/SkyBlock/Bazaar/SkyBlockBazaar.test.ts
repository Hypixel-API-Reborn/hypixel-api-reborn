import SkyBlockBazaar from './SkyBlockBazaar.js';
import SkyBlockBazaarProduct from './SkyBlockBazaarProduct.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockBazaar', () => {
  const data = new SkyBlockBazaar({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockBazaar);
  expectTypeOf(data).toEqualTypeOf<SkyBlockBazaar>();
  expect(data.lastUpdated).toBeDefined();
  expect(data.lastUpdated).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.lastUpdated).toEqualTypeOf<number>();
  expect(data.lastUpdatedAt).toBeDefined();
  expect(data.lastUpdatedAt).toBeInstanceOf(Date);
  expectTypeOf(data.lastUpdatedAt).toEqualTypeOf<Date>();
  expect(data.products).toBeDefined();
  expectTypeOf(data.products).toEqualTypeOf<SkyBlockBazaarProduct[]>();
});
