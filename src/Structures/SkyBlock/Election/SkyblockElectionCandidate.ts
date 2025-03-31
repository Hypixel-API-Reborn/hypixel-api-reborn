import SkyblockElectionCandidatePerk from './SkyblockElectionCandidatePerk.js';
import type { SkyblockCandidateKeyBenefit, SkyblockMayor } from '../../../Types/Skyblock.js';

class SkyblockElectronCandidate {
  name: SkyblockMayor | 'UNKNOWN';
  keyBenefit: SkyblockCandidateKeyBenefit | 'UNKNOWN';
  perks: SkyblockElectionCandidatePerk[];
  votesReceived: number;
  constructor(data: Record<string, any>) {
    this.name = data?.name || 'UNKNOWN';
    this.keyBenefit = data?.key || 'UNKNOWN';
    this.perks = (data?.perks || []).map((perk: Record<string, any>) => new SkyblockElectionCandidatePerk(perk));
    this.votesReceived = data?.votes || 0;
  }

  toString(): SkyblockMayor | 'UNKNOWN' {
    return this.name;
  }
}

export default SkyblockElectronCandidate;
