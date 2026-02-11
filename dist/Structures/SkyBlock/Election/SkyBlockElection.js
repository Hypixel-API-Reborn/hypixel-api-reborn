import SkyBlockElectionCandidate from './SkyBlockElectionCandidate.js';
class SkyBlockElection {
    year;
    candidates;
    constructor(data) {
        this.year = data?.year || 0;
        this.candidates = (data?.candidates || [])
            .map((candidate) => new SkyBlockElectionCandidate(candidate))
            .sort((a, b) => a.votesReceived - b.votesReceived);
    }
    toString() {
        return this.year;
    }
}
export default SkyBlockElection;
//# sourceMappingURL=SkyBlockElection.js.map