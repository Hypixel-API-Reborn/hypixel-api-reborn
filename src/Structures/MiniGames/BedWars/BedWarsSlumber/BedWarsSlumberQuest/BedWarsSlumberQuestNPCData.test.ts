import BedWarsSlumberQuestNPCData from './BedWarsSlumberQuestNPCData.ts';
import { expect, expectTypeOf, test } from 'vitest';

test('BedWarsSlumberQuestNPCData', () => {
  const data = new BedWarsSlumberQuestNPCData({ stats: 'meow' }, 'npc_bucky');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(BedWarsSlumberQuestNPCData);
  expectTypeOf(data).toEqualTypeOf<BedWarsSlumberQuestNPCData>();
  expect(data.started).toBeDefined();
  expectTypeOf(data.started).toEqualTypeOf<boolean>();
  expect(data.lastStarted).toBeDefined();
  expect(data.lastStarted).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.lastStarted).toEqualTypeOf<number>();
  expect(data.completed).toBeDefined();
  expectTypeOf(data.completed).toEqualTypeOf<boolean>();
  expect(data.lastCompleted).toBeDefined();
  expect(data.lastCompleted).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.lastCompleted).toEqualTypeOf<number>();
});
