import InventoryLayout from '../../Shared/InventoryLayout.js';
import { Divide } from '../../../../Utils/index.js';
import type { WoolGamesWoolWarsClassName } from '../../../../Types/Player.js';

class WoolWarsClass {
  wins: number;
  kills: number;
  assists: number;
  deaths: number;
  killDeathRatio: number;
  gamesPlayed: number;
  woolsPlaced: number;
  blocksBroken: number;
  placeBreakRatio: number;
  powerUps: number;
  layout: InventoryLayout;
  constructor(data: Record<string, any>, className: WoolGamesWoolWarsClassName) {
    className = className.toLowerCase() as WoolGamesWoolWarsClassName;
    this.wins = data?.[className]?.wins ?? 0;
    this.kills = data?.[className]?.kills ?? 0;
    this.assists = data?.[className]?.assists ?? 0;
    this.deaths = data?.[className]?.deaths ?? 0;
    this.killDeathRatio = Divide(this.kills, this.deaths);
    this.gamesPlayed = data?.[className]?.games_played ?? 0;
    this.woolsPlaced = data?.[className]?.wool_placed ?? 0;
    this.blocksBroken = data?.[className]?.blocks_broken ?? 0;
    this.placeBreakRatio = Divide(this.woolsPlaced, this.blocksBroken);
    this.powerUps = data?.[className]?.powerups_gotten ?? 0;
    this.layout = new InventoryLayout(data?.layouts?.[className]);
  }
}

export default WoolWarsClass;
