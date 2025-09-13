import PlayerHousingGivenCookies from './PlayerHousingGivenCookies.js';
import PlayerHousingPlayerSettings from './PlayerHousingPlayerSettings.js';
import type { PlayerHousingPlotSize, PlayerHousingTutorialStage } from '../../../Types/Player.js';

class PlayerHousing {
  allowedBlocks: string[];
  packages: string[];
  tutorialStage: PlayerHousingTutorialStage | 'UNKNOWN';
  firstHouseJoinTimestamp: number | null;
  firstHouseJoinAt: Date | null;
  plotSize: PlayerHousingPlotSize | 'UNKNOWN';
  playerSettings: PlayerHousingPlayerSettings;
  givenCookies: PlayerHousingGivenCookies[];
  constructor(data: Record<string, any>) {
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
