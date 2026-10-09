import QuestObjective from './QuestObjective.ts';
import { expect, expectTypeOf, test } from 'vitest';
import type { QuestObjectiveType } from '../../Types/index.ts';

test('QuestObjective', () => {
  const data = new QuestObjective({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(QuestObjective);
  expectTypeOf(data).toEqualTypeOf<QuestObjective>();
  expect(data.id).toBeDefined();
  expectTypeOf(data.id).toEqualTypeOf<string>();
  expect(data.type).toBeDefined();
  expectTypeOf(data.type).toEqualTypeOf<QuestObjectiveType>();
  expect(data.amountNeeded).toBeDefined();
  expect(data.amountNeeded).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.amountNeeded).toEqualTypeOf<number>();
});
