import BaseKillsDeathsType from '../Shared/BaseKillDeathsType.ts';
import { ParseModeAfter, ParseModeBefore } from '../../../Utils/ParseMode.ts';
import type { SkyWarsKillType, SkyWarsKitId, SkyWarsModeId } from '../../../Types/Player.ts';

class SkyWarsKillsDeathsType extends BaseKillsDeathsType {
  constructor(data: Record<string, any>, type?: SkyWarsKillType, mode?: SkyWarsModeId | SkyWarsKitId) {
    type = ParseModeBefore(type) as SkyWarsKillType;
    mode = ParseModeAfter(mode) as SkyWarsModeId;
    super({ kills: data?.[`${type}kills${mode}`] || 0, deaths: data?.[`${type}deaths${mode}`] || 0 });
  }
}

export default SkyWarsKillsDeathsType;
