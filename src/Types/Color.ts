export const ColorCodes = [
  'BLACK',
  'DARK_BLUE',
  'DARK_GREEN',
  'DARK_AQUA',
  'DARK_RED',
  'DARK_PURPLE',
  'GOLD',
  'GRAY',
  'DARK_GRAY',
  'BLUE',
  'GREEN',
  'AQUA',
  'RED',
  'LIGHT_PURPLE',
  'YELLOW',
  'WHITE'
] as const;
export type ColorCode = (typeof ColorCodes)[number];

export const ColorStrings = [
  'Black',
  'Dark Blue',
  'Dark Green',
  'Dark Aqua',
  'Dark Red',
  'Dark Purple',
  'Gold',
  'Gray',
  'Dark Gray',
  'Blue',
  'Green',
  'Aqua',
  'Red',
  'Light Purple',
  'Yellow',
  'White'
] as const;
export type ColorString = (typeof ColorStrings)[number];

export const ColorHexs = [
  '#000000',
  '#0000AA',
  '#008000',
  '#00AAAA',
  '#AA0000',
  '#AA00AA',
  '#FFAA00',
  '#AAAAAA',
  '#555555',
  '#5555FF',
  '#3CE63C',
  '#3CE6E6',
  '#FF5555',
  '#FF55FF',
  '#FFFF55',
  '#FFFFFF'
] as const;
export type ColorHex = (typeof ColorHexs)[number];

export const InGameCodes = [
  '§0',
  '§1',
  '§2',
  '§3',
  '§4',
  '§5',
  '§6',
  '§7',
  '§8',
  '§9',
  '§a',
  '§b',
  '§c',
  '§d',
  '§e',
  '§f'
] as const;
export type InGameCode = (typeof InGameCodes)[number];
