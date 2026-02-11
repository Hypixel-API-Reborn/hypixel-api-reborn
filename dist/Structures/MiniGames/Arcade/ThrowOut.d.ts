import type { ArcadeThrowOutDisguise } from '../../../Types/Player.js';
declare class ThrowOut {
    deaths: number;
    kills: number;
    wins: number;
    disguise: ArcadeThrowOutDisguise | 'UNKNOWN';
    constructor(data: Record<string, any>);
}
export default ThrowOut;
//# sourceMappingURL=ThrowOut.d.ts.map