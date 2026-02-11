import PlayerTourneyData from './PlayerTourneyData.js';
import type { PlayerTourneyShopSort } from '../../../Types/Player.js';
declare class PlayerTourney {
    firstJoinLobbyTimestamp: number | null;
    firstJoinLobbyAt: Date | null;
    totalTributes: number;
    shopSort: PlayerTourneyShopSort | 'UNKNOWN';
    hidePurchased: boolean;
    tourneyData: PlayerTourneyData[];
    constructor(data: Record<string, any>);
}
export default PlayerTourney;
//# sourceMappingURL=PlayerTourney.d.ts.map