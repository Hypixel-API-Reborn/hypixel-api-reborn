import SkyBlockMemberCrimsonIsleAbiphone from './SkyBlockMemberCrimsonIsleAbiphone.js';
import SkyBlockMemberCrimsonIsleDojo from './SkyBlockMemberCrimsonIsleDojo.js';
import SkyBlockMemberCrimsonIsleKuudra from './SkyBlockMemberCrimsonIsleKuudra.js';
import SkyBlockMemberCrimsonIsleMatriarch from './SkyBlockMemberCrimsonIsleMatriarch.js';
import SkyBlockMemberCrimsonIsleTrophyFish from './SkyBlockMemberCrimsonIsleTrophyFish/SkyBlockMemberCrimsonIsleTrophyFish.js';
import type { CrimsonIsleBoss, CrimsonIsleFaction } from '../../../../Types/SkyBlock.js';
declare class SkyBlockMemberCrimsonIsle {
    dojo: SkyBlockMemberCrimsonIsleDojo;
    kuudra: SkyBlockMemberCrimsonIsleKuudra;
    matriarch: SkyBlockMemberCrimsonIsleMatriarch;
    abiphone: SkyBlockMemberCrimsonIsleAbiphone;
    faction: CrimsonIsleFaction | 'UNKNOWN';
    magesReputation: number;
    barbariansReputation: number;
    lastMiniBossesKilled: CrimsonIsleBoss[];
    trophyFishing: SkyBlockMemberCrimsonIsleTrophyFish;
    constructor(data: Record<string, any>, trophyFish: Record<string, any>);
    toString(): CrimsonIsleFaction | 'UNKNOWN';
}
export default SkyBlockMemberCrimsonIsle;
//# sourceMappingURL=SkyBlockMemberCrimsonIsle.d.ts.map