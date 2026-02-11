import PitInventoryItem from './PitInventoryItem.js';
import type { PitArmor } from '../../../Types/Player.js';
declare class Pit {
    prestige: number;
    xp: number;
    level: number;
    kills: number;
    deaths: number;
    KDR: number;
    assists: number;
    maxKillStreak: number;
    playtime: number;
    joins: number;
    damageReceived: number;
    damageDealt: number;
    damageRatio: number;
    meleeDamageReceived: number;
    meleeDamageDealt: number;
    swordHits: number;
    leftClicks: number;
    meleeAccuracy: number;
    meleeDamageRatio: number;
    bowDamageReceived: number;
    bowDamageDealt: number;
    arrowsHit: number;
    arrowsFired: number;
    bowAccuracy: number;
    bowDamageRatio: number;
    goldenHeadsEaten: number;
    getInventory: () => Promise<PitInventoryItem[]>;
    getEnterChest: () => Promise<PitInventoryItem[]>;
    getArmor: () => Promise<PitArmor>;
    constructor(data: Record<string, any>);
    private calcLevel;
}
export default Pit;
//# sourceMappingURL=Pit.d.ts.map