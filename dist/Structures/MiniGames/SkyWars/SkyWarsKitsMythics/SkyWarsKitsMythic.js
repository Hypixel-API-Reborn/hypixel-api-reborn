import BaseSkyWarsMode from "../SkyWarsMode/BaseSkyWarsMode.js";
import { ParseModeAfter, ParseModeBefore } from "../../../../Utils/ParseMode.js";
class SkyWarsKitsMythic extends BaseSkyWarsMode {
    autoEquipArmor;
    xp;
    constructor(data, kit) {
        kit = ParseModeAfter(kit);
        super(data, kit);
        this.autoEquipArmor = data?.[`${ParseModeBefore(kit)}inventory_auto_equip_armor`] || true;
        this.xp = data?.[`xp${kit}`] || 0;
    }
}
export default SkyWarsKitsMythic;
//# sourceMappingURL=SkyWarsKitsMythic.js.map