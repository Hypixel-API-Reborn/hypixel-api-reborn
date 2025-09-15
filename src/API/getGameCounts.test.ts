import Client from '../Client.js';
import GameCounts from '../Structures/GameCounts.js';
import RequestData from '../Private/RequestData.js';
import { expect, expectTypeOf, test } from 'vitest';

test('getGameCounts (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getGameCounts({ raw: true });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<GameCounts | RequestData>();
  expect(data.isRaw()).toBe(true);
  if (data.isRaw()) return;
  client.destroy();
});

test('getGameCounts', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getGameCounts();
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(GameCounts);
  expectTypeOf(data).toEqualTypeOf<GameCounts | RequestData>();
  expect(data.isRaw()).toBe(false);
  if (data.isRaw()) return;
  expect(data.playerCount).toBeDefined();
  expectTypeOf(data.playerCount).toEqualTypeOf<number>();
  expect(data.toString()).toBeDefined();
  expectTypeOf(data.toString()).toEqualTypeOf<number>();
  client.destroy();
});
