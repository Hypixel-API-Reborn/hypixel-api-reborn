import type { TurboKartRacersMaps } from '../../../Types/Player.js';

class TurboKartRacersMap {
  map: TurboKartRacersMaps;
  plays: number;
  boxPickups: number;
  bronzeTrophies: number;
  silverTrophies: number;
  goldTrophies: number;
  constructor(data: Record<string, any>, mapName: TurboKartRacersMaps) {
    this.map = mapName;
    this.plays = data?.[`${mapName}_plays`] || 0;
    this.boxPickups = data?.[`box_pickups_${mapName}`] || 0;
    this.bronzeTrophies = data?.[`bronze_trophy_${mapName}`] || 0;
    this.silverTrophies = data?.[`silver_trophy_${mapName}`] || 0;
    this.goldTrophies = data?.[`gold_trophy_${mapName}`] || 0;
  }
}

export default TurboKartRacersMap;
