import Client from '../Client.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockCollection from '../Structures/SkyBlock/Collections/SkyBlockCollection.js';
import SkyBlockCollections from '../Structures/SkyBlock/Collections/SkyBlockCollections.js';
import { expect, expectTypeOf, test } from 'vitest';

test('getSkyBlockCollections (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getSkyBlockCollections({ raw: true });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<SkyBlockCollections | RequestData>();
  expect(data.isRaw()).toBe(true);
  client.destroy();
});

test('getSkyBlockCollections', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getSkyBlockCollections();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<SkyBlockCollections | RequestData>();
  expect(data.isRaw()).toBe(false);
  if (data.isRaw()) return;
  expect(data.lastUpdated).toBeDefined();
  expectTypeOf(data.lastUpdated).toEqualTypeOf<number>();
  expect(data.lastUpdatedAt).toBeDefined();
  expectTypeOf(data.lastUpdatedAt).toEqualTypeOf<Date>();
  expect(data.version).toBeDefined();
  expectTypeOf(data.version).toEqualTypeOf<string>();
  expect(data.farming).toBeDefined();
  expectTypeOf(data.farming).toEqualTypeOf<SkyBlockCollection[]>();
  expect(data.mining).toBeDefined();
  expectTypeOf(data.mining).toEqualTypeOf<SkyBlockCollection[]>();
  expect(data.combat).toBeDefined();
  expectTypeOf(data.combat).toEqualTypeOf<SkyBlockCollection[]>();
  expect(data.foraging).toBeDefined();
  expectTypeOf(data.foraging).toEqualTypeOf<SkyBlockCollection[]>();
  expect(data.fishing).toBeDefined();
  expectTypeOf(data.fishing).toEqualTypeOf<SkyBlockCollection[]>();
  expect(data.rift).toBeDefined();
  expectTypeOf(data.rift).toEqualTypeOf<SkyBlockCollection[]>();
  client.destroy();
});
