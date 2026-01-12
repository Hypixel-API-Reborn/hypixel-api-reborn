import BaseKillsDeathsType from '../Shared/BaseKillDeathsType.ts';
import { ParseModeAfter, ParseModeBefore } from '../../../Utils/ParseMode.ts';
import type { SkyWarsKillType, SkyWarsKitId, SkyWarsModeId } from '../../../Types/Player.ts';
import Divide from '../../../Utils/Divide.ts';

class SkyWarsKillsDeathsType extends BaseKillsDeathsType {
  constructor(data: Record<string, any>, type?: SkyWarsKillType, mode?: SkyWarsModeId | SkyWarsKitId) {
    type = ParseModeBefore(type) as SkyWarsKillType;
    mode = ParseModeAfter(mode) as SkyWarsModeId;
    super(data);
    this.kills = data?.[`${type}kills${mode}`] || 0;
    this.deaths = data?.[`${type}kills${mode}`] || 0;
    this.ratio = Divide(this.kills, this.deaths);
  }
}

export default SkyWarsKillsDeathsType;
