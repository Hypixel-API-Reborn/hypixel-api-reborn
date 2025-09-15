import Client from '../Client.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockBingo from '../Structures/SkyBlock/Bingo/SkyBlockBingo.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyBlockBingoGoal from '../Structures/SkyBlock/Bingo/SkyBlockBingoGoal.js';

test('getSkyBlockBingo (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getSkyBlockBingo({ raw: true });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<SkyBlockBingo | RequestData>();
  expect(data.isRaw()).toBe(true);
  client.destroy();
});

test('getSkyBlockBingo', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getSkyBlockBingo();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<SkyBlockBingo | RequestData>();
  expect(data.isRaw()).toBe(false);
  if (data.isRaw()) return;
  expect(data.lastUpdatedTimestamp).toBeDefined();
  expectTypeOf(data.lastUpdatedTimestamp).toEqualTypeOf<number>();
  expect(data.lastUpdatedAt).toBeDefined();
  expectTypeOf(data.lastUpdatedAt).toEqualTypeOf<Date>();
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
  expectTypeOf(data.goals).toEqualTypeOf<SkyBlockBingoGoal[] | null>();
  client.destroy();
});
