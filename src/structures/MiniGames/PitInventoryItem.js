/**
 * Item class
 */
class PitInventoryItem {
  /**
   * @param {object} data Item data
   */
  constructor(data) {
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
     * @type {string|null}
     */
    this.name = data?.tag?.display?.Name ? data.tag.display.Name.toString().replace(/§([1-9]|[a-f])|§/gm, '') : null;
    /**
     * Item lore
     * @type {string|null}
     */
    this.lore = data?.tag?.display?.Lore ? data.tag.display.Lore.join('<br>') : null;
    /**
     * Item lore
     * @type {string[]|null}
     */
    this.loreArray = data?.tag?.display?.Lore ?? null;
    /**
     * Item Extra Attributes
     * @type {object|null}
     */

    this.extraAttributes = data?.tag?.ExtraAttributes ?? null;
  }
}

module.exports = PitInventoryItem;
