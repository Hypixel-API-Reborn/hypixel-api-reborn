import BaseKillsDeathsType from '../../Shared/BaseKillDeathsType.ts';
import { ParseModeBefore } from '../../../../Utils/ParseMode.ts';
import type { BedWarsFinalType, BedWarsModeId } from '../../../../Types/Player.js';

class BedWarsKillsDeathsType extends BaseKillsDeathsType {
  constructor(data: Record<string, any>, type?: BedWarsFinalType, mode?: BedWarsModeId, finals: boolean = false) {
    type = ParseModeBefore(type) as BedWarsFinalType;
    mode = ParseModeBefore(mode) as BedWarsModeId;
    super({
      kills: data?.[`${mode}${type}${finals ? 'final_' : ''}kills_bedwars`] || 0,
      deaths: data?.[`${mode}${type}${finals ? 'final_' : ''}deaths_bedwars`] || 0
    });
  }
}

export default BedWarsKillsDeathsType;
