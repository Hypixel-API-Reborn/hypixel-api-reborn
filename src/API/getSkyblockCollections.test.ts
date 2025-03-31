import Client from '../Client.js';
import RequestData from '../Private/RequestData.js';
import SkyblockCollection from '../Structures/SkyBlock/Collections/SkyblockCollection.js';
import SkyblockCollections from '../Structures/SkyBlock/Collections/SkyblockCollections.js';
import { expect, expectTypeOf, test } from 'vitest';

test('getSkyblockCollections (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getSkyblockCollections({ raw: true });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<SkyblockCollections | RequestData>();
  client.destroy();
});

test('getSkyblockCollections', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  let data = await client.getSkyblockCollections();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<SkyblockCollections | RequestData>();
  data = data as SkyblockCollections;
  expect(data.lastUpdated).toBeDefined();
  expectTypeOf(data.lastUpdated).toEqualTypeOf<number>();
  expect(data.lastUpdatedAt).toBeDefined();
  expectTypeOf(data.lastUpdatedAt).toEqualTypeOf<Date>();
  expect(data.version).toBeDefined();
  expectTypeOf(data.version).toEqualTypeOf<string>();
  expect(data.farming).toBeDefined();
  expectTypeOf(data.farming).toEqualTypeOf<SkyblockCollection[]>();
  expect(data.mining).toBeDefined();
  expectTypeOf(data.mining).toEqualTypeOf<SkyblockCollection[]>();
  expect(data.combat).toBeDefined();
  expectTypeOf(data.combat).toEqualTypeOf<SkyblockCollection[]>();
  expect(data.foraging).toBeDefined();
  expectTypeOf(data.foraging).toEqualTypeOf<SkyblockCollection[]>();
  expect(data.fishing).toBeDefined();
  expectTypeOf(data.fishing).toEqualTypeOf<SkyblockCollection[]>();
  expect(data.rift).toBeDefined();
  expectTypeOf(data.rift).toEqualTypeOf<SkyblockCollection[]>();
  client.destroy();
});
