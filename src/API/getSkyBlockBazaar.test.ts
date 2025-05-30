import Client from '../Client.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockBazaar from '../Structures/SkyBlock/Bazaar/SkyBlockBazaar.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyBlockBazaarProduct from '../Structures/SkyBlock/Bazaar/SkyBlockBazaarProduct.js';

test('getSkyBlockBazaar (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getSkyBlockBazaar({ raw: true });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<SkyBlockBazaar | RequestData>();
  client.destroy();
});

test('getSkyBlockBazaar', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  let data = await client.getSkyBlockBazaar();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<SkyBlockBazaar | RequestData>();
  data = data as SkyBlockBazaar;
  expect(data.lastUpdated).toBeDefined();
  expectTypeOf(data.lastUpdated).toEqualTypeOf<number>();
  expect(data.lastUpdatedAt).toBeDefined();
  expectTypeOf(data.lastUpdatedAt).toEqualTypeOf<Date>();
  expect(data.products).toBeDefined();
  expectTypeOf(data.products).toEqualTypeOf<SkyBlockBazaarProduct[]>();
  client.destroy();
});
