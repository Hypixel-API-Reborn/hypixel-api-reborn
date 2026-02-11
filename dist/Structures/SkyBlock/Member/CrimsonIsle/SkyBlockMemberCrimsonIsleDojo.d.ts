import SkyBlockMemberCrimsonIsleDojoMinigame from './SkyBlockMemberCrimsonIsleDojoMinigame.js';
import type { CrimsonIsleBelt } from '../../../../Types/SkyBlock.js';
declare class SkyBlockMemberCrimsonIsleDojo {
    force: SkyBlockMemberCrimsonIsleDojoMinigame;
    stamina: SkyBlockMemberCrimsonIsleDojoMinigame;
    mastery: SkyBlockMemberCrimsonIsleDojoMinigame;
    discipline: SkyBlockMemberCrimsonIsleDojoMinigame;
    swiftness: SkyBlockMemberCrimsonIsleDojoMinigame;
    tenacity: SkyBlockMemberCrimsonIsleDojoMinigame;
    control: SkyBlockMemberCrimsonIsleDojoMinigame;
    belt: CrimsonIsleBelt;
    constructor(data: Record<string, any>);
    toString(): CrimsonIsleBelt;
    private getBelt;
}
export default SkyBlockMemberCrimsonIsleDojo;
//# sourceMappingURL=SkyBlockMemberCrimsonIsleDojo.d.ts.map