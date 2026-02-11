import SkyBlockMemberDungeonsFloorRun from './SkyBlockMemberDungeonsFloorRun.js';
declare class SkyBlockMemberDungeonsFloor {
    timesPlayed: number;
    bestRuns: SkyBlockMemberDungeonsFloorRun[];
    bestScore: number;
    mobsKilled: number;
    mostMobsKilled: number;
    mostDamageBerserk: number;
    mostDamageMage: number;
    mostDamageHealer: number;
    mostDamageArcher: number;
    mostDamageTank: number;
    mostHealing: number;
    watcherKills: number;
    fastestTimeS: number;
    fastestTimeSPlus: number;
    constructor(data: Record<string, any>, floorNumber: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7');
    toString(): number;
}
export default SkyBlockMemberDungeonsFloor;
//# sourceMappingURL=SkyBlockMemberDungeonsFloor.d.ts.map