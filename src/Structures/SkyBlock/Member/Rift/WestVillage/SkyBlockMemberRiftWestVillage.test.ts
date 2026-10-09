import SkyBlockMemberRiftWestVillage from './SkyBlockMemberRiftWestVillage.ts';
import SkyBlockMemberRiftWestVillageCrazyKloon from './SkyBlockMemberRiftWestVillageCrazyKloon.ts';
import SkyBlockMemberRiftWestVillageGlyphs from './SkyBlockMemberRiftWestVillageGlyphs.ts';
import SkyBlockMemberRiftWestVillageKatHouse from './SkyBlockMemberRiftWestVillageKatHouse.ts';
import SkyBlockMemberRiftWestVillageMirrorverse from './SkyBlockMemberRiftWestVillageMirrorverse.ts';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberRiftWestVillage', () => {
  const data = new SkyBlockMemberRiftWestVillage({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberRiftWestVillage);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberRiftWestVillage>();
  expect(data.crazyKloon).toBeDefined();
  expect(data.crazyKloon).toBeInstanceOf(SkyBlockMemberRiftWestVillageCrazyKloon);
  expectTypeOf(data.crazyKloon).toEqualTypeOf<SkyBlockMemberRiftWestVillageCrazyKloon>();
  expect(data.mirrorverse).toBeDefined();
  expect(data.mirrorverse).toBeInstanceOf(SkyBlockMemberRiftWestVillageMirrorverse);
  expectTypeOf(data.mirrorverse).toEqualTypeOf<SkyBlockMemberRiftWestVillageMirrorverse>();
  expect(data.katHouse).toBeDefined();
  expect(data.katHouse).toBeInstanceOf(SkyBlockMemberRiftWestVillageKatHouse);
  expectTypeOf(data.katHouse).toEqualTypeOf<SkyBlockMemberRiftWestVillageKatHouse>();
  expect(data.glyphs).toBeDefined();
  expect(data.glyphs).toBeInstanceOf(SkyBlockMemberRiftWestVillageGlyphs);
  expectTypeOf(data.glyphs).toEqualTypeOf<SkyBlockMemberRiftWestVillageGlyphs>();
});
