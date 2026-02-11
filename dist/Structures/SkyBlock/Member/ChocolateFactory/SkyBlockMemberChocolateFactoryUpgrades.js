class SkyBlockMemberChocolateFactoryUpgrades {
    click;
    chocolateMultiplier;
    rabbitRarity;
    constructor(data) {
        this.click = data?.click_upgrades || 0;
        this.chocolateMultiplier = data?.chocolate_multiplier_upgrades || 0;
        this.rabbitRarity = data?.rabbit_rarity_upgrades || 0;
    }
}
export default SkyBlockMemberChocolateFactoryUpgrades;
//# sourceMappingURL=SkyBlockMemberChocolateFactoryUpgrades.js.map