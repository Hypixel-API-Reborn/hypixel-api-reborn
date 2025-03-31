import type { CommunityUpgradesUpgrades } from '../../../../Types/Skyblock.js';

class SkyblockProfileCommunityUpgradesUpgrade {
  upgrade: CommunityUpgradesUpgrades | 'UNKNOWN';
  startedTimestamp: number;
  startedAt: Date;
  constructor(data: Record<string, any>) {
    this.upgrade = data.upgrade || 'UNKNOWN';
    this.startedTimestamp = data.started_ms || 0;
    this.startedAt = new Date(this.startedTimestamp);
  }

  toString(): CommunityUpgradesUpgrades | 'UNKNOWN' {
    return this.upgrade;
  }
}

export default SkyblockProfileCommunityUpgradesUpgrade;
