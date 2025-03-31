import SkyblockMemberAccessoryBag from './SkyblockMemberAccessoryBag.js';
import SkyblockMemberAccessoryBagTuning from './SkyblockMemberAccessoryBagTuning.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { SkyblockMemberPower } from '../../../../Types/Skyblock.js';

test('SkyblockMemberAccessoryBag', () => {
  const data = new SkyblockMemberAccessoryBag({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberAccessoryBag);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberAccessoryBag>();
  expect(data.selectedPower).toBeDefined();
  expectTypeOf(data.selectedPower).toEqualTypeOf<SkyblockMemberPower | null>();
  expect(data.unlockedPowers).toBeDefined();
  expectTypeOf(data.unlockedPowers).toEqualTypeOf<SkyblockMemberPower[]>();
  expect(data.bagUpgradesPurchased).toBeDefined();
  expectTypeOf(data.bagUpgradesPurchased).toEqualTypeOf<number>();
  expect(data.highestMagicalPower).toBeDefined();
  expectTypeOf(data.highestMagicalPower).toEqualTypeOf<number>();
  expect(data.tuning).toBeDefined();
  expectTypeOf(data.tuning).toEqualTypeOf<SkyblockMemberAccessoryBagTuning>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => SkyblockMemberPower | null>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toEqual(data.selectedPower);
  expectTypeOf(data.toString()).toEqualTypeOf<SkyblockMemberPower | null>();
});
