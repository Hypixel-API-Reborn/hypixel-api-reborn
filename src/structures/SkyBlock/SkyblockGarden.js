const { getLevelByXp } = require('../../utils/SkyblockUtils');

/**
 * Skyblock Garden class
 */
class SkyblockGarden {
  /**
   * @param {object} data Skyblock member data
   */
  constructor(data) {
    /**
     * level
     * @type {SkyblockSkillLevel}
     */
    this.level = getLevelByXp(data?.garden?.garden_experience || 0, 'garden');
    /**
     * Current Barn Skin
     * @type {string}
     */
    this.barnSkin = data.garden?.selected_barn_skin || '';
    /**
     * Unlocked Plots
     * @type {string[]}
     */
    this.unlockedPlots = data.garden?.unlocked_plots_ids || [];
    /**
     * Visitor Stats
     * @type {SkyblockGardenVisitor}
     */
    this.visitors = {
      visited: data.garden?.commission_data?.visits || {},
      completed: data.garden?.commission_data?.completed || {},
      served: {
        total: data.garden?.commission_data?.total_completed || 0,
        unique: data.garden?.commission_data?.unique_npcs_served || 0
      }
    };
    /**
     * Crop Milestones
     * @type {SkyblockGarenCrops}
     */
    this.cropMilestones = {
      wheat: data.garden?.resources_collected?.WHEAT || 0,
      carrot: data.garden?.resources_collected?.CARROT_ITEM || 0,
      sugarCane: data.garden?.resources_collected?.SUGAR_CANE || 0,
      potato: data.garden?.resources_collected?.POTATO_ITEM || 0,
      pumpkin: data.garden?.resources_collected?.PUMPKIN || 0,
      melon: data.garden?.resources_collected?.MELON || 0,
      cactus: data.garden?.resources_collected?.CACTUS || 0,
      cocoBeans: data.garden?.resources_collected?.['INK_SACK:3'] || 0,
      mushroom: data.garden?.resources_collected?.MUSHROOM_COLLECTION || 0,
      netherWart: data.garden?.resources_collected?.NETHER_STALK || 0
    };
    /**
     * Composter
     * @type {SkyblockGardenComposter}
     */
    this.composter = {
      organicMatter: data.garden?.composter_data?.organic_matter || 0,
      fuelUnits: data.garden?.composter_data?.fuel_units || 0,
      compostUnits: data.garden?.composter_data?.compost_units || 0,
      compostItems: data.garden?.composter_data?.compost_items || 0,
      conversionTicks: data.garden?.composter_data?.conversion_ticks || 0,
      upgrades: {
        speed: data.garden?.composter_data?.upgrades?.speed || 0,
        multiDrop: data.garden?.composter_data?.upgrades?.multi_drop || 0,
        fuelCap: data.garden?.composter_data?.upgrades?.fuel_cap || 0,
        organicMatterCap: data.garden?.composter_data?.upgrades?.organic_matter_cap || 0,
        costReduction: data.garden?.composter_data?.upgrades?.cost_reduction || 0
      }
    };
    /**
     * Crop Upgrades
     * @type {SkyblockGarenCrops}
     */
    this.cropUpgrades = {
      wheat: data.garden?.crop_upgrade_levels?.WHEAT || 0,
      carrot: data.garden?.crop_upgrade_levels?.CARROT_ITEM || 0,
      sugarCane: data.garden?.crop_upgrade_levels?.SUGAR_CANE || 0,
      potato: data.garden?.crop_upgrade_levels?.POTATO_ITEM || 0,
      pumpkin: data.garden?.crop_upgrade_levels?.PUMPKIN || 0,
      melon: data.garden?.crop_upgrade_levels?.MELON || 0,
      cactus: data.garden?.crop_upgrade_levels?.CACTUS || 0,
      cocoBeans: data.garden?.crop_upgrade_levels?.['INK_SACK:3'] || 0,
      mushroom: data.garden?.crop_upgrade_levels?.MUSHROOM_COLLECTION || 0,
      netherWart: data.garden?.crop_upgrade_levels?.NETHER_STALK || 0
    };
  }
}

/**
 * @typedef {object} SkyblockGardenVisitor
 * @property {Record<string, number>} visited Visited
 * @property {Record<string, number>} completed Completed
 * @property {SkyblockGardenVisitorServed} served served
 */
/**
 * @typedef {object} SkyblockGardenVisitorServed
 * @property {number} total total
 * @property {number} unique unique
 */
/**
 * @typedef {object} SkyblockGardenComposter
 * @property {number} organicMatter Organic Matter
 * @property {number} fuelUnits Fuel Units
 * @property {number} compostUnits Compost Units
 * @property {number} compostItems Compost Items
 * @property {number} conversionTicks Conversion Ticks
 * @property {SkyblockGardenComposterUpgrades} upgrades upgrades
 */
/**
 * @typedef {object} SkyblockGardenComposterUpgrades
 * @property {number} speed Speed
 * @property {number} multiDrop Multi Drop
 * @property {number} fuelCap Fuel Cap
 * @property {number} organicMatterCap Organic Matter Cap
 * @property {number} costReduction Cost Reduction
 */
/**
 * @typedef {object} SkyblockGarenCrops
 * @property {number} wheat Wheat
 * @property {number} carrot Carrot
 * @property {number} sugarCane Sugar Cane
 * @property {number} potato Potato
 * @property {number} pumpkin Pumpkin
 * @property {number} melon Melon
 * @property {number} cactus Cactus
 * @property {number} cocoBeans Coco Beans
 * @property {number} mushroom Mushroom
 * @property {number} netherWart Nether Wart
 */

module.exports = SkyblockGarden;
