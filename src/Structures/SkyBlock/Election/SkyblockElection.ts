import SkyblockElectionCandidate from './SkyblockElectionCandidate.js';

class SkyblockElection {
  year: number;
  candidates: SkyblockElectionCandidate[];
  constructor(data: Record<string, any>) {
    this.year = data?.year || 0;
    this.candidates = (data?.candidates || [])
      .map((candidate: Record<string, any>) => new SkyblockElectionCandidate(candidate))
      .sort((a: SkyblockElectionCandidate, b: SkyblockElectionCandidate) => a.votesReceived - b.votesReceived);
  }
}

export default SkyblockElection;
