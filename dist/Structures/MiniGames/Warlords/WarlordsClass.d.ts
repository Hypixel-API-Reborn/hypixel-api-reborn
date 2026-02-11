import type { WarlordsClasses } from '../../../Types/Player.js';
declare class WarlordsClass {
    wins: number;
    losses: number;
    WLR: number;
    gamesPlayed: number;
    damage: number;
    heal: number;
    damagePrevented: number;
    constructor(data: Record<string, any>, className: WarlordsClasses);
}
export default WarlordsClass;
//# sourceMappingURL=WarlordsClass.d.ts.map