import BlitzSurvivalGamesData from './BlitzSurvivalGamesData.ts';
import { ParseModeAfter } from '../../../Utils/ParseMode.ts';
import type { BlitzSurvivalGamesKitId } from '../../../Types/Player.ts';

class BlitzSurvivalGamesKit extends BlitzSurvivalGamesData {
  level: number;
  exp: number;
  prestige: number;
  inventory: Record<string, string>;
  constructor(data: Record<string, any>, kitName: BlitzSurvivalGamesKitId) {
    super(data, kitName);
    this.level = data?.[kitName] || 0;
    kitName = ParseModeAfter(kitName) as BlitzSurvivalGamesKitId;
    this.exp = data?.[`exp${kitName}`] || 0;
    this.prestige = data?.[`p${kitName}`] || 0;
    this.inventory =
      data?.[
        `${kitName.replaceAll('_', '').charAt(0).toUpperCase()}${kitName.replaceAll('_', '').slice(1)}Inventory`
      ] || {};
  }
}

export default BlitzSurvivalGamesKit;
