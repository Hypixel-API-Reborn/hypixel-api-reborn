import Candidate from './Candidate.js';

class GovernmentData {
  lastUpdatedTimestamp: number;
  lastUpdatedAt: Date;
  lastElectionResults: Map<string, Candidate>;
  mayor: Candidate | undefined;
  runningYear: number;
  currentElectionResults: Map<string, Candidate> | null;
  currentElectionFor: number | null;
  constructor(data: Record<string, any>) {
    this.lastUpdatedTimestamp = parseInt(data.lastUpdated, 10);
    this.lastUpdatedAt = new Date(this.lastUpdatedTimestamp);
    const lastElectionResults = data.mayor.election.candidates.map(
      (x: any) => new Candidate(x, x.name === data.mayor.name)
    );
    this.lastElectionResults = new Map(
      lastElectionResults
        .sort((a: any, b: any) => a.votesReceived - b.votesReceived)
        .reverse()
        .map((x: any) => [x.name, x])
    );
    this.mayor = this.lastElectionResults.get(data.mayor.name);
    this.runningYear = parseInt(data.mayor.election.year, 10) || 0;
    const thisElection = data.current?.candidates.map((x: any) => new Candidate(x, x.name === data.mayor.name)) || null;
    this.currentElectionResults = thisElection
      ? new Map(
          thisElection
            .sort((a: any, b: any) => a.votesReceived - b.votesReceived)
            .reverse()
            .map((x: any) => [x.name, x])
        )
      : null;
    this.currentElectionFor = parseInt(data.current?.year, 10) || null;
  }

  toString(): string {
    return this.mayor?.name || '';
  }
}

export default GovernmentData;
