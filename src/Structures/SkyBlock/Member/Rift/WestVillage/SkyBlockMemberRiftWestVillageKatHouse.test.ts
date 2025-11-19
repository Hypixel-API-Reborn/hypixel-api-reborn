import SkyBlockMemberRiftWestVillageKatHouse from './SkyBlockMemberRiftWestVillageKatHouse.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberRiftWestVillageKatHouse', () => {
  const data = new SkyBlockMemberRiftWestVillageKatHouse({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberRiftWestVillageKatHouse);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberRiftWestVillageKatHouse>();
  expect(data.binCollectedSilverfish).toBeDefined();
  expect(data.binCollectedSilverfish).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.binCollectedSilverfish).toEqualTypeOf<number>();
  expect(data.binCollectedSpider).toBeDefined();
  expect(data.binCollectedSpider).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.binCollectedSpider).toEqualTypeOf<number>();
  expect(data.binCollectedMosquito).toBeDefined();
  expect(data.binCollectedMosquito).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.binCollectedMosquito).toEqualTypeOf<number>();
});
