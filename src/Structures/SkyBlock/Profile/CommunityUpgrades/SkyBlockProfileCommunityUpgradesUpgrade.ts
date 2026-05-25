import type { CommunityUpgradesUpgrade } from '../../../../Types/SkyBlock.js';

class SkyBlockProfileCommunityUpgradesUpgrade {
  upgrade: CommunityUpgradesUpgrade | 'UNKNOWN';
  startedTimestamp: number;
  startedAt: Date;
  constructor(data: Record<string, any>) {
    this.upgrade = data.upgrade || 'UNKNOWN';
    this.startedTimestamp = data.started_ms || 0;
    this.startedAt = new Date(this.startedTimestamp);
  }

  toString(): CommunityUpgradesUpgrade | 'UNKNOWN' {
    return this.upgrade;
  }
}

export default SkyBlockProfileCommunityUpgradesUpgrade;
