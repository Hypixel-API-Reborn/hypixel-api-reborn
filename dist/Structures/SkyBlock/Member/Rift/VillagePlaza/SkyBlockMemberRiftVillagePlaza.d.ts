import SkyBlockMemberRiftVillagePlazaBarry from './SkyBlockMemberRiftVillagePlazaBarry.js';
import SkyBlockMemberRiftVillagePlazaCowboy from './SkyBlockMemberRiftVillagePlazaCowboy.js';
import SkyBlockMemberRiftVillagePlazaMurder from './SkyBlockMemberRiftVillagePlazaMurder.js';
declare class SkyBlockMemberRiftVillagePlaza {
    murder: SkyBlockMemberRiftVillagePlazaMurder;
    barry: SkyBlockMemberRiftVillagePlazaBarry;
    cowboy: SkyBlockMemberRiftVillagePlazaCowboy;
    barterBank: Record<string, any>;
    lonely: Record<string, any>;
    seraphine: Record<string, any>;
    gotScammed: boolean;
    constructor(data: Record<string, any>);
}
export default SkyBlockMemberRiftVillagePlaza;
//# sourceMappingURL=SkyBlockMemberRiftVillagePlaza.d.ts.map