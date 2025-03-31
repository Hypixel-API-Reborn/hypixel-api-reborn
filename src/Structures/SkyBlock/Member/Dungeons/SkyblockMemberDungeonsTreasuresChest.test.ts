import SkyblockMemberDungeonsTreasuresChest from './SkyblockMemberDungeonsTreasuresChest.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { DungeonsTreasureType } from '../../../../Types/Skyblock.js';

test('SkyblockMemberDungeonsTreasuresChest', () => {
  const data = new SkyblockMemberDungeonsTreasuresChest({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberDungeonsTreasuresChest);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberDungeonsTreasuresChest>();
  expect(data.runId).toBeDefined();
  expectTypeOf(data.runId).toEqualTypeOf<string>();
  expect(data.chestId).toBeDefined();
  expectTypeOf(data.chestId).toEqualTypeOf<string>();
  expect(data.chestType).toBeDefined();
  expectTypeOf(data.chestType).toEqualTypeOf<DungeonsTreasureType>();
  expect(data.rewards).toBeDefined();
  expectTypeOf(data.rewards).toEqualTypeOf<string[]>();
  expect(data.rolledRNGMeter).toBeDefined();
  expectTypeOf(data.rolledRNGMeter).toEqualTypeOf<boolean>();
  expect(data.quality).toBeDefined();
  expectTypeOf(data.quality).toEqualTypeOf<number>();
  expect(data.shinyEligible).toBeDefined();
  expectTypeOf(data.shinyEligible).toEqualTypeOf<boolean>();
  expect(data.paid).toBeDefined();
  expectTypeOf(data.paid).toEqualTypeOf<boolean>();
  expect(data.rerolls).toBeDefined();
  expectTypeOf(data.rerolls).toEqualTypeOf<boolean>();
});
