import type { CommunityUpgradesUpgrades } from '../../../../Types/SkyBlock.js';
declare class SkyBlockProfileCommunityUpgradesUpgrade {
    upgrade: CommunityUpgradesUpgrades | 'UNKNOWN';
    startedTimestamp: number;
    startedAt: Date;
    constructor(data: Record<string, any>);
    toString(): CommunityUpgradesUpgrades | 'UNKNOWN';
}
export default SkyBlockProfileCommunityUpgradesUpgrade;
//# sourceMappingURL=SkyBlockProfileCommunityUpgradesUpgrade.d.ts.map