import SkyblockMemberRiftWestVillageCrazyKloon from './SkyblockMemberRiftWestVillageCrazyKloon.js';
import SkyblockMemberRiftWestVillageGlyphs from './SkyblockMemberRiftWestVillageGlyphs.js';
import SkyblockMemberRiftWestVillageKatHouse from './SkyblockMemberRiftWestVillageKatHouse.js';
import SkyblockMemberRiftWestVillageMirrorverse from './SkyblockMemberRiftWestVillageMirrorverse.js';

class SkyblockMemberRiftWestVillage {
  crazyKloon: SkyblockMemberRiftWestVillageCrazyKloon;
  mirrorverse: SkyblockMemberRiftWestVillageMirrorverse;
  katHouse: SkyblockMemberRiftWestVillageKatHouse;
  glyphs: SkyblockMemberRiftWestVillageGlyphs;
  constructor(data: Record<string, any>) {
    this.crazyKloon = new SkyblockMemberRiftWestVillageCrazyKloon(data?.crazy_kloon || {});
    this.mirrorverse = new SkyblockMemberRiftWestVillageMirrorverse(data?.mirrorverse || {});
    this.katHouse = new SkyblockMemberRiftWestVillageKatHouse(data?.kat_house || {});
    this.glyphs = new SkyblockMemberRiftWestVillageGlyphs(data?.glyphs || {});
  }
}

export default SkyblockMemberRiftWestVillage;
