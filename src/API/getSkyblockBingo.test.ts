import Bingo from '../Structures/SkyBlock/Static/Bingo.js';
import BingoData from '../Structures/SkyBlock/Static/BingoData.js';
import Client from '../Client.js';
import RequestData from '../Private/RequestData.js';
import { expect, expectTypeOf, test } from 'vitest';

test('getSkyblockBingo (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getSkyblockBingo({ raw: true });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<BingoData | RequestData>();
  client.destroy();
});

test('getSkyblockBingo', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  let data = await client.getSkyblockBingo();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<BingoData | RequestData>();
  data = data as BingoData;
  expect(data.lastUpdatedTimestamp).toBeDefined();
  expectTypeOf(data.lastUpdatedTimestamp).toEqualTypeOf<number>();
  expect(data.lastUpdatedAt).toBeDefined();
  expectTypeOf(data.lastUpdatedAt).toEqualTypeOf<Date | null>();
  expect(data.id).toBeDefined();
  expectTypeOf(data.id).toEqualTypeOf<number | null>();
  expect(data.goals).toBeDefined();
  expectTypeOf(data.goals).toEqualTypeOf<Bingo[] | null>();
  if (data.goals) {
    data.goals.forEach((goal: Bingo) => {
      expect(goal).toBeDefined();
      expectTypeOf(goal).toEqualTypeOf<Bingo>();
      expect(goal).toBeInstanceOf(Bingo);
      expect(goal.toString()).toBeDefined();
      expect(goal.toString()).toBe(goal.id);
      expectTypeOf(goal.toString()).toEqualTypeOf<string>();
    });
  }
  expect(data.getGoal(1, 1)).toBeDefined();
  expectTypeOf(data.getGoal(1, 1)).toEqualTypeOf<Bingo | undefined>();
  client.destroy();
});
