import Client from '../Client.js';
import GameCounts from '../Structures/Static/GameCounts/GameCounts.js';
import RequestData from '../Private/RequestData.js';
import { expect, expectTypeOf, test } from 'vitest';

test('getGameCounts', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const data = await client.getGameCounts();
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<RequestData<GameCounts>>();
  expect(data.parsed.playerCount).toBeDefined();
  expectTypeOf(data.parsed.playerCount).toEqualTypeOf<number>();
  expect(data.parsed.toString()).toBeDefined();
  expectTypeOf(data.parsed.toString()).toEqualTypeOf<number>();
  client.destroy();
});
