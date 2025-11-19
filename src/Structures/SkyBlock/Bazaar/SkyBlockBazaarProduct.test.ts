import SkyBlockBazaarProduct from './SkyBlockBazaarProduct.js';
import SkyBlockBazaarProductOrder from './SkyBlockBazaarProductOrder.js';
import SkyBlockBazaarQuickStatus from './SkyBlockBazaarQuickStatus.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { BazaarProduct } from '../../../Types/SkyBlock.js';

test('SkyBlockBazaarProduct', () => {
  const data = new SkyBlockBazaarProduct({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockBazaarProduct);
  expectTypeOf(data).toEqualTypeOf<SkyBlockBazaarProduct>();
  expect(data.productId).toBeDefined();
  expectTypeOf(data.productId).toEqualTypeOf<BazaarProduct | 'UNKNOWN'>();
  expect(data.sellSummary).toBeDefined();
  expectTypeOf(data.sellSummary).toEqualTypeOf<SkyBlockBazaarProductOrder[]>();
  expect(data.buySummary).toBeDefined();
  expectTypeOf(data.buySummary).toEqualTypeOf<SkyBlockBazaarProductOrder[]>();
  expect(data.quickStatus).toBeDefined();
  expect(data.quickStatus).toBeInstanceOf(SkyBlockBazaarQuickStatus);
  expectTypeOf(data.quickStatus).toEqualTypeOf<SkyBlockBazaarQuickStatus>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => BazaarProduct | 'UNKNOWN'>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toBe(data.productId);
  expectTypeOf(data.toString()).toEqualTypeOf<BazaarProduct | 'UNKNOWN'>();
});
