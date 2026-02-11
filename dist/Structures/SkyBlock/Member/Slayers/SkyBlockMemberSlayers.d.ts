import SkyBlockMemberSlayer from './SkyBlockMemberSlayer.js';
import SkyBlockMemberSlayersQuest from './SkyBlockMemberSlayersQuest.js';
declare class SkyBlockMemberSlayers {
    activeSlayer: SkyBlockMemberSlayersQuest | null;
    zombie: SkyBlockMemberSlayer;
    spider: SkyBlockMemberSlayer;
    wolf: SkyBlockMemberSlayer;
    enderman: SkyBlockMemberSlayer;
    blaze: SkyBlockMemberSlayer;
    vampire: SkyBlockMemberSlayer;
    constructor(data: Record<string, any>);
}
export default SkyBlockMemberSlayers;
//# sourceMappingURL=SkyBlockMemberSlayers.d.ts.map