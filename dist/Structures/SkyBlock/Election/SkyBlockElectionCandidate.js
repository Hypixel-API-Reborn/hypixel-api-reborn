import SkyBlockElectionCandidatePerk from './SkyBlockElectionCandidatePerk.js';
class SkyBlockElectionCandidate {
    name;
    keyBenefit;
    perks;
    votesReceived;
    constructor(data) {
        this.name = data?.name || 'UNKNOWN';
        this.keyBenefit = data?.key || 'UNKNOWN';
        this.perks = (data?.perks || []).map((perk) => new SkyBlockElectionCandidatePerk(perk));
        this.votesReceived = data?.votes || 0;
    }
    toString() {
        return this.name;
    }
}
export default SkyBlockElectionCandidate;
//# sourceMappingURL=SkyBlockElectionCandidate.js.map