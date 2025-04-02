import SkyBlockMemberMining from './SkyBlockMemberMining.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyBlockMemberMiningHotm from './SkyBlockMemberMiningHotm.js';
import type SkyBlockMemberMiningPowders from './SkyBlockMemberMiningPowders.js';
import type SkyBlockMemeberMiningCrystal from './SkyBlockMemberMiningCrystal.js';
import type { MiningCrystal, MiningPickaxeAbility, MiningSkyMallEffect } from '../../../../Types/SkyBlock.js';

test('SkyBlockMemberMining', () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = new SkyBlockMemberMining();
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberMining);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberMining>();
  expect(data.powder).toBeDefined();
  expectTypeOf(data.powder).toEqualTypeOf<SkyBlockMemberMiningPowders>();
  expect(data.crystals).toBeDefined();
  expectTypeOf(data.crystals).toEqualTypeOf<Record<MiningCrystal, SkyBlockMemeberMiningCrystal>>();
  expect(data.hotm).toBeDefined();
  expectTypeOf(data.hotm).toEqualTypeOf<SkyBlockMemberMiningHotm>();
  expect(data.pickaxeAbility).toBeDefined();
  expectTypeOf(data.pickaxeAbility).toEqualTypeOf<MiningPickaxeAbility | 'UNKNOWN'>();
  expect(data.dailyEffect).toBeDefined();
  expectTypeOf(data.dailyEffect).toEqualTypeOf<MiningSkyMallEffect | 'UNKNOWN'>();
});
