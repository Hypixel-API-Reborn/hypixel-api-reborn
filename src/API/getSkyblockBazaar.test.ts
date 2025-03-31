import Client from '../Client.js';
import RequestData from '../Private/RequestData.js';
import SkyblockBazzar from '../Structures/SkyBlock/Bazaar/SkyblockBazzar.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyblockBazzarProduct from '../Structures/SkyBlock/Bazaar/SkyblockBazzarProduct.js';

test('getSkyblockBazaar (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getSkyblockBazaar({ raw: true });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<SkyblockBazzar | RequestData>();
  client.destroy();
});

test('getSkyblockBazaar', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  let data = await client.getSkyblockBazaar();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<SkyblockBazzar | RequestData>();
  data = data as SkyblockBazzar;
  expect(data.lastUpdated).toBeDefined();
  expectTypeOf(data.lastUpdated).toEqualTypeOf<number>();
  expect(data.lastUpdatedAt).toBeDefined();
  expectTypeOf(data.lastUpdatedAt).toEqualTypeOf<Date>();
  expect(data.products).toBeDefined();
  expectTypeOf(data.products).toEqualTypeOf<SkyblockBazzarProduct[]>();
  client.destroy();
});
