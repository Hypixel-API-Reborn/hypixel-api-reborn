import Client from '../Client.js';
import RequestData from '../Private/RequestData.js';
import SkyblockElection from '../Structures/SkyBlock/Election/SkyblockElection.js';
import SkyblockElectionData from '../Structures/SkyBlock/Election/SkyblockElectionData.js';
import { expect, expectTypeOf, test } from 'vitest';

test('getSkyblockElection (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getSkyblockElection({ raw: true });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<SkyblockElectionData | RequestData>();
  client.destroy();
});

test('getSkyblockElection', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  let data = await client.getSkyblockElection();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<SkyblockElectionData | RequestData>();
  data = data as SkyblockElectionData;
  expect(data.lastUpdatedTimestamp).toBeDefined();
  expectTypeOf(data.lastUpdatedTimestamp).toEqualTypeOf<number>();
  expect(data.lastUpdatedAt).toBeDefined();
  expectTypeOf(data.lastUpdatedAt).toEqualTypeOf<Date>();
  expect(data.lastElectionResults).toBeDefined();
  expectTypeOf(data.lastElectionResults).toEqualTypeOf<SkyblockElection>();
  expect(data.currentElection).toBeDefined();
  expectTypeOf(data.currentElection).toEqualTypeOf<SkyblockElection | null>();
  client.destroy();
});
