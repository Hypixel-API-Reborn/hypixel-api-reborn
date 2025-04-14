import SkyBlockMemberRiftWestVillage from './SkyBlockMemberRiftWestVillage.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyBlockMemberRiftWestVillageCrazyKloon from './SkyBlockMemberRiftWestVillageCrazyKloon.js';
import type SkyBlockMemberRiftWestVillageGlyphs from './SkyBlockMemberRiftWestVillageGlyphs.js';
import type SkyBlockMemberRiftWestVillageKatHouse from './SkyBlockMemberRiftWestVillageKatHouse.js';
import type SkyBlockMemberRiftWestVillageMirrorverse from './SkyBlockMemberRiftWestVillageMirrorverse.js';

test('SkyBlockMemberRiftWestVillage', () => {
  const data = new SkyBlockMemberRiftWestVillage({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberRiftWestVillage);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberRiftWestVillage>();
  expect(data.crazyKloon).toBeDefined();
  expectTypeOf(data.crazyKloon).toEqualTypeOf<SkyBlockMemberRiftWestVillageCrazyKloon>();
  expect(data.mirrorverse).toBeDefined();
  expectTypeOf(data.mirrorverse).toEqualTypeOf<SkyBlockMemberRiftWestVillageMirrorverse>();
  expect(data.katHouse).toBeDefined();
  expectTypeOf(data.katHouse).toEqualTypeOf<SkyBlockMemberRiftWestVillageKatHouse>();
  expect(data.glyphs).toBeDefined();
  expectTypeOf(data.glyphs).toEqualTypeOf<SkyBlockMemberRiftWestVillageGlyphs>();
});
