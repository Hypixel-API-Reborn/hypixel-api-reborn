import Challenge from '../Structures/Static/Challenge.js';
import Challenges from '../Structures/Static/Challenges.js';
import Client from '../Client.js';
import GameChallenges from '../Structures/Static/GameChallenges.js';
import RequestData from '../Private/RequestData.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { ChallengeReward } from '../Types/Static.js';

test('getChallenges', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const data = await client.getChallenges();
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<RequestData<Challenges>>();
  expect(data.parsed.lastUpdatedTimestamp).toBeDefined();
  expect(data.parsed.lastUpdatedTimestamp).toBeGreaterThan(0);
  expectTypeOf(data.parsed.lastUpdatedTimestamp).toEqualTypeOf<number>();
  expect(data.parsed.lastUpdatedAt).toBeDefined();
  expectTypeOf(data.parsed.lastUpdatedAt).toEqualTypeOf<Date>();
  expect(data.parsed.challengesPerGame).toBeDefined();
  expectTypeOf(data.parsed.challengesPerGame).toEqualTypeOf<Record<string, GameChallenges>>();
  Object.keys(data.parsed.challengesPerGame).forEach((gameName) => {
    if (undefined === data.parsed.challengesPerGame[gameName]) return;
    expect(data.parsed.challengesPerGame[gameName]).toBeDefined();
    expect(data.parsed.challengesPerGame[gameName]).toBeInstanceOf(GameChallenges);
    expectTypeOf(data.parsed.challengesPerGame[gameName]).toEqualTypeOf<GameChallenges>();
    expect(data.parsed.challengesPerGame[gameName].category).toBeDefined();
    expect(data.parsed.challengesPerGame[gameName].category).toEqual(gameName);
    expect(data.parsed.challengesPerGame[gameName].challenges).toBeDefined();
    expectTypeOf(data.parsed.challengesPerGame[gameName].challenges).toEqualTypeOf<Challenge[]>();
    data.parsed.challengesPerGame[gameName].challenges.forEach((challenge: Challenge) => {
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
