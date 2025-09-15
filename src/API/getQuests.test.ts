import Client from '../Client.js';
import GameQuests from '../Structures/Static/GameQuests.js';
import Quest from '../Structures/Static/Quest.js';
import QuestObjective from '../Structures/Static/QuestObjective.js';
import Quests from '../Structures/Static/Quests.js';
import RequestData from '../Private/RequestData.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { QuestReward, QuestType } from '../Types/Static.js';

test('getQuests (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getQuests({ raw: true });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<Quests | RequestData>();
  expect(data.isRaw()).toBe(true);
  client.destroy();
});

test('getQuests', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getQuests();
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(Quests);
  expectTypeOf(data).toEqualTypeOf<Quests | RequestData>();
  expect(data.isRaw()).toBe(false);
  if (data.isRaw()) return;
  expect(data.lastUpdatedTimestamp).toBeDefined();
  expectTypeOf(data.lastUpdatedTimestamp).toEqualTypeOf<number>();
  expect(data.lastUpdatedTimestamp).toBeGreaterThanOrEqual(0);
  expect(data.lastUpdatedAt).toBeDefined();
  expectTypeOf(data.lastUpdatedAt).toEqualTypeOf<Date>();
  expect(data.questsPerGame).toBeDefined();
  expectTypeOf(data.questsPerGame).toEqualTypeOf<Record<string, GameQuests>>();
  Object.keys(data.questsPerGame).forEach((game) => {
    if (undefined === data.questsPerGame[game]) return;
    expect(data.questsPerGame[game]).toBeDefined();
    expect(data.questsPerGame[game]).toBeInstanceOf(GameQuests);
    expectTypeOf(data.questsPerGame[game]).toEqualTypeOf<GameQuests>();
    expect(data.questsPerGame[game].game).toBeDefined();
    expect(data.questsPerGame[game].game).toBe(game);
    expectTypeOf(data.questsPerGame[game].game).toEqualTypeOf<string>();
    expect(data.questsPerGame[game].quests).toBeDefined();
    expectTypeOf(data.questsPerGame[game].quests).toEqualTypeOf<Quest[]>();
    data.questsPerGame[game].quests.forEach((quest: Quest) => {
      expect(quest).toBeDefined();
      expect(quest).toBeInstanceOf(Quest);
      expectTypeOf(quest).toEqualTypeOf<Quest>();
      expect(quest.id).toBeDefined();
      expectTypeOf(quest.id).toEqualTypeOf<string>();
      expect(quest.name).toBeDefined();
      expectTypeOf(quest.name).toEqualTypeOf<string>();
      expect(quest.description).toBeDefined();
      expectTypeOf(quest.description).toEqualTypeOf<string>();
      expect(quest.rewards).toBeDefined();
      expectTypeOf(quest.rewards).toEqualTypeOf<QuestReward[]>();
      expect(quest.type).toBeDefined();
      expectTypeOf(quest.type).toEqualTypeOf<QuestType>();
      expect(quest.objectives).toBeDefined();
      expectTypeOf(quest.objectives).toEqualTypeOf<QuestObjective[]>();
    });
  });
  client.destroy();
});
