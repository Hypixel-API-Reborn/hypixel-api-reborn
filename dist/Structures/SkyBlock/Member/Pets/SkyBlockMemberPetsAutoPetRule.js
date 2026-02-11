class SkyBlockMemberPetsAutoPetRule {
    uuid;
    id;
    name;
    uniqueId;
    exceptions;
    disabled;
    data;
    constructor(data) {
        this.uuid = data?.uuid || 'UNKNOWN';
        this.id = data?.id || 'UNKNOWN';
        this.name = data?.name || 'UNKNOWN';
        this.uniqueId = data?.uniqueId || 'UNKNOWN';
        this.exceptions = data?.exceptions || [];
        this.disabled = data?.disabled || false;
        this.data = data?.data || {};
    }
    toString() {
        return this.name;
    }
}
export default SkyBlockMemberPetsAutoPetRule;
//# sourceMappingURL=SkyBlockMemberPetsAutoPetRule.js.map