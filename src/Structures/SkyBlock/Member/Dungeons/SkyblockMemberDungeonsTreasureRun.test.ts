import SkyblockMemberDungeonsTreasureRun from './SkyblockMemberDungeonsTreasureRun.js';
import SkyblockMemberDungeonsTreasuresChest from './SkyblockMemberDungeonsTreasuresChest.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { DungeonGamemode } from '../../../../Types/Skyblock.js';
import type { UUID, UserInput } from '../../../../Types/Global.js';

test('SkyblockMemberDungeonsTreasureRun', () => {
  const data = new SkyblockMemberDungeonsTreasureRun({ stats: 'meow' }, [{ stats: 'meow' }]);
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberDungeonsTreasureRun);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberDungeonsTreasureRun>();
  expect(data.runId).toBeDefined();
  expectTypeOf(data.runId).toEqualTypeOf<string>();
  expect(data.completionTimestamp).toBeDefined();
  expectTypeOf(data.completionTimestamp).toEqualTypeOf<number>();
  expect(data.completionDate).toBeDefined();
  expectTypeOf(data.completionDate).toEqualTypeOf<Date>();
  expect(data.type).toBeDefined();
  expectTypeOf(data.type).toEqualTypeOf<DungeonGamemode>();
  expect(data.dungeonTier).toBeDefined();
  expectTypeOf(data.dungeonTier).toEqualTypeOf<number>();
  expect(data.participants).toBeDefined();
  expectTypeOf(data.participants).toEqualTypeOf<
    { playerUUID: UUID; displayName: UserInput; classMilestone: number }[]
  >();
  expect(data.chests).toBeDefined();
  expectTypeOf(data.chests).toEqualTypeOf<SkyblockMemberDungeonsTreasuresChest[]>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => string>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toEqual(data.runId);
  expectTypeOf(data.toString()).toEqualTypeOf<string>();
});
