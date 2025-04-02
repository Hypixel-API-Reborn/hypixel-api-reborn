import SkyBlockMemberDungeonsFloor from './SkyBlockMemberDungeonsFloor.js';
import type { DungeonGamemode } from '../../../../Types/SkyBlock.js';

class SkyBlockMemberDungeonsMode {
  highestFloorCompleted: number;
  floor0: SkyBlockMemberDungeonsFloor | null;
  floor1: SkyBlockMemberDungeonsFloor;
  floor2: SkyBlockMemberDungeonsFloor;
  floor3: SkyBlockMemberDungeonsFloor;
  floor4: SkyBlockMemberDungeonsFloor;
  floor5: SkyBlockMemberDungeonsFloor;
  floor6: SkyBlockMemberDungeonsFloor;
  floor7: SkyBlockMemberDungeonsFloor;
  constructor(data: Record<string, any>, type: DungeonGamemode) {
    this.highestFloorCompleted = data?.[type]?.highest_tier_completed || 0;
    this.floor0 = 'catacombs' === type ? new SkyBlockMemberDungeonsFloor(data?.[type] || {}, '0') : null;
    this.floor1 = new SkyBlockMemberDungeonsFloor(data?.[type] || {}, '1');
    this.floor2 = new SkyBlockMemberDungeonsFloor(data?.[type] || {}, '2');
    this.floor3 = new SkyBlockMemberDungeonsFloor(data?.[type] || {}, '3');
    this.floor4 = new SkyBlockMemberDungeonsFloor(data?.[type] || {}, '4');
    this.floor5 = new SkyBlockMemberDungeonsFloor(data?.[type] || {}, '5');
    this.floor6 = new SkyBlockMemberDungeonsFloor(data?.[type] || {}, '6');
    this.floor7 = new SkyBlockMemberDungeonsFloor(data?.[type] || {}, '7');
  }

  toString(): number {
    return this.highestFloorCompleted;
  }
}

export default SkyBlockMemberDungeonsMode;
