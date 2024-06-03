/**
 * Color class
 */
class Color {
  /**
   * @param {ColorCode} color Color code
   * @example
   */
  constructor(color) {
    this.color = color;
  }

  /**
   * Returns regular color name
   * @return {ColorString}
   * @example
   */
  toString() {
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
   * @return {ColorHex}
   * @example
   */
  toHex() {
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
   * @return {ColorCode}
   * @example
   */
  toCode() {
    return this.color;
  }

  /**
   * Returns color code
   * @return {InGameCode}
   * @example
   */
  toInGameCode() {
    const InGameCodes = {
      BLACK: '§0',
      DARK_BLUE: '§1',
      DARK_GREEN: '§2',
      DARK_AQUA: '§3',
      DARK_RED: '§4',
      DARK_PURPLE: '§5',
      GOLD: '§6',
      GRAY: '§7',
      DARK_GRAY: '§8',
      BLUE: '§9',
      GREEN: '§a',
      AQUA: '§b',
      RED: '§c',
      LIGHT_PURPLE: '§d',
      YELLOW: '§e',
      WHITE: '§f'
    };
    return InGameCodes[this.color];
  }
}
/**
 * @typedef {string} ColorCode
 * * 'BLACK'
 * * 'DARK_BLUE'
 * * 'DARK_GREEN'
 * * 'DARK_AQUA'
 * * 'DARK_RED'
 * * 'DARK_PURPLE'
 * * 'GOLD'
 * * 'GRAY'
 * * 'DARK_GRAY'
 * * 'BLUE'
 * * 'GREEN'
 * * 'AQUA'
 * * 'RED'
 * * 'LIGHT_PURPLE'
 * * 'YELLOW'
 * * 'WHITE'
 */
/**
 * @typedef {string} ColorString
 * * BLACK: 'Black'
 * * DARK_BLUE: 'Dark Blue'
 * * DARK_GREEN: 'Dark Green'
 * * DARK_AQUA: 'Dark Aqua'
 * * DARK_RED: 'Dark Red'
 * * DARK_PURPLE: 'Dark Purple'
 * * GOLD: 'Gold'
 * * GRAY: 'Gray'
 * * DARK_GRAY: 'Dark Gray'
 * * BLUE: 'Blue`'
 * * GREEN: 'Green'
 * * AQUA: 'Aqua'
 * * RED: 'Red'
 * * LIGHT_PURPLE: 'Light Purple'
 * * YELLOW: 'Yellow'
 * * WHITE: 'White'
 */
/**
 * @typedef {string} ColorHex
 * * BLACK: '#000000'
 * * DARK_BLUE: '#0000AA'
 * * DARK_GREEN: '#008000'
 * * DARK_AQUA: '#00AAAA'
 * * DARK_RED: '#AA0000'
 * * DARK_PURPLE: '#AA00AA'
 * * GOLD: '#FFAA00'
 * * GRAY: '#AAAAAA'
 * * DARK_GRAY: '#555555'
 * * BLUE: '#5555FF'
 * * GREEN: '#3CE63C'
 * * AQUA: '#3CE6E6'
 * * RED: '#FF5555'
 * * LIGHT_PURPLE: '#FF55FF'
 * * YELLOW: '#FFFF55'
 * * WHITE: '#FFFFFF'
 */
/**
 * @typedef {string} InGameCode
 * * BLACK: '§0'
 * * DARK_BLUE: '§1'
 * * DARK_GREEN: '§2'
 * * DARK_AQUA: '§3'
 * * DARK_RED: '§4'
 * * DARK_PURPLE: '§5'
 * * GOLD: '§6'
 * * GRAY: '§7'
 * * DARK_GRAY: '§8'
 * * BLUE: '§9'
 * * GREEN: '§a'
 * * AQUA: '§b'
 * * RED: '§c'
 * * LIGHT_PURPLE: '§d'
 * * YELLOW: '§e'
 * * WHITE: '§f'
 */
module.exports = Color;
