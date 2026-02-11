import PlayerHousingGivenCookies from './PlayerHousingGivenCookies.js';
import PlayerHousingPlayerSettings from './PlayerHousingPlayerSettings.js';
class PlayerHousing {
    allowedBlocks;
    packages;
    tutorialStage;
    firstHouseJoinTimestamp;
    firstHouseJoinAt;
    plotSize;
    playerSettings;
    givenCookies;
    constructor(data) {
        this.allowedBlocks = data?.allowedBlocks || [];
        this.packages = data?.packages || [];
        this.playerSettings = new PlayerHousingPlayerSettings(data?.playerSettings || {});
        this.tutorialStage = data?.tutorialStep || 'UNKNOWN';
        this.firstHouseJoinTimestamp = data.firstHouseJoinMs || null;
        this.firstHouseJoinAt = this.firstHouseJoinTimestamp ? new Date(this.firstHouseJoinTimestamp) : null;
        this.plotSize = data?.plotSize || 'UNKNOWN';
        this.givenCookies = [];
        Object.keys(data)
            .filter((key) => key.startsWith('given_cookies_'))
            .map((key) => {
            this.givenCookies.push(new PlayerHousingGivenCookies(key, data[key]));
        });
    }
}
export default PlayerHousing;
//# sourceMappingURL=PlayerHousing.js.map