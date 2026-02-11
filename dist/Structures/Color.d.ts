import type { ColorCode, ColorHex, ColorString, InGameCode } from '../Types/Color.js';
declare class Color {
    color: ColorCode;
    constructor(color: ColorCode);
    toString(): ColorString;
    toHex(): ColorHex;
    toCode(): ColorCode;
    toInGameCode(): InGameCode;
}
export default Color;
//# sourceMappingURL=Color.d.ts.map