import SkyblockGardenActiveVisitorRequirement from './SkyblockGardenActiveVisitorRequirement.js';
import type { VisitorStatus } from '../../../Types/Skyblock.js';

class SkyblockGardenActiveVisitor {
  visitor: string;
  requirements: SkyblockGardenActiveVisitorRequirement[];
  status: VisitorStatus | 'UNKNOWN';
  position: number;
  constructor(data: Record<string, any>, name: string) {
    this.visitor = name;
    this.requirements = (data?.requirement || []).map(
      (requirement: Record<string, any>) => new SkyblockGardenActiveVisitorRequirement(requirement)
    );
    this.status = data?.status || 'UNKNOWN';
    this.position = data?.position || 1;
  }

  toString(): string {
    return this.visitor;
  }
}

export default SkyblockGardenActiveVisitor;
