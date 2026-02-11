import { ParseModeAfter, ParseModeBefore, ParseModeBeforeAfter } from "../../../../Utils/ParseMode.js";
class SkyWarsModePerk {
    level;
    enabled;
    constructor(data, perk, mode) {
        perk = ParseModeAfter(mode);
        mode = ParseModeBefore(mode);
        this.level = data?.[`${mode}${perk}`] || 0;
        mode = ParseModeBeforeAfter(mode);
        this.enabled = data?.[`toggle_${mode}${perk}`] || 0;
    }
}
export default SkyWarsModePerk;
//# sourceMappingURL=SkyWarsModePerk.js.map