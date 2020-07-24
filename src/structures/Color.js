class Color {
  /**
     *
     * @param {String} color
     */
  constructor (color) {
    this.color = color;
  }

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
   * @returns {String} string
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
   * @returns {String} string
   */
  toCode () {
    return this.color;
  }
}
module.exports = Color;
