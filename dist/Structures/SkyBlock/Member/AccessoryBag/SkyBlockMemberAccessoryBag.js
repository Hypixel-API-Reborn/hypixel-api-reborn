import SkyBlockMemberAccessoryBagTuning from './SkyBlockMemberAccessoryBagTuning.js';
class SkyBlockMemberAccessoryBag {
    selectedPower;
    unlockedPowers;
    bagUpgradesPurchased;
    highestMagicalPower;
    tuning;
    constructor(data) {
        this.selectedPower = data?.selected_power || null;
        this.unlockedPowers = data?.unlocked_powers || [
            'Fortuitous ',
            'Pretty',
            'Protected',
            'Simple',
            'Warrior',
            'Commando',
            'Disciplined',
            'Inspired',
            'Ominous ',
            'Prepared'
        ];
        this.bagUpgradesPurchased = data?.bag_upgrades_purchased || 0;
        this.highestMagicalPower = data?.highest_magical_power || 0;
        this.tuning = new SkyBlockMemberAccessoryBagTuning(data?.tuning || {});
    }
    toString() {
        return this.selectedPower;
    }
}
export default SkyBlockMemberAccessoryBag;
//# sourceMappingURL=SkyBlockMemberAccessoryBag.js.map