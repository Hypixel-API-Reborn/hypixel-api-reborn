import Client from '../Client.js';
import RequestData from '../Private/RequestData.js';
import SkyblockBingo from '../Structures/SkyBlock/Bingo/SkyblockBingo.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyblockBingoGoal from '../Structures/SkyBlock/Bingo/SkyblockBingoGoal.js';

test('getSkyblockBingo (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getSkyblockBingo({ raw: true });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<SkyblockBingo | RequestData>();
  client.destroy();
});

test('getSkyblockBingo', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  let data = await client.getSkyblockBingo();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<SkyblockBingo | RequestData>();
  data = data as SkyblockBingo;
  expect(data.lastUpdatedTimestamp).toBeDefined();
  expectTypeOf(data.lastUpdatedTimestamp).toEqualTypeOf<number>();
  expect(data.lastUpdatedAt).toBeDefined();
  expectTypeOf(data.lastUpdatedAt).toEqualTypeOf<Date | null>();
  expect(data.id).toBeDefined();
  expectTypeOf(data.id).toEqualTypeOf<number | null>();
  expect(data.name).toBeDefined();
  expectTypeOf(data.name).toEqualTypeOf<string>();
  expect(data.start).toBeDefined();
  expectTypeOf(data.start).toEqualTypeOf<number>();
  expect(data.startAt).toBeDefined();
  expectTypeOf(data.startAt).toEqualTypeOf<Date>();
  expect(data.end).toBeDefined();
  expectTypeOf(data.end).toEqualTypeOf<number>();
  expect(data.endAt).toBeDefined();
  expectTypeOf(data.endAt).toEqualTypeOf<Date>();
  expect(data.goals).toBeDefined();
  expectTypeOf(data.goals).toEqualTypeOf<SkyblockBingoGoal[] | null>();
  client.destroy();
});
