/**
 * Item class
 */
class SkyblockInventoryItem {
  /**
   * @param {object} data Item data
   */
  constructor (data) {
    /**
     * Item ID
     * @type {number}
     */
    this.itemId = data.id || 0;
    /**
     * Item count
     * @type {number}
     */
    this.count = data.Count || 0;
    /**
     * Item name
     * @type {string}
     */
    this.name = data.tag.display.Name !== null ? data.tag.display.Name.toString().replace(/§([1-9]|[a-f])|§/gm, '') : null;
    /**
     * Item lore
     * @type {string}
     */
    this.lore = data.tag.display.Lore.join('<br>');
    /**
     * Item lore
     * @type {string[]}
     */
    this.loreArray = data.tag.display.Lore;
    /**
     * Item lore for embed
     * @type {string}
     */
    this.loreForEmbed = this.lore.replace(/§([0-9]|[a-f])|§/gm, '').replace(/<br>/gm, '\n');
    /**
     * Item enchantments
     * @type {object}
     */
    this.enchantments = data.tag.ExtraAttributes.enchantments ? data.tag.ExtraAttributes.enchantments : null;
    /**
     * Anvil uses
     * @type {number}
     */
    this.anvilUses = data.tag.ExtraAttributes.anvil_uses ? data.tag.ExtraAttributes.anvil_uses : 0;
    /**
     * Damage
     * @type {number}
     */
    this.damage = data.Damage || 0;
    /**
     * What rarity the item has, as an uppercase string
     * @author linearaccelerator
     * @type {string}
     * @version >6.0.1
     */
    this.rarity = parseRarity(this.loreArray[this.loreArray.length - 1]);
    /**
     * The amount of dungeon stars the item has (each star equates to a 10% stat boost while in dungeons)
     * @author linearaccelerator
     * @type {number}
     */
    this.dungeonStars = this.name.match(/(\u272a)/g) ? this.name.match(/(\u272a)/g).length : 0;
    /**
     * Dungeon gear score of the item (or null if not present)
     * @author linearaccelerator
     * @type {number}
     */
    this.gearScore = parseGearScore(this.loreArray) || null;
  }
  /**
   * Item Name
   * @return {string}
   */
  toString () {
    return this.name;
  }
}
/**
 * parses rarity
 * @param {string} stringContainingRarity
 * @return {string}
 */
function parseRarity (stringContainingRarity) {
  const rarityArray = ['COMMON', 'UNCOMMON', 'RARE', 'EPIC', 'LEGENDARY', 'MYTHIC', 'SUPREME', 'SPECIAL', 'VERY SPECIAL'];
  for (const rarity of rarityArray) {
    if (stringContainingRarity.includes(rarity)) return rarity;
  }
}
/**
 * @param {string[]} lore
 * @return {number}
 */
function parseGearScore (lore) {
  for (const line of lore) {
    if (line.match(/Gear Score: §[0-9a-f](\d+)/)) return Number(line.match(/Gear Score: §d(\d+)/)[1]);
  }
}
module.exports = SkyblockInventoryItem;
