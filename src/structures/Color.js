/**
 * @param {ColorCode} color Color code
 */
class Color {
  constructor (color) {
    this.color = color;
  }

  /**
   * Returns regular color name
   * @returns {ColorString}
   */
  toString () {
    const ColorStrings = {
      BLACK: 'Black',
      DARK_BLUE: 'Dark Blue',
      DARK_GREEN: 'Dark Green',
      DARK_AQUA: 'Dark Aqua',
      DARK_RED: 'Dark Red',
      DARK_PURPLE: 'Dark Purple',
      GOLD: 'Gold',
      GRAY: 'Gray',
      DARK_GRAY: 'Dark Gray',
      BLUE: 'Blue',
      GREEN: 'Green',
      AQUA: 'Aqua',
      RED: 'Red',
      LIGHT_PURPLE: 'Light Purple',
      YELLOW: 'Yellow',
      WHITE: 'White'
    };
    return ColorStrings[this.color];
  }

  /**
   * Returns color HEX code
   * @returns {ColorHex}
   */
  toHex () {
    const ColorHex = {
      BLACK: '#000000',
      DARK_BLUE: '#0000AA',
      DARK_GREEN: '#008000',
      DARK_AQUA: '#00AAAA',
      DARK_RED: '#AA0000',
      DARK_PURPLE: '#AA00AA',
      GOLD: '#FFAA00',
      GRAY: '#AAAAAA',
      DARK_GRAY: '#555555',
      BLUE: '#5555FF',
      GREEN: '#3CE63C',
      AQUA: '#3CE6E6',
      RED: '#FF5555',
      LIGHT_PURPLE: '#FF55FF',
      YELLOW: '#FFFF55',
      WHITE: '#FFFFFF'
    };
    return ColorHex[this.color];
  }

  /**
   * Returns color code
   * @returns {ColorCode}
   */
  toCode () {
    return this.color;
  }
}
/**
 * @typedef {string} ColorCode
 * * `BLACK`
 * * `DARK_BLUE`
 * * `DARK_GREEN`
 * * `DARK_AQUA`
 * * `DARK_RED`
 * * `DARK_PURPLE`
 * * `GOLD`
 * * `GRAY`
 * * `DARK_GRAY`
 * * `BLUE`
 * * `GREEN`
 * * `AQUA`
 * * `RED`
 * * `LIGHT_PURPLE`
 * * `YELLOW`
 * * `WHITE`
 */
/**
 * @typedef {string} ColorString
 * * BLACK: `Black`
 * * DARK_BLUE: `Dark Blue`
 * * DARK_GREEN: `Dark Green`
 * * DARK_AQUA: `Dark Aqua`
 * * DARK_RED: `Dark Red`
 * * DARK_PURPLE: `Dark Purple`
 * * GOLD: `Gold`
 * * GRAY: `Gray`
 * * DARK_GRAY: `Dark Gray`
 * * BLUE: `Blue`,
 * * GREEN: `Green`
 * * AQUA: `Aqua`
 * * RED: `Red`
 * * LIGHT_PURPLE: `Light Purple`
 * * YELLOW: `Yellow`
 * * WHITE: `White`
 */
/**
 * @typedef {string} ColorHex
 * * BLACK: `#000000`
 * * DARK_BLUE: `#0000AA`
 * * DARK_GREEN: `#008000`
 * * DARK_AQUA: `#00AAAA`
 * * DARK_RED: `#AA0000`
 * * DARK_PURPLE: `#AA00AA`
 * * GOLD: `#FFAA00`
 * * GRAY: `#AAAAAA`
 * * DARK_GRAY: `#555555`
 * * BLUE: `#5555FF`
 * * GREEN: `#3CE63C`
 * * AQUA: `#3CE6E6`
 * * RED: `#FF5555`
 * * LIGHT_PURPLE: `#FF55FF`
 * * YELLOW: `#FFFF55`
 * * WHITE: `#FFFFFF`
 */
module.exports = Color;
