import SkyBlockMemberPetsAutoPetRule from './SkyBlockMemberPetsAutoPetRule.js';

class SkyBlockMemberPetsAutoPets {
  rulesLimit: number;
  rules: SkyBlockMemberPetsAutoPetRule[];
  constructor(data: Record<string, any>) {
    this.rulesLimit = data?.rules_limit || 0;
    this.rules = (data?.rules || []).map((rule: Record<string, any>) => new SkyBlockMemberPetsAutoPetRule(rule));
  }
}

export default SkyBlockMemberPetsAutoPets;
