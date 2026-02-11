import SkyBlockGardenComposterUpgrades from './SkyBlockGardenComposterUpgrades.js';
class SkyBlockGardenComposter {
    organicMatter;
    fuelUnits;
    compostUnits;
    compostItems;
    conversionTicks;
    upgrades;
    constructor(data) {
        this.organicMatter = data?.organic_matter || 0;
        this.fuelUnits = data?.fuel_units || 0;
        this.compostUnits = data?.compost_units || 0;
        this.compostItems = data?.compost_items || 0;
        this.conversionTicks = data?.conversion_ticks || 0;
        this.upgrades = new SkyBlockGardenComposterUpgrades(data?.upgrades || {});
    }
    toString() {
        return this.organicMatter;
    }
}
export default SkyBlockGardenComposter;
//# sourceMappingURL=SkyBlockGardenComposter.js.map