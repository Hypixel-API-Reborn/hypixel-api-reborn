import Product from './Product.js';
import { expect, expectTypeOf, test } from 'vitest';

test('Product', () => {
  const data = new Product({
    /* eslint-disable camelcase */
    product_id: 'INK_SACK:3',
    sell_summary: [
      { amount: 133865, pricePerUnit: 1.4, orders: 2 },
      { amount: 816353, pricePerUnit: 1.3, orders: 12 },
      { amount: 71680, pricePerUnit: 1.1, orders: 3 }
    ],
    buy_summary: [
      { amount: 46654, pricePerUnit: 4, orders: 1 },
      { amount: 71680, pricePerUnit: 5.5, orders: 1 },
      { amount: 20657, pricePerUnit: 6.9, orders: 2 },
      { amount: 30618, pricePerUnit: 7, orders: 2 },
      { amount: 53616, pricePerUnit: 7.6, orders: 1 },
      { amount: 249908, pricePerUnit: 7.7, orders: 4 },
      { amount: 203944, pricePerUnit: 7.8, orders: 12 },
      { amount: 36816, pricePerUnit: 7.9, orders: 1 },
      { amount: 92527, pricePerUnit: 8, orders: 5 },
      { amount: 53129, pricePerUnit: 8.3, orders: 2 },
      { amount: 11165, pricePerUnit: 8.4, orders: 1 },
      { amount: 184653, pricePerUnit: 8.5, orders: 4 },
      { amount: 22548, pricePerUnit: 8.6, orders: 1 },
      { amount: 949628, pricePerUnit: 8.7, orders: 14 },
      { amount: 81014, pricePerUnit: 8.8, orders: 2 },
      { amount: 13239, pricePerUnit: 8.9, orders: 2 },
      { amount: 351416, pricePerUnit: 9.7, orders: 6 },
      { amount: 779336, pricePerUnit: 9.8, orders: 12 }
    ],
    quick_status: {
      productId: 'INK_SACK:3',
      sellPrice: 1.4,
      sellVolume: 1421724,
      sellMovingWeek: 85720502,
      sellOrders: 24,
      buyPrice: 5.204576555316532,
      buyVolume: 6646255,
      buyMovingWeek: 39972807,
      buyOrders: 152
    }
    /* eslint-enable camelcase */
  });

  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(Product);
  expectTypeOf(data).toEqualTypeOf<Product>();
});
