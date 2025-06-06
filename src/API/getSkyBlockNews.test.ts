import Client from '../Client.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockNews from '../Structures/SkyBlock/News/SkyBlockNews.js';
import { expect, expectTypeOf, test } from 'vitest';

test('getSkyBlockNews (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getSkyBlockNews({ raw: true });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<SkyBlockNews[] | RequestData>();
  client.destroy();
});

test('getSkyBlockNews', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  let data = await client.getSkyBlockNews();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<SkyBlockNews[] | RequestData>();
  data = data as SkyBlockNews[];
  data.forEach((news: SkyBlockNews) => {
    expect(news.title).toBeDefined();
    expectTypeOf(news.title).toEqualTypeOf<string>();
    expect(news.link).toBeDefined();
    expectTypeOf(news.link).toEqualTypeOf<string>();
    expect(news.date).toBeDefined();
    expectTypeOf(news.date).toEqualTypeOf<Date | null>();
    expect(news.version).toBeDefined();
    expectTypeOf(news.version).toEqualTypeOf<string | null>();
  });
  client.destroy();
});
