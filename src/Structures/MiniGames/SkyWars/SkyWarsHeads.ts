import { ParseModeAfter } from '../../../Utils/ParseMode.ts';
import type { SkyWarsKitId, SkyWarsModeId } from '../../../Types/Player.ts';

class SkyWarsHeads {
  total: number;
  tasty: number;
  yucky: number;
  eww: number;
  salty: number;
  divine: number;
  heavenly: number;
  decent: number;
  meh: number;
  succulent: number;
  sweet: number;
  ethereal: number;
  indescribable: number;
  special: number;
  constructor(data: Record<string, any>, mode?: SkyWarsModeId | SkyWarsKitId) {
    mode = ParseModeAfter(mode) as SkyWarsModeId;
    this.total = data?.[`heads${mode}`] || 0;
    this.tasty = data?.[`heads_tasty${mode}`] || 0;
    this.yucky = data?.[`heads_yucky${mode}`] || 0;
    this.eww = data?.[`heads_eww${mode}`] || 0;
    this.salty = data?.[`heads_salty${mode}`] || 0;
    this.divine = data?.[`heads_divine${mode}`] || 0;
    this.heavenly = data?.[`heads_heavenly${mode}`] || 0;
    this.decent = data?.[`heads_decent${mode}`] || 0;
    this.meh = data?.[`heads_meh${mode}`] || 0;
    this.succulent = data?.[`heads_succulent${mode}`] || 0;
    this.sweet = data?.[`heads_sweet${mode}`] || 0;
    this.ethereal = data?.[`heads_ethereal${mode}`] || 0;
    this.indescribable = data?.[`heads_indescribable${mode}`] || 0;
    this.special = data?.[`heads_special${mode}`] || 0;
  }
}

export default SkyWarsHeads;
