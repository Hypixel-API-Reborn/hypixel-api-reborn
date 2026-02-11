class SkyBlockElectionCandidatePerk {
    name;
    description;
    minister;
    constructor(data) {
        this.name = data?.name || 'UNKNOWN';
        this.description = data?.description || 'UNKNOWN';
        this.minister = data?.minister || false;
    }
    toString() {
        return this.name;
    }
}
export default SkyBlockElectionCandidatePerk;
//# sourceMappingURL=SkyBlockElectionCandidatePerk.js.map