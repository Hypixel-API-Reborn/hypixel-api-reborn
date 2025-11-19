import SkyBlockElectionCandidatePerk from './SkyBlockElectionCandidatePerk.js';
import type { SkyBlockCandidateKeyBenefit, SkyBlockMayor } from '../../../Types/SkyBlock.js';

class SkyBlockElectionCandidate {
  name: SkyBlockMayor | 'UNKNOWN';
  keyBenefit: SkyBlockCandidateKeyBenefit | 'UNKNOWN';
  perks: SkyBlockElectionCandidatePerk[];
  votesReceived: number;
  constructor(data: Record<string, any>) {
    this.name = data?.name || 'UNKNOWN';
    this.keyBenefit = data?.key || 'UNKNOWN';
    this.perks = (data?.perks || []).map((perk: Record<string, any>) => new SkyBlockElectionCandidatePerk(perk));
    this.votesReceived = data?.votes || 0;
  }

  toString(): SkyBlockMayor | 'UNKNOWN' {
    return this.name;
  }
}

export default SkyBlockElectionCandidate;
