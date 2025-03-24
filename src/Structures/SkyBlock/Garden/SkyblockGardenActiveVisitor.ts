import type { VisitorStatus } from '../../../Types/Skyblock.js';

class SkyblockGardenActiveVisitor {
  visitor: string;
  requirements: { original_item: string; original_amount: number; item: string; amount: number }[];
  status: VisitorStatus | 'UNKNOWN';
  position: number;
  constructor(data: Record<string, any>, name: string) {
    this.visitor = name;
    this.requirements = data?.requirements || [];
    this.status = data?.status || 'UNKNOWN';
    this.position = data?.position || 1;
  }
}

export default SkyblockGardenActiveVisitor;
