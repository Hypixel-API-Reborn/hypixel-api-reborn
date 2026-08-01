import Client from '../Client.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockItem from '../Structures/SkyBlock/SkyBlockItem.js';
import { expect, expectTypeOf, test } from 'vitest';

test('getSkyBlockItems', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const data = await client.getSkyBlockItems();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<RequestData<SkyBlockItem[]>>();
  data.parsed.forEach((item: SkyBlockItem) => {
    expect(item).toBeDefined();
    expect(item).toBeInstanceOf(SkyBlockItem);
    expectTypeOf(item).toEqualTypeOf<SkyBlockItem>();
  });
  client.destroy();
});
