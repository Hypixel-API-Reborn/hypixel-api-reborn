import SkyblockMemberPetsAutoPetRule from './SkyblockMemberPetsAutoPetRule.js';

class SkyblockMemberPetsAutoPets {
  rulesLimit: number;
  rules: SkyblockMemberPetsAutoPetRule[];
  constructor(data: Record<string, any>) {
    this.rulesLimit = data?.rules_limit || 0;
    this.rules = (data?.rules || []).map((rule: Record<string, any>) => new SkyblockMemberPetsAutoPetRule(rule));
  }
}

export default SkyblockMemberPetsAutoPets;
