import Quest from './Quest';
import QuestObjective from './QuestObjective';
import { expect, expectTypeOf, test } from 'vitest';
import type { QuestReward, QuestType } from '../../Types/Static';

test('Quest', () => {
  const data = new Quest({ status: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(Quest);
  expectTypeOf(data).toEqualTypeOf<Quest>();
  expect(data.id).toBeDefined();
  expectTypeOf(data.id).toEqualTypeOf<string>();
  expect(data.name).toBeDefined();
  expectTypeOf(data.name).toEqualTypeOf<string>();
  expect(data.description).toBeDefined();
  expectTypeOf(data.description).toEqualTypeOf<string>();
  expect(data.rewards).toBeDefined();
  expectTypeOf(data.rewards).toEqualTypeOf<QuestReward[]>();
  expect(data.type).toBeDefined();
  expectTypeOf(data.type).toEqualTypeOf<QuestType>();
  expect(data.objectives).toBeDefined();
  expectTypeOf(data.objectives).toEqualTypeOf<QuestObjective[]>();
  expect(data.toString()).toBeDefined();
  expectTypeOf(data.toString()).toEqualTypeOf<string>();
});
