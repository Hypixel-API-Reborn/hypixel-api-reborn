import Client from '../Client.js';
import RequestData from '../Private/RequestData.js';
import SkyblockItem from '../Structures/SkyBlock/SkyblockItem.js';
import { expect, expectTypeOf, test } from 'vitest';

test('getSkyblockItems (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getSkyblockItems({ raw: true });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<SkyblockItem[] | RequestData>();
  client.destroy();
});

test('getSkyblockItems', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  let data = await client.getSkyblockItems();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<SkyblockItem[] | RequestData>();
  data = data as SkyblockItem[];
  data.forEach((item: SkyblockItem) => {
    expect(item).toBeDefined();
    expect(item).toBeInstanceOf(SkyblockItem);
    expectTypeOf(item).toEqualTypeOf<SkyblockItem>();
  });
  client.destroy();
});
