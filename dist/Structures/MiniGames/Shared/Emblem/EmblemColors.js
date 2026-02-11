class EmblemColors {
    aqua;
    black;
    blue;
    darkAqua;
    darkBlue;
    darkGray;
    darkGreen;
    darkPurple;
    darkRed;
    gray;
    green;
    lightPurple;
    red;
    yellow;
    constructor(data) {
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
//# sourceMappingURL=EmblemColors.js.map