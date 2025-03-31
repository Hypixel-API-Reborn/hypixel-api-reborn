import SkyblockMemberDungeonsClasses from './SkyblockMemberDungeonsClasses.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { DungeonClass, SkillLevelData } from '../../../../Types/Skyblock.js';

test('SkyblockMemberDungeonsClasses', () => {
  const data = new SkyblockMemberDungeonsClasses({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberDungeonsClasses);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberDungeonsClasses>();
  expect(data.selected).toBeDefined();
  expectTypeOf(data.selected).toEqualTypeOf<DungeonClass | 'UNKNOWN'>();
  expect(data.healer).toBeDefined();
  expectTypeOf(data.healer).toEqualTypeOf<SkillLevelData>();
  expect(data.berserk).toBeDefined();
  expectTypeOf(data.berserk).toEqualTypeOf<SkillLevelData>();
  expect(data.mage).toBeDefined();
  expectTypeOf(data.mage).toEqualTypeOf<SkillLevelData>();
  expect(data.archer).toBeDefined();
  expectTypeOf(data.archer).toEqualTypeOf<SkillLevelData>();
  expect(data.tank).toBeDefined();
  expectTypeOf(data.tank).toEqualTypeOf<SkillLevelData>();
  expect(data.average).toBeDefined();
  expectTypeOf(data.average).toEqualTypeOf<number>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => DungeonClass | 'UNKNOWN'>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toEqual(data.selected);
  expectTypeOf(data.toString()).toEqualTypeOf<DungeonClass | 'UNKNOWN'>();
});
