import type { ColorCode, ColorHex, ColorString, InGameCode } from '../Types/Color.js';

const ColorStrings: { [key: string]: ColorString } = {
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

const ColorHexs: { [key: string]: ColorHex } = {
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

const InGameCodes: { [key: string]: InGameCode } = {
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

class Color {
  color: ColorCode;
  constructor(color: ColorCode) {
    this.color = color;
  }

  toString(): ColorString {
    return ColorStrings[this.color] as ColorString;
  }

  toHex(): ColorHex {
    return ColorHexs[this.color] as ColorHex;
  }

  toCode(): ColorCode {
    return this.color;
  }

  toInGameCode(): InGameCode {
    return InGameCodes[this.color] as InGameCode;
  }
}

export default Color;
