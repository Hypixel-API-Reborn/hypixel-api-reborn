import SkyBlockMemberMining from './SkyBlockMemberMining.js';
import SkyBlockMemberMiningCrystal from './SkyBlockMemberMiningCrystal.js';
import SkyBlockMemberMiningHotm from './SkyBlockMemberMiningHotm.js';
import SkyBlockMemberMiningPowders from './SkyBlockMemberMiningPowders.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { MiningCrystal, MiningPickaxeAbility, MiningSkyMallEffect } from '../../../../Types/SkyBlock.js';

test('SkyBlockMemberMining', () => {
  const data = new SkyBlockMemberMining({ stats: 'meow' });
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
