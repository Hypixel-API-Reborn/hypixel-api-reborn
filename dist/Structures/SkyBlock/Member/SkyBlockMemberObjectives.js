class SkyBlockMemberObjectives {
    objectives;
    tutorial;
    constructor(data) {
        this.objectives = Object.keys(data)
            .filter((key) => key !== 'tutorial')
            .reduce((obj, key) => {
            obj[key] = data[key];
            return obj;
        }, {});
        this.tutorial = data?.tutorial || [];
    }
}
export default SkyBlockMemberObjectives;
//# sourceMappingURL=SkyBlockMemberObjectives.js.map