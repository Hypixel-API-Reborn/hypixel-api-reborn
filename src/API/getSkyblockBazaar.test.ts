import Client from '../Client.js';
import RequestData from '../Private/RequestData.js';
import SkyblockBazaar from '../Structures/SkyBlock/Bazaar/SkyblockBazaar.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyblockBazaarProduct from '../Structures/SkyBlock/Bazaar/SkyblockBazaarProduct.js';

test('getSkyblockBazaar (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getSkyblockBazaar({ raw: true });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<SkyblockBazaar | RequestData>();
  client.destroy();
});

test('getSkyblockBazaar', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  let data = await client.getSkyblockBazaar();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<SkyblockBazaar | RequestData>();
  data = data as SkyblockBazaar;
  expect(data.lastUpdated).toBeDefined();
  expectTypeOf(data.lastUpdated).toEqualTypeOf<number>();
  expect(data.lastUpdatedAt).toBeDefined();
  expectTypeOf(data.lastUpdatedAt).toEqualTypeOf<Date>();
  expect(data.products).toBeDefined();
  expectTypeOf(data.products).toEqualTypeOf<SkyblockBazaarProduct[]>();
  client.destroy();
});
