import type { UUID, UserInput } from '../../../../Types/Global.js';
declare class SkyBlockMemberPetsAutoPetRule {
    uuid: UUID;
    id: string;
    name: UserInput | 'UNKNOWN';
    uniqueId: string;
    exceptions: Record<string, any>[];
    disabled: boolean;
    data: Record<string, any>;
    constructor(data: Record<string, any>);
    toString(): string;
}
export default SkyBlockMemberPetsAutoPetRule;
//# sourceMappingURL=SkyBlockMemberPetsAutoPetRule.d.ts.map