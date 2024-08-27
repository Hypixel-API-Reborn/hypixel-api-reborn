const SkyblockInventoryItem = require('./SkyblockInventoryItem');
/**
 * Item class
 */
class SkyblockMuseumItem {
  /**
   * @param {object} data Item data
   */
  constructor(data) {
    /**
     * Item name
     * @type {string|null}
     **/
    this.name = data.name;
    /**
     * Item
     * @type {SkyblockInventoryItem[]}
     */
    this.items = [];
    data.decoded.forEach((item) => {
      if (!item.tag) return;
      this.items.push(new SkyblockInventoryItem(item));
    });
    /**
     * Donated Time
     * @type {number}
     */
    this.donatedTime = data.donatedTime;
    /**
     * Donated Time as Date
     * @type {Date}
     */
    this.donatedTimeAt = new Date(data.donatedTime);
    /**
     * Borrowing
     * @type {boolean}
     */
    this.borrowing = data.borrowing;
    /**
     * Featured Slot
     * @type {string|null}
     */
    this.featuredSlot = data.featuredSlot;
  }
  /**
   * Item Name
   * @return {string}
   */
  toString() {
    return this.name;
  }
}

module.exports = SkyblockMuseumItem;
