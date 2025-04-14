import type { UUID, UserInput } from '../../../../Types/Global.js';

class SkyBlockMemberPetsAutoPetRule {
  uuid: UUID;
  id: string;
  name: UserInput | 'UNKNOWN';
  uniqueId: string;
  exceptions: Record<string, any>[];
  disabled: boolean;
  data: Record<string, any>;
  constructor(data: Record<string, any>) {
    this.uuid = data?.uuid || 'UNKNOWN';
    this.id = data?.id || 'UNKNOWN';
    this.name = data?.name || 'UNKNOWN';
    this.uniqueId = data?.uniqueId || 'UNKNOWN';
    this.exceptions = data?.exceptions || [];
    this.disabled = data?.disabled || false;
    this.data = data?.data || {};
  }

  toString(): string {
    return this.name;
  }
}

export default SkyBlockMemberPetsAutoPetRule;
