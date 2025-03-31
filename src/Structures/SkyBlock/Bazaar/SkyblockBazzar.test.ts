import SkyblockBazzar from './SkyblockBazzar.js';
import SkyblockBazzarProduct from './SkyblockBazzarProduct.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { BazzarProduct } from '../../../Types/Skyblock.js';

test('SkyblockBazzar', () => {
  const data = new SkyblockBazzar({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockBazzar);
  expectTypeOf(data).toEqualTypeOf<SkyblockBazzar>();
  expect(data.lastUpdated).toBeDefined();
  expectTypeOf(data.lastUpdated).toEqualTypeOf<number>();
  expect(data.lastUpdatedAt).toBeDefined();
  expectTypeOf(data.lastUpdatedAt).toEqualTypeOf<Date>();
  expect(data.products).toBeDefined();
  expectTypeOf(data.products).toEqualTypeOf<SkyblockBazzarProduct[]>();
  data.products.forEach((product) => {
    expect(product).toBeDefined();
    expect(product).toBeInstanceOf(SkyblockBazzarProduct);
    expectTypeOf(product).toEqualTypeOf<SkyblockBazzarProduct>();
    expect(product.toString).toBeDefined();
    expectTypeOf(product.toString).toEqualTypeOf<() => BazzarProduct | 'UNKNOWN'>();
    expect(product.toString()).toBeDefined();
    expectTypeOf(product.toString()).toEqualTypeOf<BazzarProduct | 'UNKNOWN'>();
  });
});
