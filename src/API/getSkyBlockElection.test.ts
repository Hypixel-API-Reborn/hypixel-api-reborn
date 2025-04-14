import Client from '../Client.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockElection from '../Structures/SkyBlock/Election/SkyBlockElection.js';
import SkyBlockElectionData from '../Structures/SkyBlock/Election/SkyBlockElectionData.js';
import { expect, expectTypeOf, test } from 'vitest';

test('getSkyBlockElection (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getSkyBlockElection({ raw: true });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<SkyBlockElectionData | RequestData>();
  client.destroy();
});

test('getSkyBlockElection', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  let data = await client.getSkyBlockElection();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<SkyBlockElectionData | RequestData>();
  data = data as SkyBlockElectionData;
  expect(data.lastUpdatedTimestamp).toBeDefined();
  expectTypeOf(data.lastUpdatedTimestamp).toEqualTypeOf<number>();
  expect(data.lastUpdatedAt).toBeDefined();
  expectTypeOf(data.lastUpdatedAt).toEqualTypeOf<Date>();
  expect(data.lastElectionResults).toBeDefined();
  expectTypeOf(data.lastElectionResults).toEqualTypeOf<SkyBlockElection>();
  expect(data.currentElection).toBeDefined();
  expectTypeOf(data.currentElection).toEqualTypeOf<SkyBlockElection | null>();
  client.destroy();
});
