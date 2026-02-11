import SkyBlockMemberRiftVillagePlazaBarry from './SkyBlockMemberRiftVillagePlazaBarry.js';
import SkyBlockMemberRiftVillagePlazaCowboy from './SkyBlockMemberRiftVillagePlazaCowboy.js';
import SkyBlockMemberRiftVillagePlazaMurder from './SkyBlockMemberRiftVillagePlazaMurder.js';
class SkyBlockMemberRiftVillagePlaza {
    murder;
    barry;
    cowboy;
    barterBank;
    lonely;
    seraphine;
    gotScammed;
    constructor(data) {
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
//# sourceMappingURL=SkyBlockMemberRiftVillagePlaza.js.map