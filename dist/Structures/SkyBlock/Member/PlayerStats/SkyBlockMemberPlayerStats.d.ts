import SkyBlockMemberPlayerStatsAuctions from './SkyBlockMemberPlayerStatsAuctions.js';
import SkyBlockMemberPlayerStatsCandy from './SkyBlockMemberPlayerStatsCandy.js';
import SkyBlockMemberPlayerStatsEndIsland from './SkyBlockMemberPlayerStatsEndIsland.js';
import SkyBlockMemberPlayerStatsFishing from './SkyBlockMemberPlayerStatsFishing.js';
import SkyBlockMemberPlayerStatsGifts from './SkyBlockMemberPlayerStatsGifts.js';
import SkyBlockMemberPlayerStatsMythos from './SkyBlockMemberPlayerStatsMythos.js';
import SkyBlockMemberPlayerStatsWinter from './SkyBlockMemberPlayerStatsWinter.js';
declare class SkyBlockMemberPlayerStats {
    fishing: SkyBlockMemberPlayerStatsFishing;
    glowingMushroomsBroken: number;
    highestDamage: number;
    highestCriticalDamage: number;
    kills: Record<string, number>;
    deaths: Record<string, number>;
    auctions: SkyBlockMemberPlayerStatsAuctions;
    candy: SkyBlockMemberPlayerStatsCandy;
    gifts: SkyBlockMemberPlayerStatsGifts;
    mythos: SkyBlockMemberPlayerStatsMythos;
    winter: SkyBlockMemberPlayerStatsWinter;
    endIsland: SkyBlockMemberPlayerStatsEndIsland;
    races: Record<string, number | Record<string, number>>;
    constructor(data: Record<string, any>);
}
export default SkyBlockMemberPlayerStats;
//# sourceMappingURL=SkyBlockMemberPlayerStats.d.ts.map