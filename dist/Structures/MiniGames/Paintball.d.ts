import type { PaintballHats } from '../../Types/Player.js';
declare class Paintball {
    coins: number;
    kills: number;
    deaths: number;
    KDR: number;
    wins: number;
    shotsFired: number;
    killStreaks: number;
    forceFieldTime: number;
    hat: PaintballHats | 'None';
    adrenaline: number;
    endurance: number;
    fortune: number;
    godfather: number;
    superluck: number;
    transfusion: number;
    constructor(data: Record<string, any>);
}
export default Paintball;
//# sourceMappingURL=Paintball.d.ts.map