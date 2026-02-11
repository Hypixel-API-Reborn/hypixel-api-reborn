import SkyBlockElectionCandidatePerk from './SkyBlockElectionCandidatePerk.js';
import type { SkyBlockCandidateKeyBenefit, SkyBlockMayor } from '../../../Types/SkyBlock.js';
declare class SkyBlockElectionCandidate {
    name: SkyBlockMayor | 'UNKNOWN';
    keyBenefit: SkyBlockCandidateKeyBenefit | 'UNKNOWN';
    perks: SkyBlockElectionCandidatePerk[];
    votesReceived: number;
    constructor(data: Record<string, any>);
    toString(): SkyBlockMayor | 'UNKNOWN';
}
export default SkyBlockElectionCandidate;
//# sourceMappingURL=SkyBlockElectionCandidate.d.ts.map