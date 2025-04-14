import SkyBlockElectionCandidate from './SkyBlockElectionCandidate.js';

class SkyBlockElection {
  year: number;
  candidates: SkyBlockElectionCandidate[];
  constructor(data: Record<string, any>) {
    this.year = data?.year || 0;
    this.candidates = (data?.candidates || [])
      .map((candidate: Record<string, any>) => new SkyBlockElectionCandidate(candidate))
      .sort((a: SkyBlockElectionCandidate, b: SkyBlockElectionCandidate) => a.votesReceived - b.votesReceived);
  }

  toString(): number {
    return this.year;
  }
}

export default SkyBlockElection;
