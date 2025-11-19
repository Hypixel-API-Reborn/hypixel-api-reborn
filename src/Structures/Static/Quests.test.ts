import GameQuests from './GameQuests.js';
import Quests from './Quests.js';
import { expect, expectTypeOf, test } from 'vitest';

test('Quests', () => {
  const data = new Quests({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(Quests);
  expectTypeOf(data).toEqualTypeOf<Quests>();
  expect(data.lastUpdatedTimestamp).toBeDefined();
  expect(data.lastUpdatedTimestamp).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.lastUpdatedTimestamp).toEqualTypeOf<number>();
  expect(data.lastUpdatedAt).toBeDefined();
  expect(data.lastUpdatedAt).toBeInstanceOf(Date);
  expectTypeOf(data.lastUpdatedAt).toEqualTypeOf<Date>();
  expect(data.questsPerGame).toBeDefined();
  expectTypeOf(data.questsPerGame).toEqualTypeOf<Record<string, GameQuests>>();
});
