import Client from '../Client.js';
import RequestData from '../Private/RequestData.js';
import WatchdogStats from '../Structures/WatchdogStats.js';
import { expect, expectTypeOf, test } from 'vitest';

test('getWatchdogStats', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const data = await client.getWatchdogStats();
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<RequestData<WatchdogStats>>();
  expect(data.parsed.byWatchdogTotal).toBeDefined();
  expect(data.parsed.byWatchdogTotal).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.parsed.byWatchdogTotal).toEqualTypeOf<number>();
  expect(data.parsed.byWatchdogLastMinute).toBeDefined();
  expect(data.parsed.byWatchdogLastMinute).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.parsed.byWatchdogLastMinute).toEqualTypeOf<number>();
  expect(data.parsed.byWatchdogRollingDay).toBeDefined();
  expect(data.parsed.byWatchdogRollingDay).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.parsed.byWatchdogRollingDay).toEqualTypeOf<number>();
  expect(data.parsed.byStaffTotal).toBeDefined();
  expect(data.parsed.byStaffTotal).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.parsed.byStaffTotal).toEqualTypeOf<number>();
  expect(data.parsed.byStaffRollingDay).toBeDefined();
  expect(data.parsed.byStaffRollingDay).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.parsed.byStaffRollingDay).toEqualTypeOf<number>();
  client.destroy();
});
