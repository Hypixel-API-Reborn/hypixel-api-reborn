import SkyBlockMemberRiftVillagePlazaBarry from './SkyBlockMemberRiftVillagePlazaBarry.js';
import SkyBlockMemberRiftVillagePlazaCowboy from './SkyBlockMemberRiftVillagePlazaCowboy.js';
import SkyBlockMemberRiftVillagePlazaMurder from './SkyBlockMemberRiftVillagePlazaMurder.js';

class SkyBlockMemberRiftVillagePlaza {
  murder: SkyBlockMemberRiftVillagePlazaMurder;
  barry: SkyBlockMemberRiftVillagePlazaBarry;
  cowboy: SkyBlockMemberRiftVillagePlazaCowboy;
  barterBank: Record<string, any>;
  lonely: Record<string, any>;
  seraphine: Record<string, any>;
  gotScammed: boolean;
  constructor(data: Record<string, any>) {
    this.murder = new SkyBlockMemberRiftVillagePlazaMurder(data?.murder || {});
    this.barry = new SkyBlockMemberRiftVillagePlazaBarry(data?.barry_center || {});
    this.cowboy = new SkyBlockMemberRiftVillagePlazaCowboy(data?.cowboy || {});
    this.barterBank = data?.barter_bank || {};
    this.lonely = data?.lonely || {};
    this.seraphine = data?.seraphine || {};
    this.gotScammed = data?.got_scammed || false;
  }
}

export default SkyBlockMemberRiftVillagePlaza;
