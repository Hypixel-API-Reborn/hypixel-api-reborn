import SkyBlockBazaar from './SkyBlockBazaar.js';
import SkyBlockBazaarProduct from './SkyBlockBazaarProduct.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { BazaarProduct } from '../../../Types/SkyBlock.js';

test('SkyBlockBazaar', () => {
  const data = new SkyBlockBazaar({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockBazaar);
  expectTypeOf(data).toEqualTypeOf<SkyBlockBazaar>();
  expect(data.lastUpdated).toBeDefined();
  expectTypeOf(data.lastUpdated).toEqualTypeOf<number>();
  expect(data.lastUpdatedAt).toBeDefined();
  expectTypeOf(data.lastUpdatedAt).toEqualTypeOf<Date>();
  expect(data.products).toBeDefined();
  expectTypeOf(data.products).toEqualTypeOf<SkyBlockBazaarProduct[]>();
  data.products.forEach((product) => {
    expect(product).toBeDefined();
    expect(product).toBeInstanceOf(SkyBlockBazaarProduct);
    expectTypeOf(product).toEqualTypeOf<SkyBlockBazaarProduct>();
    expect(product.toString).toBeDefined();
    expectTypeOf(product.toString).toEqualTypeOf<() => BazaarProduct | 'UNKNOWN'>();
    expect(product.toString()).toBeDefined();
    expectTypeOf(product.toString()).toEqualTypeOf<BazaarProduct | 'UNKNOWN'>();
  });
});
