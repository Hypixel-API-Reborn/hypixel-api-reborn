import { ParseModeBefore } from "../../../Utils/ParseMode.js";
class BedWarsItemsPurchased {
    itemsPurchased;
    permanentItemsPurchased;
    constructor(data, mode) {
        mode = ParseModeBefore(mode);
        this.itemsPurchased = data?.[`${mode}items_purchased_bedwars`] || 0;
        this.permanentItemsPurchased = data?.[`${mode}permanent_items_purchased_bedwars`] || 0;
    }
}
export default BedWarsItemsPurchased;
//# sourceMappingURL=BedWarsItemsPurchased.js.map