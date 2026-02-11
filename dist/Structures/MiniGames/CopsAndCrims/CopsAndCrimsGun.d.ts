import type { CopsAndCrimsGuns } from '../../../Types/Player.js';
declare class CopsAndCrimsGun {
    gunName: CopsAndCrimsGuns;
    damageIncrease: number;
    recoilReduction: number;
    reloadSpeedReduction: number;
    costReduction: number;
    kills: number;
    headShots: number;
    constructor(data: Record<string, any>, gunName: CopsAndCrimsGuns);
}
export default CopsAndCrimsGun;
//# sourceMappingURL=CopsAndCrimsGun.d.ts.map