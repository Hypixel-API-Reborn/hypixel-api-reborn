import Client from '../Client.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockBazaar from '../Structures/SkyBlock/Bazaar/SkyBlockBazaar.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyBlockBazaarProduct from '../Structures/SkyBlock/Bazaar/SkyBlockBazaarProduct.js';

test('getSkyBlockBazaar', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const data = await client.getSkyBlockBazaar();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<RequestData<SkyBlockBazaar>>();
  expect(data.parsed.lastUpdated).toBeDefined();
  expectTypeOf(data.parsed.lastUpdated).toEqualTypeOf<number>();
  expect(data.parsed.lastUpdatedAt).toBeDefined();
  expectTypeOf(data.parsed.lastUpdatedAt).toEqualTypeOf<Date>();
  expect(data.parsed.products).toBeDefined();
  expectTypeOf(data.parsed.products).toEqualTypeOf<SkyBlockBazaarProduct[]>();
  client.destroy();
});
