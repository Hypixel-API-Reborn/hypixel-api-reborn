import { getLevelByXp } from '../../../../Utils/SkyBlockUtils.js';
class SkyBlockMemberDungeonsClasses {
    selected;
    healer;
    berserk;
    mage;
    archer;
    tank;
    average;
    constructor(data) {
        this.selected = data?.selected_dungeon_class || 'UNKNOWN';
        this.healer = getLevelByXp(data?.player_classes?.healer?.experience || 0, { type: 'dungeoneering' });
        this.berserk = getLevelByXp(data?.player_classes?.berserk?.experience || 0, { type: 'dungeoneering' });
        this.mage = getLevelByXp(data?.player_classes?.mage?.experience || 0, { type: 'dungeoneering' });
        this.archer = getLevelByXp(data?.player_classes?.archer?.experience || 0, { type: 'dungeoneering' });
        this.tank = getLevelByXp(data?.player_classes?.tank?.experience || 0, { type: 'dungeoneering' });
        this.average = (this.healer.level + this.berserk.level + this.mage.level + this.archer.level + this.tank.level) / 5;
    }
    toString() {
        return this.selected;
    }
}
export default SkyBlockMemberDungeonsClasses;
//# sourceMappingURL=SkyBlockMemberDungeonsClasses.js.map