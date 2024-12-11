import Client from '../Client.js';
import RequestData from '../Private/RequestData.js';
import WatchdogStats from '../Structures/WatchdogStats.js';
import { expect, expectTypeOf, test } from 'vitest';

test('getWatchdogStats (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getWatchdogStats({ raw: true });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<WatchdogStats | RequestData>();
  client.destroy();
});

test('getWatchdogStats', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  let data = await client.getWatchdogStats();
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(WatchdogStats);
  expectTypeOf(data).toEqualTypeOf<WatchdogStats | RequestData>();
  data = data as WatchdogStats;
  expect(data.byWatchdogTotal).toBeDefined();
  expect(data.byWatchdogTotal).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.byWatchdogTotal).toEqualTypeOf<number>();
  expect(data.byWatchdogLastMinute).toBeDefined();
  expect(data.byWatchdogLastMinute).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.byWatchdogLastMinute).toEqualTypeOf<number>();
  expect(data.byWatchdogRollingDay).toBeDefined();
  expect(data.byWatchdogRollingDay).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.byWatchdogRollingDay).toEqualTypeOf<number>();
  expect(data.byStaffTotal).toBeDefined();
  expect(data.byStaffTotal).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.byStaffTotal).toEqualTypeOf<number>();
  expect(data.byStaffRollingDay).toBeDefined();
  expect(data.byStaffRollingDay).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.byStaffRollingDay).toEqualTypeOf<number>();
  client.destroy();
});
