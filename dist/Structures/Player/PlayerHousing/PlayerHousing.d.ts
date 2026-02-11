import PlayerHousingGivenCookies from './PlayerHousingGivenCookies.js';
import PlayerHousingPlayerSettings from './PlayerHousingPlayerSettings.js';
import type { PlayerHousingPlotSize, PlayerHousingTutorialStage } from '../../../Types/Player.js';
declare class PlayerHousing {
    allowedBlocks: string[];
    packages: string[];
    tutorialStage: PlayerHousingTutorialStage | 'UNKNOWN';
    firstHouseJoinTimestamp: number | null;
    firstHouseJoinAt: Date | null;
    plotSize: PlayerHousingPlotSize | 'UNKNOWN';
    playerSettings: PlayerHousingPlayerSettings;
    givenCookies: PlayerHousingGivenCookies[];
    constructor(data: Record<string, any>);
}
export default PlayerHousing;
//# sourceMappingURL=PlayerHousing.d.ts.map