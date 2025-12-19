import BedWarsBeds from './BedWarsBeds.js';
import BedWarsKillsDeaths from './BedWarsKillsDeaths/BedWarsKillsDeaths.js';
import BedWarsResourcesCollected from './BedWarsResourcesCollected.js';
import Divide from '../../../Utils/Divide.js';
import { ParseModeBefore } from '../../../Utils/ParseMode.ts';
import type { BedWarsModeId } from '../../../Types/Player.js';

class BedWarsMode {
  resourcesCollected: BedWarsResourcesCollected;
  kills: BedWarsKillsDeaths;
  finals: BedWarsKillsDeaths;
  beds: BedWarsBeds;
  winstreak: number;
  wins: number;
  losses: number;
  winLossRatio: number;
  gamesPlayed: number;
  constructor(data: Record<string, any>, mode?: BedWarsModeId) {
    mode = ParseModeBefore(mode) as BedWarsModeId;
    this.resourcesCollected = new BedWarsResourcesCollected(data, mode);
    this.kills = new BedWarsKillsDeaths(data, mode);
    this.finals = new BedWarsKillsDeaths(data, mode, true);
    this.beds = new BedWarsBeds(data, mode);
    this.winstreak = data?.[`${mode}winstreak`] || 0;
    this.wins = data?.[`${mode}wins_bedwars`] || 0;
    this.losses = data?.[`${mode}losses_bedwars`] || 0;
    this.winLossRatio = Divide(this.wins, this.losses);
    this.gamesPlayed = data?.[`${mode}games_played_bedwars`] || 0;
  }
}

export default BedWarsMode;
