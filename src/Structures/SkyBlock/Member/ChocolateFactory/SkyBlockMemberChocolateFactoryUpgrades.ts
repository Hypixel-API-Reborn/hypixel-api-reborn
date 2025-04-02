class SkyBlockMemberChocolateFactoryUpgrades {
  click: number;
  chocolateMultiplier: number;
  rabbitRarity: number;
  constructor(data: Record<string, any>) {
    this.click = data?.click_upgrades || 0;
    this.chocolateMultiplier = data?.chocolate_multiplier_upgrades || 0;
    this.rabbitRarity = data?.rabbit_rarity_upgrades || 0;
  }
}

export default SkyBlockMemberChocolateFactoryUpgrades;
