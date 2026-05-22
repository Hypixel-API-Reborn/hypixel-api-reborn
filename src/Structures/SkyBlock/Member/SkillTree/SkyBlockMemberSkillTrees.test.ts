import SkyBlockMemberSkillTree from './SkyBlockMemberSkillTree.js';
import SkyBlockMemberSkillTrees from './SkyBlockMemberSkillTrees.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { MiningPickaxeAbility } from '../../../../Types/SkyBlock.js';

test('SkyBlockMemberSkillTrees', () => {
  const data = new SkyBlockMemberSkillTrees({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberSkillTrees);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberSkillTrees>();
  expect(data.mining).toBeDefined();
  expectTypeOf(data.mining).toEqualTypeOf<SkyBlockMemberSkillTree<MiningPickaxeAbility>>();
  expect(data.foraging).toBeDefined();
  expectTypeOf(data.foraging).toEqualTypeOf<SkyBlockMemberSkillTree<MiningPickaxeAbility>>();
  expect(data.refundAbilityFree).toBeDefined();
  expectTypeOf(data.refundAbilityFree).toEqualTypeOf<boolean>();
});
