import BaseKillsDeathsType from '../../Shared/BaseKillDeathsType.ts';
import Divide from '../../../../Utils/Divide.ts';
import { ParseModeBefore } from '../../../../Utils/ParseMode.ts';
import type { BedWarsFinalType, BedWarsModeId } from '../../../../Types/Player.js';

class BedWarsKillsDeathsType extends BaseKillsDeathsType {
  constructor(data: Record<string, any>, type?: BedWarsFinalType, mode?: BedWarsModeId, finals: boolean = false) {
    type = ParseModeBefore(type) as BedWarsFinalType;
    mode = ParseModeBefore(mode) as BedWarsModeId;
    super(data);
    this.kills = data?.[`${mode}${type}${finals ? 'final_' : ''}kills_bedwars`] || 0;
    this.deaths = data?.[`${mode}${type}${finals ? 'final_' : ''}deaths_bedwars`] || 0;
    this.ratio = Divide(this.kills, this.deaths);
  }
}

export default BedWarsKillsDeathsType;
