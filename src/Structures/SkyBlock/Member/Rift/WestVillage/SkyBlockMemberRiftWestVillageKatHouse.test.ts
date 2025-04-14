import SkyBlockMemberRiftWestVillageKatHouse from './SkyBlockMemberRiftWestVillageKatHouse.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberRiftWestVillageKatHouse', () => {
  const data = new SkyBlockMemberRiftWestVillageKatHouse({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberRiftWestVillageKatHouse);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberRiftWestVillageKatHouse>();
  expect(data.binCollectedSilverfish).toBeDefined();
  expectTypeOf(data.binCollectedSilverfish).toEqualTypeOf<number>();
  expect(data.binCollectedSpider).toBeDefined();
  expectTypeOf(data.binCollectedSpider).toEqualTypeOf<number>();
  expect(data.binCollectedMosquito).toBeDefined();
  expectTypeOf(data.binCollectedMosquito).toEqualTypeOf<number>();
});
