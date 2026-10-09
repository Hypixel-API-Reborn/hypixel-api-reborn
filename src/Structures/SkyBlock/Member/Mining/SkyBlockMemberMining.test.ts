import SkyBlockMemberMining from './SkyBlockMemberMining.ts';
import SkyBlockMemberMiningCrystal from './SkyBlockMemberMiningCrystal.ts';
import SkyBlockMemberMiningHotm from './SkyBlockMemberMiningHotm.ts';
import SkyBlockMemberMiningPowders from './SkyBlockMemberMiningPowders.ts';
import SkyBlockMemberSkillTrees from '../SkillTree/SkyBlockMemberSkillTrees.ts';
import { expect, expectTypeOf, test } from 'vitest';
import type { MiningCrystal, MiningPickaxeAbility, MiningSkyMallEffect } from '../../../../Types/index.ts';

test('SkyBlockMemberMining', () => {
  const data = new SkyBlockMemberMining({ stats: 'meow' }, new SkyBlockMemberSkillTrees({ stats: 'meow' }));
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberMining);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberMining>();
  expect(data.powder).toBeDefined();
  expect(data.powder).toBeInstanceOf(SkyBlockMemberMiningPowders);
  expectTypeOf(data.powder).toEqualTypeOf<SkyBlockMemberMiningPowders>();
  expect(data.crystals).toBeDefined();
  expectTypeOf(data.crystals).toEqualTypeOf<Record<MiningCrystal, SkyBlockMemberMiningCrystal>>();
  expect(data.hotm).toBeDefined();
  expect(data.hotm).toBeInstanceOf(SkyBlockMemberMiningHotm);
  expectTypeOf(data.hotm).toEqualTypeOf<SkyBlockMemberMiningHotm>();
  expect(data.pickaxeAbility).toBeDefined();
  expectTypeOf(data.pickaxeAbility).toEqualTypeOf<MiningPickaxeAbility | 'UNKNOWN'>();
  expect(data.dailyEffect).toBeDefined();
  expectTypeOf(data.dailyEffect).toEqualTypeOf<MiningSkyMallEffect | 'UNKNOWN'>();
});
