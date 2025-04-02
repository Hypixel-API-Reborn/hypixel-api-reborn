import Client from '../Client.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockFireSale from '../Structures/SkyBlock/FireSale/SkyBlockFireSale.js';
import { defaultRequestData } from '../../vitest.setup.js';
import { expect, expectTypeOf, test, vi } from 'vitest';

test('getSkyBlockFireSales (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getSkyBlockFireSales({ raw: true });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<SkyBlockFireSale[] | RequestData>();
  client.destroy();
});

test('getSkyBlockFireSales', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  vi.spyOn(global, 'fetch').mockResolvedValue({
    ...defaultRequestData,
    json: () =>
      /* eslint-disable camelcase */
      Promise.resolve({
        success: true,
        sales: [
          { item_id: 'PET_SKIN_LION_WHITE', start: 1725120000000, end: 1725552000000, amount: 6500, price: 650 },
          { item_id: 'PET_SKIN_LION_BLACK', start: 1725120000000, end: 1725552000000, amount: 6500, price: 650 }
        ]
      })
    /* eslint-enable camelcase */
  } as any);

  let data = await client.getSkyBlockFireSales();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<SkyBlockFireSale[] | RequestData>();
  data = data as SkyBlockFireSale[];
  data.forEach((firesale: SkyBlockFireSale) => {
    expect(firesale.itemId).toBeDefined();
    expectTypeOf(firesale.itemId).toEqualTypeOf<string>();
    expect(firesale.startTimestamp).toBeDefined();
    expectTypeOf(firesale.startTimestamp).toEqualTypeOf<number>();
    expect(firesale.startAt).toBeDefined();
    expectTypeOf(firesale.startAt).toEqualTypeOf<Date>();
    expect(firesale.endTimestamp).toBeDefined();
    expectTypeOf(firesale.endTimestamp).toEqualTypeOf<number>();
    expect(firesale.endAt).toBeDefined();
    expectTypeOf(firesale.endAt).toEqualTypeOf<Date>();
    expect(firesale.amount).toBeDefined();
    expectTypeOf(firesale.amount).toEqualTypeOf<number>();
    expect(firesale.price).toBeDefined();
    expectTypeOf(firesale.price).toEqualTypeOf<number>();
    expect(firesale.toString).toBeDefined();
    expectTypeOf(firesale.toString).toEqualTypeOf<() => string>();
    expect(firesale.toString()).toBeDefined();
    expect(firesale.toString()).toBe(firesale.itemId);
    expectTypeOf(firesale.toString()).toEqualTypeOf<string>();
  });
  vi.restoreAllMocks();
  client.destroy();
});
