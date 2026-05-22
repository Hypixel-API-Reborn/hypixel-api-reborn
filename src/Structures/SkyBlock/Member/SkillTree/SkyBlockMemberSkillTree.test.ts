import SkyBlockMemberSkillTree from './SkyBlockMemberSkillTree.js';
import {
  MiningPickaxeAbility,
  type SkillLevelData,
  type SkyBlockMemberSkillTreeName
} from '../../../../Types/SkyBlock.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberSkillTree', () => {
  const data = new SkyBlockMemberSkillTree<MiningPickaxeAbility>({ stats: 'meow' }, 'mining', 'mountain');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberSkillTree);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberSkillTree<MiningPickaxeAbility>>();
  expect(data.tree).toBeDefined();
  expectTypeOf(data.tree).toEqualTypeOf<SkyBlockMemberSkillTreeName>();
  expect(data.nodes).toBeDefined();
  expectTypeOf(data.nodes).toEqualTypeOf<Record<string, number | boolean>>();
  expect(data.selectedAbility).toBeDefined();
  expectTypeOf(data.selectedAbility).toEqualTypeOf<MiningPickaxeAbility | 'UNKNOWN'>();
  expect(data.tokensSpent).toBeDefined();
  expect(data.tokensSpent).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.tokensSpent).toEqualTypeOf<number>();
  expect(data.level).toBeDefined();
  expectTypeOf(data.level).toEqualTypeOf<SkillLevelData>();
  expect(data.lastResetTimeStamp).toBeDefined();
  expect(data.lastResetTimeStamp).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.lastResetTimeStamp).toEqualTypeOf<number>();
  expect(data.lastReset).toBeDefined();
  expect(data.lastReset).toBeInstanceOf(Date);
  expectTypeOf(data.lastReset).toEqualTypeOf<Date>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => number>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toBe(data.level.level);
  expectTypeOf(data.toString()).toEqualTypeOf<number>();
});
