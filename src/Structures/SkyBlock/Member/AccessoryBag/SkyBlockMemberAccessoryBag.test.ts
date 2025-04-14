import SkyBlockMemberAccessoryBag from './SkyBlockMemberAccessoryBag.js';
import SkyBlockMemberAccessoryBagTuning from './SkyBlockMemberAccessoryBagTuning.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { SkyBlockMemberPower } from '../../../../Types/SkyBlock.js';

test('SkyBlockMemberAccessoryBag', () => {
  const data = new SkyBlockMemberAccessoryBag({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberAccessoryBag);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberAccessoryBag>();
  expect(data.selectedPower).toBeDefined();
  expectTypeOf(data.selectedPower).toEqualTypeOf<SkyBlockMemberPower | null>();
  expect(data.unlockedPowers).toBeDefined();
  expectTypeOf(data.unlockedPowers).toEqualTypeOf<SkyBlockMemberPower[]>();
  expect(data.bagUpgradesPurchased).toBeDefined();
  expectTypeOf(data.bagUpgradesPurchased).toEqualTypeOf<number>();
  expect(data.highestMagicalPower).toBeDefined();
  expectTypeOf(data.highestMagicalPower).toEqualTypeOf<number>();
  expect(data.tuning).toBeDefined();
  expectTypeOf(data.tuning).toEqualTypeOf<SkyBlockMemberAccessoryBagTuning>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => SkyBlockMemberPower | null>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toEqual(data.selectedPower);
  expectTypeOf(data.toString()).toEqualTypeOf<SkyBlockMemberPower | null>();
});
