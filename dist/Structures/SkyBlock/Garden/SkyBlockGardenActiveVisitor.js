import SkyBlockGardenActiveVisitorRequirement from './SkyBlockGardenActiveVisitorRequirement.js';
class SkyBlockGardenActiveVisitor {
    visitor;
    requirements;
    status;
    position;
    constructor(data, name) {
        this.visitor = name;
        this.requirements = (data?.requirement || []).map((requirement) => new SkyBlockGardenActiveVisitorRequirement(requirement));
        this.status = data?.status || 'UNKNOWN';
        this.position = data?.position || 1;
    }
    toString() {
        return this.visitor;
    }
}
export default SkyBlockGardenActiveVisitor;
//# sourceMappingURL=SkyBlockGardenActiveVisitor.js.map