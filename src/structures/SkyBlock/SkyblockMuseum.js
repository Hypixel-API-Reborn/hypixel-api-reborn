const SkyblockMuseumItem = require('./SkyblockMuseumItem');
const { decode } = require('../../utils/SkyblockUtils');
/**
 * Skyblock Museum class
 */
class SkyblockMuseum {
  /**
   * @param {object} data Skyblock member data
   * @example
   */
  constructor(data) {
    /**
     * Raw data
     * @type {object}
     */
    this.raw = data.m.members?.[data.uuid] ?? {};
    /**
     * Normal Items
     * @returns {SkyblockMuseumItem[]}
     * @example
     */
    this.getItems = async () => {
      const keys = Object.keys(data.m.members[data.uuid].items);
      const items = [];
      for (const key of keys) {
        const decoded = await decode(data.m.members[data.uuid].items[key].items.data);
        items.push(
          new SkyblockMuseumItem({
            decoded: decoded,
            borrowing: data.m.members[data.uuid].items[key].borrowing ?? false,
            featuredSlot: data.m.members[data.uuid].items[key].featured_slot ?? null,
            donatedTime: data.m.members[data.uuid].items[key].donated_time,
            name: key.toLowerCase().replace(/_/g, ' ')
          })
        );
      }
      return items;
    };
    /**
     * Special items
     * @returns {SkyblockMuseumItem[]}
     * @example
     */
    this.getSpecial = async () => {
      const items = [];
      for (const item of data.m.members[data.uuid].special) {
        const decoded = await decode(item.items.data);
        items.push(
          new SkyblockMuseumItem({
            decoded: decoded,
            borrowing: item.borrowing ?? false,
            featuredSlot: item.featured_slot ?? null,
            donatedTime: item.donated_time,
            name: null
          })
        );
      }
      return items;
    };
  }
}

module.exports = SkyblockMuseum;
