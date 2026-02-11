import SkyBlockMemberChocolateFactoryEggs from './SkyBlockMemberChocolateFactoryEggs.js';
import SkyBlockMemberChocolateFactoryEmployees from './SkyBlockMemberChocolateFactoryEmployees.js';
import SkyBlockMemberChocolateFactoryHitmen from './SkyBlockMemberChocolateFactoryHitmen.js';
import SkyBlockMemberChocolateFactoryTimeTower from './SkyBlockMemberChocolateFactoryTimeTower.js';
import SkyBlockMemberChocolateFactoryUpgrades from './SkyBlockMemberChocolateFactoryUpgrades.js';
class SkyBlockMemberChocolateFactory {
    employees;
    timeTower;
    upgrades;
    hitman;
    currentChocolate;
    chocolateSincePrestige;
    totalChocolate;
    barnCapacity;
    prestige;
    lastViewedChocolateFactory;
    lastViewedChocolateFactoryDate;
    supremeChocolateBars;
    eggs;
    foundRabbits;
    foundEggLocations;
    constructor(data) {
        this.employees = new SkyBlockMemberChocolateFactoryEmployees(data?.employees || {});
        this.timeTower = new SkyBlockMemberChocolateFactoryTimeTower(data?.time_tower || {});
        this.upgrades = new SkyBlockMemberChocolateFactoryUpgrades(data || {});
        this.hitman = new SkyBlockMemberChocolateFactoryHitmen(data?.rabbit_hitmen || {});
        this.currentChocolate = data?.chocolate || 0;
        this.chocolateSincePrestige = data?.chocolate_since_prestige || 0;
        this.totalChocolate = data?.total_chocolate || 0;
        this.barnCapacity = data?.rabbit_barn_capacity_level || 0;
        this.prestige = data?.chocolate_level || 0;
        this.lastViewedChocolateFactory = data?.last_viewed_chocolate_factory || 0;
        this.lastViewedChocolateFactoryDate = new Date(this.lastViewedChocolateFactory);
        this.supremeChocolateBars = data?.supreme_chocolate_bars || 0;
        this.eggs = new SkyBlockMemberChocolateFactoryEggs(data?.rabbits?.collected_eggs || {});
        this.foundRabbits = Object.keys(data?.rabbits || {})
            .filter((key) => key !== 'collected_eggs' && key !== 'collected_locations')
            .reduce((obj, key) => {
            obj[key] = data.rabbits[key];
            return obj;
        }, {});
        this.foundEggLocations = data?.rabbits?.collected_locations || {};
    }
    toString() {
        return this.currentChocolate;
    }
}
export default SkyBlockMemberChocolateFactory;
//# sourceMappingURL=SkyBlockMemberChocolateFactory.js.map