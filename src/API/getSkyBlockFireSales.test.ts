import Client from '../Client.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockFireSale from '../Structures/SkyBlock/FireSale/SkyBlockFireSale.js';
import { defaultRequestData } from '../../vitest.setup.js';
import { expect, expectTypeOf, test, vi } from 'vitest';
import type { WithRaw } from '../Types/API.js';

test('getSkyBlockFireSales (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getSkyBlockFireSales({ raw: true });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<WithRaw<SkyBlockFireSale[]> | RequestData>();
  expect(data.isRaw()).toBe(true);
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

  const data = await client.getSkyBlockFireSales();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<WithRaw<SkyBlockFireSale[]> | RequestData>();
  expect(data.isRaw()).toBe(false);
  if (data.isRaw()) return;
  data.forEach((FireSale: SkyBlockFireSale) => {
    expect(FireSale.itemId).toBeDefined();
    expectTypeOf(FireSale.itemId).toEqualTypeOf<string>();
    expect(FireSale.startTimestamp).toBeDefined();
    expectTypeOf(FireSale.startTimestamp).toEqualTypeOf<number>();
    expect(FireSale.startAt).toBeDefined();
    expectTypeOf(FireSale.startAt).toEqualTypeOf<Date>();
    expect(FireSale.endTimestamp).toBeDefined();
    expectTypeOf(FireSale.endTimestamp).toEqualTypeOf<number>();
    expect(FireSale.endAt).toBeDefined();
    expectTypeOf(FireSale.endAt).toEqualTypeOf<Date>();
    expect(FireSale.amount).toBeDefined();
    expectTypeOf(FireSale.amount).toEqualTypeOf<number>();
    expect(FireSale.price).toBeDefined();
    expectTypeOf(FireSale.price).toEqualTypeOf<number>();
    expect(FireSale.toString).toBeDefined();
    expectTypeOf(FireSale.toString).toEqualTypeOf<() => string>();
    expect(FireSale.toString()).toBeDefined();
    expect(FireSale.toString()).toBe(FireSale.itemId);
    expectTypeOf(FireSale.toString()).toEqualTypeOf<string>();
  });
  vi.restoreAllMocks();
  client.destroy();
});
