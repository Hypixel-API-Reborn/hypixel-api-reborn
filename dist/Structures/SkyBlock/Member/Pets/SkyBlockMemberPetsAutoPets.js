import SkyBlockMemberPetsAutoPetRule from './SkyBlockMemberPetsAutoPetRule.js';
class SkyBlockMemberPetsAutoPets {
    rulesLimit;
    rules;
    constructor(data) {
        this.rulesLimit = data?.rules_limit || 0;
        this.rules = (data?.rules || []).map((rule) => new SkyBlockMemberPetsAutoPetRule(rule));
    }
}
export default SkyBlockMemberPetsAutoPets;
//# sourceMappingURL=SkyBlockMemberPetsAutoPets.js.map