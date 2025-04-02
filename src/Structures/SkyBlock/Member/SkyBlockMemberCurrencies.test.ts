import SkyBlockMemberCurrencies from './SkyBlockMemberCurrencies.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberCurrencies', () => {
  const data = new SkyBlockMemberCurrencies({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberCurrencies);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberCurrencies>();
  expect(data.purse).toBeDefined();
  expectTypeOf(data.purse).toEqualTypeOf<number>();
  expect(data.motesPurse).toBeDefined();
  expectTypeOf(data.motesPurse).toEqualTypeOf<number>();
  expect(data.witherEssence).toBeDefined();
  expectTypeOf(data.witherEssence).toEqualTypeOf<number>();
  expect(data.dragonEssence).toBeDefined();
  expectTypeOf(data.dragonEssence).toEqualTypeOf<number>();
  expect(data.spiderEssence).toBeDefined();
  expectTypeOf(data.spiderEssence).toEqualTypeOf<number>();
  expect(data.undeadEssence).toBeDefined();
  expectTypeOf(data.undeadEssence).toEqualTypeOf<number>();
  expect(data.diamondEssence).toBeDefined();
  expectTypeOf(data.diamondEssence).toEqualTypeOf<number>();
  expect(data.goldEssence).toBeDefined();
  expectTypeOf(data.goldEssence).toEqualTypeOf<number>();
  expect(data.iceEssence).toBeDefined();
  expectTypeOf(data.iceEssence).toEqualTypeOf<number>();
  expect(data.crimsonEssence).toBeDefined();
  expectTypeOf(data.crimsonEssence).toEqualTypeOf<number>();
});
