import type { VampireZRoles } from '../../../Types/Player.js';
declare class VampireZRole {
    role: VampireZRoles;
    kills: number;
    deaths: number;
    KDR: number;
    wins: number;
    constructor(data: Record<string, any>, role: VampireZRoles);
}
export default VampireZRole;
//# sourceMappingURL=VampireZRole.d.ts.map