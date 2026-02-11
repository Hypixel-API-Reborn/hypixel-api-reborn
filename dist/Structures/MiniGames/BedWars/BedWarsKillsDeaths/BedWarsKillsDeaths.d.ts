import BedWarsKillsDeathsType from './BedWarsKillsDeathsType.js';
import type { BedWarsModeId } from '../../../../Types/Player.js';
declare class BedWarsKillsDeaths {
    total: BedWarsKillsDeathsType;
    custom: BedWarsKillsDeathsType;
    drowning: BedWarsKillsDeathsType;
    entityAttack: BedWarsKillsDeathsType;
    entityExplosion: BedWarsKillsDeathsType;
    fall: BedWarsKillsDeathsType;
    fire: BedWarsKillsDeathsType;
    fireTick: BedWarsKillsDeathsType;
    magic: BedWarsKillsDeathsType;
    projectile: BedWarsKillsDeathsType;
    suffocation: BedWarsKillsDeathsType;
    void: BedWarsKillsDeathsType;
    fallingBlock: BedWarsKillsDeathsType;
    lava: BedWarsKillsDeathsType;
    contact: BedWarsKillsDeathsType;
    thorns: BedWarsKillsDeathsType;
    wither: BedWarsKillsDeathsType;
    blockExplosion: BedWarsKillsDeathsType;
    constructor(data: Record<string, any>, mode?: BedWarsModeId, finals?: boolean);
}
export default BedWarsKillsDeaths;
//# sourceMappingURL=BedWarsKillsDeaths.d.ts.map