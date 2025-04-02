import SkyBlockGardenActiveVisitorRequirement from './SkyBlockGardenActiveVisitorRequirement.js';
import type { VisitorStatus } from '../../../Types/SkyBlock.js';

class SkyBlockGardenActiveVisitor {
  visitor: string;
  requirements: SkyBlockGardenActiveVisitorRequirement[];
  status: VisitorStatus | 'UNKNOWN';
  position: number;
  constructor(data: Record<string, any>, name: string) {
    this.visitor = name;
    this.requirements = (data?.requirement || []).map(
      (requirement: Record<string, any>) => new SkyBlockGardenActiveVisitorRequirement(requirement)
    );
    this.status = data?.status || 'UNKNOWN';
    this.position = data?.position || 1;
  }

  toString(): string {
    return this.visitor;
  }
}

export default SkyBlockGardenActiveVisitor;
