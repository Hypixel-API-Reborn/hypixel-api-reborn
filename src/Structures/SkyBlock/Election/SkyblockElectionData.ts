import SkyblockElection from './SkyblockElection.js';

class SkyblockElectionData {
  lastUpdatedTimestamp: number;
  lastUpdatedAt: Date;
  lastElectionResults: SkyblockElection;
  currentElection: SkyblockElection | null;
  constructor(data: Record<string, any>) {
    this.lastUpdatedTimestamp = data?.lastUpdated || 0;
    this.lastUpdatedAt = new Date(this.lastUpdatedTimestamp);
    this.lastElectionResults = new SkyblockElection(data?.mayor?.election || {});
    this.currentElection = data?.current ? new SkyblockElection(data?.current || {}) : null;
  }
}

export default SkyblockElectionData;
