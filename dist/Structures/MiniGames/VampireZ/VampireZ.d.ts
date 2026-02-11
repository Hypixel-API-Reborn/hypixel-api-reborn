import VampireZRole from './VampireZRole.js';
declare class VampireZ {
    coins: number;
    goldBought: number;
    blood: boolean;
    zombieKills: number;
    human: VampireZRole;
    vampire: VampireZRole;
    kills: number;
    deaths: number;
    KDR: number;
    wins: number;
    constructor(data: Record<string, any>);
}
export default VampireZ;
//# sourceMappingURL=VampireZ.d.ts.map