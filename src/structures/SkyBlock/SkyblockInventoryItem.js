/**
 * Item class
 */
class SkyblockInventoryItem {
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
     * @type {string}
     */
    this.name =
      data.tag.display.Name !== null ? data.tag.display.Name.toString().replace(/§([1-9]|[a-f])|§/gm, '') : null;
    /**
     * Item lore
     * @type {string}
     */
    this.lore = data.tag.display.Lore.join('\n');
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
     * Hexadecimal color code of armor
     * @type {string|null}
     */
    this.color = data.tag.ExtraAttributes.color ?? data.tag.display.color ?? null;
    /**
     * Item enchantments
     * @type {Record<string, number>}
     */
    this.enchantments = data.tag.ExtraAttributes.enchantments ?? null;
    /**
     * Armor reforge
     * @type {string}
     */
    this.reforge = data.tag.ExtraAttributes.modifier ?? null;
    /**
     * Equipment gemstones (if any)
     * @type {SkyblockItemGemstone}
     */
    this.gemstones = data.tag.ExtraAttributes.gems
      ? Object.entries(data.tag.ExtraAttributes.gems).map((gem) => {
          // eslint-disable-next-line no-new-object
          return new Object({ type: gem[0].split('_')[0], quality: gem[1] });
        })
      : null;
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
     * @type {number}
     */
    this.dungeonStars = data.tag.ExtraAttributes.upgrade_level ?? 0;
    /**
     * Dungeon gear score of the item (or null if not present)
     * @author linearaccelerator
     * @type {number}
     */
    this.gearScore = parseGearScore(this.loreArray) || null;
    /**
     * UUID of the item
     * @type {string}
     */
    this.uuid = data.tag.ExtraAttributes.uuid ?? '';
    /**
     * Is the item soulbound
     * @type {boolean}
     */
    this.soulbound = data.tag.ExtraAttributes.donated_museum === 1;
    /**
     * Amount of art of war books applied to the item
     * @type {number}
     */
    this.artOfWar = data.tag.ExtraAttributes.art_of_war_count ?? 0;
    /**
     * Rune
     * @type {object}
     */
    this.rune = data.tag.ExtraAttributes.runes ?? null;
    /**
     * The amount of applied potato books
     * @type {number}
     */
    this.hotPotatoBooks = data.tag.ExtraAttributes.hot_potato_count ?? 0;
    /**
     * Is the item recombobulated
     * @type {boolean}
     */
    this.recombobulated = data.tag.ExtraAttributes.rarity_upgrades === 1;
    /**
     * Item attributes
     * @type {object}
     */
    this.attributes = data.tag.ExtraAttributes.attributes ?? {};
    /**
     * Hecatomb runs
     * @type {number}
     */
    this.hecatomb = data.tag.ExtraAttributes.hecatomb_s_runs ?? 0;
    /**
     * Champion xp
     * @type {number}
     */
    this.champion = data.tag.ExtraAttributes.champion_combat_xp ?? 0;
    /**
     * Cultivating
     * @type {number}
     */
    this.cultivating = data.tag.ExtraAttributes.farmed_cultivating ?? 0;
    /**
     * Expertise Kills
     * @type {number}
     */
    this.expertise = data.tag.ExtraAttributes.expertise_kills ?? 0;
    /**
     * Compact blocks Mined
     * @type {number}
     */
    this.compact = data.tag.ExtraAttributes.compact_blocks ?? 0;
    /**
     * Armadillos Blocks Walked
     * @type {number}
     */
    this.blocksWalked = data.tag.ExtraAttributes.blocks_walked ?? 0;
  }
  /**
   * Item Name
   * @return {string}
   */
  toString() {
    return this.name;
  }
}
// eslint-disable-next-line require-jsdoc
function parseRarity(stringContainingRarity) {
  const rarityArray = [
    'COMMON',
    'UNCOMMON',
    'RARE',
    'EPIC',
    'LEGENDARY',
    'MYTHIC',
    'DIVINE',
    'SPECIAL',
    'VERY SPECIAL'
  ];
  for (const rarity of rarityArray) {
    if (stringContainingRarity.includes(rarity)) return rarity;
  }
}
// eslint-disable-next-line require-jsdoc
function parseGearScore(lore) {
  for (const line of lore) {
    if (line.match(/Gear Score: §[0-9a-f](\d+)/)) return Number(line.match(/Gear Score: §d(\d+)/)[1]);
  }
}

/**
 * @typedef {object} SkyblockItemGemstone
 * @property {string} type Gemstone type
 * @property {string} quality Gemstone quality (rough, flawed, fine, flawless, perfect)
 */

module.exports = SkyblockInventoryItem;
