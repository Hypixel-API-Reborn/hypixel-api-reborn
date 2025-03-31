import SkyblockBazaar from './SkyblockBazaar.js';
import SkyblockBazaarProduct from './SkyblockBazaarProduct.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { BazaarProduct } from '../../../Types/Skyblock.js';

test('SkyblockBazaar', () => {
  const data = new SkyblockBazaar({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockBazaar);
  expectTypeOf(data).toEqualTypeOf<SkyblockBazaar>();
  expect(data.lastUpdated).toBeDefined();
  expectTypeOf(data.lastUpdated).toEqualTypeOf<number>();
  expect(data.lastUpdatedAt).toBeDefined();
  expectTypeOf(data.lastUpdatedAt).toEqualTypeOf<Date>();
  expect(data.products).toBeDefined();
  expectTypeOf(data.products).toEqualTypeOf<SkyblockBazaarProduct[]>();
  data.products.forEach((product) => {
    expect(product).toBeDefined();
    expect(product).toBeInstanceOf(SkyblockBazaarProduct);
    expectTypeOf(product).toEqualTypeOf<SkyblockBazaarProduct>();
    expect(product.toString).toBeDefined();
    expectTypeOf(product.toString).toEqualTypeOf<() => BazaarProduct | 'UNKNOWN'>();
    expect(product.toString()).toBeDefined();
    expectTypeOf(product.toString()).toEqualTypeOf<BazaarProduct | 'UNKNOWN'>();
  });
});
