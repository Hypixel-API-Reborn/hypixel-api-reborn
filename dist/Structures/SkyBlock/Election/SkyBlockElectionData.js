import SkyBlockElection from './SkyBlockElection.js';
class SkyBlockElectionData {
    lastUpdatedTimestamp;
    lastUpdatedAt;
    lastElectionResults;
    currentElection;
    constructor(data) {
        this.lastUpdatedTimestamp = data?.lastUpdated || 0;
        this.lastUpdatedAt = new Date(this.lastUpdatedTimestamp);
        this.lastElectionResults = new SkyBlockElection(data?.mayor?.election || {});
        this.currentElection = data?.current ? new SkyBlockElection(data?.current || {}) : null;
    }
    isRaw() {
        return false;
    }
}
export default SkyBlockElectionData;
//# sourceMappingURL=SkyBlockElectionData.js.map