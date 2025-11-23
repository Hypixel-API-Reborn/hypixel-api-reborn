import Divide from '../../../../Utils/Divide.js';
import ParseBedWarsMode from '../../../../Utils/ParseBedWarsMode.js';
import type { BedWarsFinalType, BedWarsModeId } from '../../../../Types/Player.js';

class BedWarsKillsDeathsType {
  kills: number;
  deaths: number;
  ratio: number;
  constructor(data: Record<string, any>, type?: BedWarsFinalType, mode?: BedWarsModeId, finals: boolean = false) {
    type = ParseBedWarsMode(type) as BedWarsFinalType;
    mode = ParseBedWarsMode(mode) as BedWarsModeId;
    this.kills = data?.[`${mode}${type}${finals ? 'final_' : ''}kills_bedwars`] || 0;
    this.deaths = data?.[`${mode}${type}${finals ? 'final_' : ''}deaths_bedwars`] || 0;
    this.ratio = Divide(this.kills, this.deaths);
  }
}

export default BedWarsKillsDeathsType;
