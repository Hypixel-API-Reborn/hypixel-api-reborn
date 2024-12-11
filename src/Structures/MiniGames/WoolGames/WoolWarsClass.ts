import Divide from '../../../Utils/Divide.js';
import type { WoolWarsClassNames } from '../../../Types/Player.js';

class WoolWarsClass {
  wins: number;
  kills: number;
  assists: number;
  deaths: number;
  KDRatio: number;
  gamesPlayed: number;
  woolsPlaced: number;
  blocksBroken: number;
  placeBreakRatio: number;
  powerups: number;
  constructor(data: Record<string, any>, classInput: WoolWarsClassNames) {
    const className = classInput.toLowerCase();
    this.wins = data?.[className]?.wins || 0;
    this.kills = data?.[className]?.kills || 0;
    this.assists = data?.[className]?.assists || 0;
    this.deaths = data?.[className]?.deaths || 0;
    this.KDRatio = Divide(this.kills, this.deaths);
    this.gamesPlayed = data?.[className]?.games_played || 0;
    this.woolsPlaced = data?.[className]?.wool_placed || 0;
    this.blocksBroken = data?.[className]?.blocks_broken || 0;
    this.placeBreakRatio = Divide(this.woolsPlaced, this.blocksBroken);
    this.powerups = data?.[className]?.powerups_gotten || 0;
  }
}

export default WoolWarsClass;
