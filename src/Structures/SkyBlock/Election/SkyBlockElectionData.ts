import SkyBlockElection from './SkyBlockElection.js';

class SkyBlockElectionData {
  lastUpdatedTimestamp: number;
  lastUpdatedAt: Date;
  lastElectionResults: SkyBlockElection;
  currentElection: SkyBlockElection | null;
  constructor(data: Record<string, any>) {
    this.lastUpdatedTimestamp = data?.lastUpdated || 0;
    this.lastUpdatedAt = new Date(this.lastUpdatedTimestamp);
    this.lastElectionResults = new SkyBlockElection(data?.mayor?.election || {});
    this.currentElection = data?.current ? new SkyBlockElection(data?.current || {}) : null;
  }
}

export default SkyBlockElectionData;
