class EmblemColors {
  aqua: boolean;
  black: boolean;
  blue: boolean;
  darkAqua: boolean;
  darkBlue: boolean;
  darkGray: boolean;
  darkGreen: boolean;
  darkPurple: boolean;
  darkRed: boolean;
  gray: boolean;
  green: boolean;
  lightPurple: boolean;
  red: boolean;
  yellow: boolean;
  constructor(data: Record<string, any>) {
    this.aqua = data?.aqua || false;
    this.black = data?.black || false;
    this.blue = data?.blue || false;
    this.darkAqua = data?.dark_aqua || false;
    this.darkBlue = data?.dark_blue || false;
    this.darkGray = data?.dark_gray || false;
    this.darkGreen = data?.dark_green || false;
    this.darkPurple = data?.dark_purple || false;
    this.darkRed = data?.dark_red || false;
    this.gray = data?.gray || false;
    this.green = data?.green || false;
    this.lightPurple = data?.light_purple || false;
    this.red = data?.red || false;
    this.yellow = data?.yellow || false;
  }
}

export default EmblemColors;
