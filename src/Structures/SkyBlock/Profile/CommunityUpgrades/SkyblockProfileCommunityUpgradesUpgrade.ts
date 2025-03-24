import type { CommunityUpgradesUpgrades } from '../../../../Types/Skyblock.js';

class SkyblockProfileCommunityUpgradesUpgrade {
  upgrade: CommunityUpgradesUpgrades;
  startedTimestamp: number;
  startedAt: Date;
  constructor(data: Record<string, any>) {
    this.upgrade = data.upgrade;
    this.startedTimestamp = data.started_ms;
    this.startedAt = new Date(this.startedTimestamp);
  }
}

export default SkyblockProfileCommunityUpgradesUpgrade;
