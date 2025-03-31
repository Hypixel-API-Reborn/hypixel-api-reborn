import SkyblockMemberRiftWestVillage from './SkyblockMemberRiftWestVillage.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyblockMemberRiftWestVillageCrazyKloon from './SkyblockMemberRiftWestVillageCrazyKloon.js';
import type SkyblockMemberRiftWestVillageGlyphs from './SkyblockMemberRiftWestVillageGlyphs.js';
import type SkyblockMemberRiftWestVillageKatHouse from './SkyblockMemberRiftWestVillageKatHouse.js';
import type SkyblockMemberRiftWestVillageMirrorverse from './SkyblockMemberRiftWestVillageMirrorverse.js';

test('SkyblockMemberRiftWestVillage', () => {
  const data = new SkyblockMemberRiftWestVillage({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberRiftWestVillage);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberRiftWestVillage>();
  expect(data.crazyKloon).toBeDefined();
  expectTypeOf(data.crazyKloon).toEqualTypeOf<SkyblockMemberRiftWestVillageCrazyKloon>();
  expect(data.mirrorverse).toBeDefined();
  expectTypeOf(data.mirrorverse).toEqualTypeOf<SkyblockMemberRiftWestVillageMirrorverse>();
  expect(data.katHouse).toBeDefined();
  expectTypeOf(data.katHouse).toEqualTypeOf<SkyblockMemberRiftWestVillageKatHouse>();
  expect(data.glyphs).toBeDefined();
  expectTypeOf(data.glyphs).toEqualTypeOf<SkyblockMemberRiftWestVillageGlyphs>();
});
