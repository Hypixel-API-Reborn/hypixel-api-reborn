import Client from '../Client.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockElection from '../Structures/SkyBlock/Election/SkyBlockElection.js';
import SkyBlockElectionData from '../Structures/SkyBlock/Election/SkyBlockElectionData.js';
import { expect, expectTypeOf, test } from 'vitest';

test('getSkyBlockElection', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const data = await client.getSkyBlockElection();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<RequestData<SkyBlockElectionData>>();
  expect(data.parsed.lastUpdatedTimestamp).toBeDefined();
  expectTypeOf(data.parsed.lastUpdatedTimestamp).toEqualTypeOf<number>();
  expect(data.parsed.lastUpdatedAt).toBeDefined();
  expectTypeOf(data.parsed.lastUpdatedAt).toEqualTypeOf<Date>();
  expect(data.parsed.lastElectionResults).toBeDefined();
  expectTypeOf(data.parsed.lastElectionResults).toEqualTypeOf<SkyBlockElection>();
  expect(data.parsed.currentElection).toBeDefined();
  expectTypeOf(data.parsed.currentElection).toEqualTypeOf<SkyBlockElection | null>();
  client.destroy();
});
