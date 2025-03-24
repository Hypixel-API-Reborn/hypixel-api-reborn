import SkyblockMemberRiftVillagePlazaBarry from './SkyblockMemberRiftVillagePlazaBarry.js';
import SkyblockMemberRiftVillagePlazaCowboy from './SkyblockMemberRiftVillagePlazaCowboy.js';
import SkyblockMemberRiftVillagePlazaMurder from './SkyblockMemberRiftVillagePlazaMurder.js';

class SkyblockMemberRiftVillagePlaza {
  murder: SkyblockMemberRiftVillagePlazaMurder;
  barry: SkyblockMemberRiftVillagePlazaBarry;
  cowboy: SkyblockMemberRiftVillagePlazaCowboy;
  barterBank: Record<string, any>;
  lonely: Record<string, any>;
  seraphine: Record<string, any>;
  gotScammed: boolean;
  constructor(data: Record<string, any>) {
    this.murder = new SkyblockMemberRiftVillagePlazaMurder(data?.murder || {});
    this.barry = new SkyblockMemberRiftVillagePlazaBarry(data?.barry_center || {});
    this.cowboy = new SkyblockMemberRiftVillagePlazaCowboy(data?.cowboy || {});
    this.barterBank = data?.barter_bank || {};
    this.lonely = data?.lonely || {};
    this.seraphine = data?.seraphine || {};
    this.gotScammed = data?.got_scammed || false;
  }
}

export default SkyblockMemberRiftVillagePlaza;
