import BaseKillsDeathsType from '../Shared/BaseKillDeathsType.js';
import Divide from '../../../Utils/Divide.js';
import { ParseModeAfter, ParseModeBefore } from '../../../Utils/ParseMode.js';
import type { SkyWarsKillType, SkyWarsKitId, SkyWarsModeId } from '../../../Types/Player.js';

class SkyWarsKillsDeathsType extends BaseKillsDeathsType {
  constructor(data: Record<string, any>, type?: SkyWarsKillType, mode?: SkyWarsModeId | SkyWarsKitId) {
    type = ParseModeBefore(type) as SkyWarsKillType;
    mode = ParseModeAfter(mode) as SkyWarsModeId;
    super(data);
    this.kills = data?.[`${type}kills${mode}`] ?? 0;
    this.deaths = data?.[`${type}deaths${mode}`] ?? 0;
    this.ratio = Divide(this.kills, this.deaths);
  }
}

export default SkyWarsKillsDeathsType;
