import SkyblockBazaarProduct from './SkyblockBazaarProduct.js';
import SkyblockBazaarProductOrder from './SkyblockBazaarProductOrder.js';
import SkyblockBazaarQuickStatus from './SkyblockBazaarQuickStatus.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { BazaarProduct } from '../../../Types/Skyblock.js';

test('SkyblockBazaarProduct', () => {
  const data = new SkyblockBazaarProduct({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockBazaarProduct);
  expectTypeOf(data).toEqualTypeOf<SkyblockBazaarProduct>();
  expect(data.productId).toBeDefined();
  expectTypeOf(data.productId).toEqualTypeOf<BazaarProduct | 'UNKNOWN'>();
  expect(data.sellSummary).toBeDefined();
  expectTypeOf(data.sellSummary).toEqualTypeOf<SkyblockBazaarProductOrder[]>();
  expect(data.buySummary).toBeDefined();
  expectTypeOf(data.buySummary).toEqualTypeOf<SkyblockBazaarProductOrder[]>();
  expect(data.quickStatus).toBeDefined();
  expectTypeOf(data.quickStatus).toEqualTypeOf<SkyblockBazaarQuickStatus>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => BazaarProduct | 'UNKNOWN'>();
  expect(data.toString()).toBeDefined();
  expectTypeOf(data.toString()).toEqualTypeOf<BazaarProduct | 'UNKNOWN'>();
});
