import Client from '../Client.js';
import Order from '../Structures/SkyBlock/Bazaar/Order.js';
import Product from '../Structures/SkyBlock/Bazaar/Product.js';
import RequestData from '../Private/RequestData.js';
import { expect, expectTypeOf, test } from 'vitest';

test('getSkyblockBazarr (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getSkyblockBazaar({ raw: true });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<Product[] | RequestData>();
  client.destroy();
});
test('getSkyblockBazarr', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  let data = await client.getSkyblockBazaar();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<Product[] | RequestData>();
  data = data as Product[];
  data.forEach((product: Product) => {
    expect(product).toBeDefined();
    expect(product).toBeInstanceOf(Product);
    expectTypeOf(product).toEqualTypeOf<Product>();
    expect(product.productId).toBeDefined();
    expectTypeOf(product.productId).toEqualTypeOf<string>();
    expect(product.sellSummary).toBeDefined();
    expectTypeOf(product.sellSummary).toEqualTypeOf<Order[]>();
    product.sellSummary.forEach((sell: Order) => {
      expect(sell).toBeDefined();
      expect(sell).toBeInstanceOf(Order);
      expectTypeOf(sell).toEqualTypeOf<Order>();
      expect(sell.amount).toBeDefined();
      expectTypeOf(sell.amount).toEqualTypeOf<number>();
      expect(sell.amount).toBeGreaterThanOrEqual(0);
      expect(sell.pricePerUnit).toBeDefined();
      expectTypeOf(sell.pricePerUnit).toEqualTypeOf<number>();
      expect(sell.pricePerUnit).toBeGreaterThanOrEqual(0);
      expect(sell.totalPrice).toBeDefined();
      expectTypeOf(sell.totalPrice).toEqualTypeOf<number>();
      expect(sell.totalPrice).toBeGreaterThanOrEqual(0);
      expect(sell.orders).toBeDefined();
      expectTypeOf(sell.orders).toEqualTypeOf<number>();
      expect(sell.orders).toBeGreaterThanOrEqual(0);
      expect(sell.toString()).toBeDefined();
      expect(sell.toString()).toEqual(sell.totalPrice);
      expectTypeOf(sell.toString()).toEqualTypeOf<number>();
    });
  });
  client.destroy();
});
