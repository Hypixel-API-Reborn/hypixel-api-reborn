import BlitzSurvivalGamesData from './BlitzSurvivalGamesData.ts';
import { ParseModeAfter } from '../../../Utils/ParseMode.ts';
import type { BlitzSurvivalGamesKitId } from '../../../Types/Player.ts';

class BlitzSurvivalGamesKit extends BlitzSurvivalGamesData {
  level: number;
  inventory: Record<string, string>;
  exp: number;
  prestige: number;
  constructor(data: Record<string, any>, kitName: BlitzSurvivalGamesKitId) {
    super(data, kitName);
    this.level = data?.[kitName] || 0;
    this.inventory = data?.[`${kitName.charAt(0).toUpperCase()}${kitName.slice(1)}Inventory`] || {};
    kitName = ParseModeAfter(kitName) as BlitzSurvivalGamesKitId;
    this.exp = data?.[`exp${kitName}`] || 0;
    this.prestige = data?.[`p${kitName}`] || 0;
  }
}

export default BlitzSurvivalGamesKit;
