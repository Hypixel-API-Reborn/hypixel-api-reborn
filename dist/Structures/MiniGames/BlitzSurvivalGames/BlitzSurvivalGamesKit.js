import BlitzSurvivalGamesData from "./BlitzSurvivalGamesData.js";
import { ParseModeAfter } from "../../../Utils/ParseMode.js";
class BlitzSurvivalGamesKit extends BlitzSurvivalGamesData {
    level;
    exp;
    prestige;
    inventory;
    constructor(data, kitName) {
        super(data, kitName);
        this.level = data?.[kitName] || 0;
        kitName = ParseModeAfter(kitName);
        this.exp = data?.[`exp${kitName}`] || 0;
        this.prestige = data?.[`p${kitName}`] || 0;
        this.inventory =
            data?.[`${kitName.replaceAll('_', '').charAt(0).toUpperCase()}${kitName.replaceAll('_', '').slice(1)}Inventory`] || {};
    }
}
export default BlitzSurvivalGamesKit;
//# sourceMappingURL=BlitzSurvivalGamesKit.js.map