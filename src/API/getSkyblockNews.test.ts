import Client from '../Client.js';
import RequestData from '../Private/RequestData.js';
import SkyblockNews from '../Structures/SkyBlock/News/SkyblockNews.js';
import { expect, expectTypeOf, test } from 'vitest';

test('getSkyblockNews (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getSkyblockNews({ raw: true });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<SkyblockNews[] | RequestData>();
  client.destroy();
});

test('getSkyblockNews', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  let data = await client.getSkyblockNews();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<SkyblockNews[] | RequestData>();
  data = data as SkyblockNews[];
  data.forEach((news: SkyblockNews) => {
    expect(news.title).toBeDefined();
    expectTypeOf(news.title).toEqualTypeOf<string>();
    expect(news.link).toBeDefined();
    expectTypeOf(news.link).toEqualTypeOf<string>();
    expect(news.rawDate).toBeDefined();
    expectTypeOf(news.rawDate).toEqualTypeOf<string>();
    expect(news.date).toBeDefined();
    expectTypeOf(news.date).toEqualTypeOf<Date | null>();
    expect(news.version).toBeDefined();
    expectTypeOf(news.version).toEqualTypeOf<string | null>();
    expect(news.toString()).toBeDefined();
    expect(news.toString()).toBe(news.title);
    expectTypeOf(news.toString()).toEqualTypeOf<string>();
  });

  client.destroy();
});
