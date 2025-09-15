import Client from '../Client.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockItem from '../Structures/SkyBlock/SkyBlockItem.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { WithRaw } from '../Types/API.js';

test('getSkyBlockItems (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getSkyBlockItems({ raw: true });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<WithRaw<SkyBlockItem[]> | RequestData>();
  expect(data.isRaw()).toBe(true);
  client.destroy();
});

test('getSkyBlockItems', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getSkyBlockItems();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<WithRaw<SkyBlockItem[]> | RequestData>();
  expect(data.isRaw()).toBe(false);
  if (data.isRaw()) return;
  data.forEach((item: SkyBlockItem) => {
    expect(item).toBeDefined();
    expect(item).toBeInstanceOf(SkyBlockItem);
    expectTypeOf(item).toEqualTypeOf<SkyBlockItem>();
  });
  client.destroy();
});
