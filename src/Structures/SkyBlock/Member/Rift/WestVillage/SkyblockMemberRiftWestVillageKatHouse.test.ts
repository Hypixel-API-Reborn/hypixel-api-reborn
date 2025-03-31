import SkyblockMemberRiftWestVillageKatHouse from './SkyblockMemberRiftWestVillageKatHouse.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockMemberRiftWestVillageKatHouse', () => {
  const data = new SkyblockMemberRiftWestVillageKatHouse({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberRiftWestVillageKatHouse);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberRiftWestVillageKatHouse>();
  expect(data.binCollectedSilverfish).toBeDefined();
  expectTypeOf(data.binCollectedSilverfish).toEqualTypeOf<number>();
  expect(data.binCollectedSpider).toBeDefined();
  expectTypeOf(data.binCollectedSpider).toEqualTypeOf<number>();
  expect(data.binCollectedMosquito).toBeDefined();
  expectTypeOf(data.binCollectedMosquito).toEqualTypeOf<number>();
});
