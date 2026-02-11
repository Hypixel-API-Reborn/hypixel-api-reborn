import SkyBlockMember from '../Member/SkyBlockMember.js';
import SkyBlockProfileBanking from './Banking/SkyBlockProfileBanking.js';
import SkyBlockProfileCommunityUpgrades from './CommunityUpgrades/SkyBlockProfileCommunityUpgrades.js';
import type RequestData from '../../../Private/RequestData.js';
import type SkyBlockGarden from '../Garden/SkyBlockGarden.js';
import type SkyBlockMuseum from '../Museum/SkyBlockMuseum.js';
import type { SkyBlockProfileName, SkyBlockProfileType } from '../../../Types/SkyBlock.js';
import type { UUID } from '../../../Types/Global.js';
declare class SkyBlockProfile {
    profileId: string;
    communityUpgrades: SkyBlockProfileCommunityUpgrades;
    createdTimestamp: number | null;
    createdAt: Date | null;
    members: SkyBlockMember[];
    me: SkyBlockMember | null;
    gameMode: SkyBlockProfileType | null;
    banking: SkyBlockProfileBanking;
    profileName: SkyBlockProfileName | 'UNKNOWN';
    selected: boolean;
    garden: SkyBlockGarden | null;
    museum: SkyBlockMuseum | null;
    constructor(data: Record<string, any>, extra: {
        uuid: UUID | null;
        garden?: SkyBlockGarden;
        museum?: SkyBlockMuseum;
    });
    toString(): SkyBlockProfileName | 'UNKNOWN';
    isRaw(): this is RequestData;
}
export default SkyBlockProfile;
//# sourceMappingURL=SkyBlockProfile.d.ts.map