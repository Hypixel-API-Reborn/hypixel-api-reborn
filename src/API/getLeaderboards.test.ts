import Client from '../Client.js';
import Errors from '../Errors.js';
import Leaderboard from '../Structures/Leaderboard.js';
import RequestData from '../Private/RequestData.js';
import { defaultRequestData } from '../../vitest.setup.js';
import { expect, expectTypeOf, test, vi } from 'vitest';
import type { WithRaw } from '../Types/API.js';

test('getLeaderboards (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const data = await client.getLeaderboards({ raw: true });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<WithRaw<Record<string, Leaderboard[]>> | RequestData>();
  expect(data.isRaw()).toBe(true);
  client.destroy();
});

test('getLeaderboards', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const data = await client.getLeaderboards();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<WithRaw<Record<string, Leaderboard[]>> | RequestData>();
  expect(data.isRaw()).toBe(false);
  if (data.isRaw()) return;
  Object.keys(data).forEach((key) => {
    if (key === 'isRaw') return;
    if (undefined === data[key]) return;
    expect(data[key]).toBeDefined();
    expectTypeOf(data[key]).toEqualTypeOf<Leaderboard[]>();
    data[key].forEach((leaderboard: Leaderboard) => {
      expect(leaderboard).toBeDefined();
      expect(leaderboard).instanceOf(Leaderboard);
      expectTypeOf(leaderboard).toEqualTypeOf<Leaderboard>();

      expect(leaderboard.path).toBeDefined();
      expectTypeOf(leaderboard.path).toEqualTypeOf<string>();
      expect(leaderboard.prefix).toBeDefined();
      expectTypeOf(leaderboard.prefix).toEqualTypeOf<string>();
      expect(leaderboard.title).toBeDefined();
      expectTypeOf(leaderboard.title).toEqualTypeOf<string>();
      expect(leaderboard.location).toBeDefined();
      expectTypeOf(leaderboard.location).toEqualTypeOf<string>();
      expect(leaderboard.count).toBeDefined();
      expect(leaderboard.count).toBeGreaterThanOrEqual(0);
      expectTypeOf(leaderboard.count).toEqualTypeOf<number>();
      expect(leaderboard.leaders).toBeDefined();
      expectTypeOf(leaderboard.leaders).toEqualTypeOf<string[]>();
      leaderboard.leaders.forEach((leader: string) => {
        expect(leader).toBeDefined();
        expectTypeOf(leader).toEqualTypeOf<string>();
      });
    });
  });
  client.destroy();
});

test('getLeaderboards (Missing Data)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '');
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  vi.spyOn(global, 'fetch').mockResolvedValue({
    ...defaultRequestData,
    json: () => Promise.resolve({ success: true })
  } as any);

  await expect(() => client.getLeaderboards()).rejects.toThrowError(
    Errors.SOMETHING_WENT_WRONG.replace(/{cause}/, 'Try again.')
  );
  vi.restoreAllMocks();
  client.destroy();
});
