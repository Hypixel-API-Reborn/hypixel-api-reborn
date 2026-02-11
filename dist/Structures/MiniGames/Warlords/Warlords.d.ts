import WarlordsClass from './WarlordsClass.js';
import type { WarlordsClasses } from '../../../Types/Player.js';
declare class Warlords {
    coins: number;
    kills: number;
    deaths: number;
    KDR: number;
    wins: number;
    losses: number;
    WLR: number;
    winStreak: number;
    assists: number;
    class: WarlordsClasses | 'None';
    pyromancer: WarlordsClass;
    mage: WarlordsClass;
    thunderlord: WarlordsClass;
    shaman: WarlordsClass;
    earthwarden: WarlordsClass;
    aquamancer: WarlordsClass;
    paladin: WarlordsClass;
    avenger: WarlordsClass;
    warrior: WarlordsClass;
    defender: WarlordsClass;
    cryomancer: WarlordsClass;
    crusader: WarlordsClass;
    berserker: WarlordsClass;
    protector: WarlordsClass;
    revenant: WarlordsClass;
    spiritguard: WarlordsClass;
    constructor(data: Record<string, any>);
}
export default Warlords;
//# sourceMappingURL=Warlords.d.ts.map