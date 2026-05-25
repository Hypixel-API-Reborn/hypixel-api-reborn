import type { TurboKartRacersMapId } from '../../../Types/Player.js';

class TurboKartRacersMap {
  map: TurboKartRacersMapId;
  plays: number;
  boxPickups: number;
  bronzeTrophies: number;
  silverTrophies: number;
  goldTrophies: number;
  constructor(data: Record<string, any>, mapId: TurboKartRacersMapId) {
    this.map = mapId;
    this.plays = data?.[`${mapId}_plays`] || 0;
    this.boxPickups = data?.[`box_pickups_${mapId}`] || 0;
    this.bronzeTrophies = data?.[`bronze_trophy_${mapId}`] || 0;
    this.silverTrophies = data?.[`silver_trophy_${mapId}`] || 0;
    this.goldTrophies = data?.[`gold_trophy_${mapId}`] || 0;
  }
}

export default TurboKartRacersMap;
