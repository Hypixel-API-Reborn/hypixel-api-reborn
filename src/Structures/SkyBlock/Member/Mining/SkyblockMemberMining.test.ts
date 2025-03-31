import SkyblockMemberMining from './SkyblockMemberMining.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyblockMemberMiningHotm from './SkyblockMemberMiningHotm.js';
import type SkyblockMemberMiningPowders from './SkyblockMemberMiningPowders.js';
import type SkyblockMemeberMiningCrystal from './SkyblockMemberMiningCrystal.js';
import type { MiningCrystal, MiningPickaxeAbility, MiningSkyMallEffect } from '../../../../Types/Skyblock.js';

test('SkyblockMemberMining', () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = new SkyblockMemberMining();
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberMining);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberMining>();
  expect(data.powder).toBeDefined();
  expectTypeOf(data.powder).toEqualTypeOf<SkyblockMemberMiningPowders>();
  expect(data.crystals).toBeDefined();
  expectTypeOf(data.crystals).toEqualTypeOf<Record<MiningCrystal, SkyblockMemeberMiningCrystal>>();
  expect(data.hotm).toBeDefined();
  expectTypeOf(data.hotm).toEqualTypeOf<SkyblockMemberMiningHotm>();
  expect(data.pickaxeAbility).toBeDefined();
  expectTypeOf(data.pickaxeAbility).toEqualTypeOf<MiningPickaxeAbility | 'UNKNOWN'>();
  expect(data.dailyEffect).toBeDefined();
  expectTypeOf(data.dailyEffect).toEqualTypeOf<MiningSkyMallEffect | 'UNKNOWN'>();
});
