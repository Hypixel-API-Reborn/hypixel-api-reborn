import Client from '../Client.js';
import Errors from '../Errors.js';
import Game from '../Structures/Game.js';
import RecentGame from '../Structures/RecentGame.js';
import RequestData from '../Private/RequestData.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { WithRaw } from '../Types/API.js';

test('getRecentGames (no input)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  await expect(() => client.getRecentGames()).rejects.toThrowError(Errors.NO_NICKNAME_UUID);
  client.destroy();
});

test('getRecentGames (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const data = await client.getRecentGames('3b76b69ae5134296a730ed49171ad6f8', { raw: true });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<WithRaw<RecentGame[]> | RequestData>();
  expect(data.isRaw()).toBe(true);
  client.destroy();
});

test('getRecentGames', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const data = await client.getRecentGames('ea805d40e8284d8d8e64e9fc8ac301ca');
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<WithRaw<RecentGame[]> | RequestData>();
  expect(data.isRaw()).toBe(false);
  if (data.isRaw()) return;

  data.forEach((game: RecentGame) => {
    expect(game).toBeDefined();
    expectTypeOf(game).toEqualTypeOf<RecentGame>();
    expect(game).toBeInstanceOf(RecentGame);
    expect(game.game).toBeDefined();
    expectTypeOf(game.game).toEqualTypeOf<Game | null>();
    expect(game.dateTimestamp).toBeDefined();
    expectTypeOf(game.dateTimestamp).toEqualTypeOf<number | null>();
    expect(game.dateAt).toBeDefined();
    expectTypeOf(game.dateAt).toEqualTypeOf<Date | null>();
    expect(game.mode).toBeDefined();
    expectTypeOf(game.mode).toEqualTypeOf<string | null>();
    expect(game.map).toBeDefined();
    expectTypeOf(game.map).toEqualTypeOf<string | null>();
    expect(game.ongoing).toBeDefined();
    expectTypeOf(game.ongoing).toEqualTypeOf<boolean>();
    expect(game.endedTimestamp).toBeDefined();
    expectTypeOf(game.endedTimestamp).toEqualTypeOf<number | null>();
    expect(game.endedAt).toBeDefined();
    expectTypeOf(game.endedAt).toEqualTypeOf<Date | null>();
    expect(game.toString()).toBeDefined();
    expect(game.toString()).toEqual(game.mode);
    expectTypeOf(game.toString()).toEqualTypeOf<string | null>();
  });
  client.destroy();
});
