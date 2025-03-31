import SkyblockBazzarProduct from './SkyblockBazzarProduct.js';
import SkyblockBazzarProductOrder from './SkyblockBazzarProductOrder.js';
import SkyblockBazzarQuickStatus from './SkyblockBazzarQuickStatus.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { BazzarProduct } from '../../../Types/Skyblock.js';

test('SkyblockBazzarProduct', () => {
  const data = new SkyblockBazzarProduct({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockBazzarProduct);
  expectTypeOf(data).toEqualTypeOf<SkyblockBazzarProduct>();
  expect(data.productId).toBeDefined();
  expectTypeOf(data.productId).toEqualTypeOf<BazzarProduct | 'UNKNOWN'>();
  expect(data.sellSummary).toBeDefined();
  expectTypeOf(data.sellSummary).toEqualTypeOf<SkyblockBazzarProductOrder[]>();
  expect(data.buySummary).toBeDefined();
  expectTypeOf(data.buySummary).toEqualTypeOf<SkyblockBazzarProductOrder[]>();
  expect(data.quickStatus).toBeDefined();
  expectTypeOf(data.quickStatus).toEqualTypeOf<SkyblockBazzarQuickStatus>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => BazzarProduct | 'UNKNOWN'>();
  expect(data.toString()).toBeDefined();
  expectTypeOf(data.toString()).toEqualTypeOf<BazzarProduct | 'UNKNOWN'>();
});
