import SkyBlockMemberDungeonsFloor from './SkyBlockMemberDungeonsFloor.js';
class SkyBlockMemberDungeonsMode {
    highestFloorCompleted;
    floor0;
    floor1;
    floor2;
    floor3;
    floor4;
    floor5;
    floor6;
    floor7;
    constructor(data, type) {
        this.highestFloorCompleted = data?.[type]?.highest_tier_completed || 0;
        this.floor0 = type === 'catacombs' ? new SkyBlockMemberDungeonsFloor(data?.[type] || {}, '0') : null;
        this.floor1 = new SkyBlockMemberDungeonsFloor(data?.[type] || {}, '1');
        this.floor2 = new SkyBlockMemberDungeonsFloor(data?.[type] || {}, '2');
        this.floor3 = new SkyBlockMemberDungeonsFloor(data?.[type] || {}, '3');
        this.floor4 = new SkyBlockMemberDungeonsFloor(data?.[type] || {}, '4');
        this.floor5 = new SkyBlockMemberDungeonsFloor(data?.[type] || {}, '5');
        this.floor6 = new SkyBlockMemberDungeonsFloor(data?.[type] || {}, '6');
        this.floor7 = new SkyBlockMemberDungeonsFloor(data?.[type] || {}, '7');
    }
    toString() {
        return this.highestFloorCompleted;
    }
}
export default SkyBlockMemberDungeonsMode;
//# sourceMappingURL=SkyBlockMemberDungeonsMode.js.map