import SkyblockBingo from './SkyblockBingo.js';
import SkyblockBingoGoal from './SkyblockBingoGoal.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockBingo', () => {
  const data = new SkyblockBingo({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockBingo);
  expectTypeOf(data).toEqualTypeOf<SkyblockBingo>();

  expect(data.lastUpdatedTimestamp).toBeDefined();
  expectTypeOf(data.lastUpdatedTimestamp).toEqualTypeOf<number>();
  expect(data.lastUpdatedAt).toBeDefined();
  expectTypeOf(data.lastUpdatedAt).toEqualTypeOf<Date>();
  expect(data.id).toBeDefined();
  expectTypeOf(data.id).toEqualTypeOf<number | null>();
  expect(data.name).toBeDefined();
  expectTypeOf(data.name).toEqualTypeOf<string>();
  expect(data.start).toBeDefined();
  expectTypeOf(data.start).toEqualTypeOf<number>();
  expect(data.startAt).toBeDefined();
  expectTypeOf(data.startAt).toEqualTypeOf<Date>();
  expect(data.end).toBeDefined();
  expectTypeOf(data.end).toEqualTypeOf<number>();
  expect(data.endAt).toBeDefined();
  expectTypeOf(data.endAt).toEqualTypeOf<Date>();
  expect(data.goals).toBeDefined();
  expectTypeOf(data.goals).toEqualTypeOf<SkyblockBingoGoal[] | null>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => number | null>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toEqual(data.id);
  expectTypeOf(data.toString()).toEqualTypeOf<number | null>();
});
