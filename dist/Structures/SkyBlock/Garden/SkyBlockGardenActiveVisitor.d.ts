import SkyBlockGardenActiveVisitorRequirement from './SkyBlockGardenActiveVisitorRequirement.js';
import type { VisitorStatus } from '../../../Types/SkyBlock.js';
declare class SkyBlockGardenActiveVisitor {
    visitor: string;
    requirements: SkyBlockGardenActiveVisitorRequirement[];
    status: VisitorStatus | 'UNKNOWN';
    position: number;
    constructor(data: Record<string, any>, name: string);
    toString(): string;
}
export default SkyBlockGardenActiveVisitor;
//# sourceMappingURL=SkyBlockGardenActiveVisitor.d.ts.map