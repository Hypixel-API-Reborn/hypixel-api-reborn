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
  }
  /**
   * Item Name
   * @return {string}
   */
  toString() {
    return this.name;
  }
}

module.exports = SkyblockInventoryItem;
