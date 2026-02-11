import BedWarsItemsPurchased from './BedWarsItemsPurchased.js';
import { ParseModeBefore } from "../../../Utils/ParseMode.js";
class BedWarsResourcesCollected {
    total;
    emerald;
    diamond;
    gold;
    iron;
    wrappedPresent;
    bed;
    itemsPurchased;
    constructor(data, mode) {
        mode = ParseModeBefore(mode);
        this.total = data?.[`${mode}resources_collected_bedwars`] || 0;
        this.emerald = data?.[`${mode}emerald_resources_collected_bedwars`] || 0;
        this.diamond = data?.[`${mode}diamond_resources_collected_bedwars`] || 0;
        this.gold = data?.[`${mode}gold_resources_collected_bedwars`] || 0;
        this.iron = data?.[`${mode}iron_resources_collected_bedwars`] || 0;
        this.wrappedPresent = data?.[`${mode}wrapped_present_resources_collected_bedwars`] || 0;
        this.bed = data?.[`${mode}bed_resources_collected_bedwars`] || 0;
        this.itemsPurchased = new BedWarsItemsPurchased(data, mode);
    }
}
export default BedWarsResourcesCollected;
//# sourceMappingURL=BedWarsResourcesCollected.js.map