import Challenge from '../Structures/Static/Challenge.js';
import Challenges from '../Structures/Static/Challenges.js';
import Client from '../Client.js';
import GameChallenges from '../Structures/Static/GameChallenges.js';
import RequestData from '../Private/RequestData.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { ChallengeReward } from '../Types/Static.js';

test('getChallenges (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getChallenges({ raw: true });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<Challenges | RequestData>();
  client.destroy();
});

test('getChallenges', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  let data = await client.getChallenges();
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(Challenges);
  expectTypeOf(data).toEqualTypeOf<Challenges | RequestData>();
  data = data as Challenges;
  expect(data.lastUpdatedTimestamp).toBeDefined();
  expect(data.lastUpdatedTimestamp).toBeGreaterThan(0);
  expectTypeOf(data.lastUpdatedTimestamp).toEqualTypeOf<number>();
  expect(data.lastUpdatedAt).toBeDefined();
  expectTypeOf(data.lastUpdatedAt).toEqualTypeOf<Date>();
  expect(data.challengesPerGame).toBeDefined();
  expectTypeOf(data.challengesPerGame).toEqualTypeOf<Record<string, GameChallenges>>();
  Object.keys(data.challengesPerGame).forEach((gameName) => {
    if (undefined === data.challengesPerGame[gameName]) return;
    expect(data.challengesPerGame[gameName]).toBeDefined();
    expect(data.challengesPerGame[gameName]).toBeInstanceOf(GameChallenges);
    expectTypeOf(data.challengesPerGame[gameName]).toEqualTypeOf<GameChallenges>();
    expect(data.challengesPerGame[gameName].category).toBeDefined();
    expect(data.challengesPerGame[gameName].category).toEqual(gameName);
    expect(data.challengesPerGame[gameName].challenges).toBeDefined();
    expectTypeOf(data.challengesPerGame[gameName].challenges).toEqualTypeOf<Challenge[]>();
    data.challengesPerGame[gameName].challenges.forEach((challenge: Challenge) => {
      expect(challenge.id).toBeDefined();
      expectTypeOf(challenge.id).toEqualTypeOf<string>();
      expect(challenge.name).toBeDefined();
      expectTypeOf(challenge.name).toEqualTypeOf<string>();
      expect(challenge.rewards).toBeDefined();
      expectTypeOf(challenge.rewards).toEqualTypeOf<ChallengeReward[]>();
    });
  });
  client.destroy();
});
