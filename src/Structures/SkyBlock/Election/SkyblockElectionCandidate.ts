import SkyblockElectionCandidatePerk from './SkyblockElectionCandidatePerk.js';

class SkyblockElectronCandidate {
  name: string;
  keyBenefit: string;
  perks: SkyblockElectionCandidatePerk[];
  votesReceived: number;
  constructor(data: Record<string, any>) {
    this.name = data?.name || 'UNKNOWN';
    this.keyBenefit = data?.key || 'UNKNOWN';
    this.perks = (data?.perks || []).map((perk: Record<string, any>) => new SkyblockElectionCandidatePerk(perk));
    this.votesReceived = data?.votes || 0;
  }

  toString(): string {
    return this.name;
  }
}

export default SkyblockElectronCandidate;
