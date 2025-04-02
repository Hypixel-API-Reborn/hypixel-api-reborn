import SkyBlockMemberRiftWestVillageCrazyKloon from './SkyBlockMemberRiftWestVillageCrazyKloon.js';
import SkyBlockMemberRiftWestVillageGlyphs from './SkyBlockMemberRiftWestVillageGlyphs.js';
import SkyBlockMemberRiftWestVillageKatHouse from './SkyBlockMemberRiftWestVillageKatHouse.js';
import SkyBlockMemberRiftWestVillageMirrorverse from './SkyBlockMemberRiftWestVillageMirrorverse.js';

class SkyBlockMemberRiftWestVillage {
  crazyKloon: SkyBlockMemberRiftWestVillageCrazyKloon;
  mirrorverse: SkyBlockMemberRiftWestVillageMirrorverse;
  katHouse: SkyBlockMemberRiftWestVillageKatHouse;
  glyphs: SkyBlockMemberRiftWestVillageGlyphs;
  constructor(data: Record<string, any>) {
    this.crazyKloon = new SkyBlockMemberRiftWestVillageCrazyKloon(data?.crazy_kloon || {});
    this.mirrorverse = new SkyBlockMemberRiftWestVillageMirrorverse(data?.mirrorverse || {});
    this.katHouse = new SkyBlockMemberRiftWestVillageKatHouse(data?.kat_house || {});
    this.glyphs = new SkyBlockMemberRiftWestVillageGlyphs(data?.glyphs || {});
  }
}

export default SkyBlockMemberRiftWestVillage;
