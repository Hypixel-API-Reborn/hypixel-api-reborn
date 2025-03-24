import SkyblockMemberDungeonsFloor from './SkyblockMemberDungeonsFloor.js';
import type { DungeonGamemode } from '../../../../Types/Skyblock.js';

class SkyblockMemberDungeonsMode {
  highestFloorCompleted: number;
  floor0: SkyblockMemberDungeonsFloor | null;
  floor1: SkyblockMemberDungeonsFloor;
  floor2: SkyblockMemberDungeonsFloor;
  floor3: SkyblockMemberDungeonsFloor;
  floor4: SkyblockMemberDungeonsFloor;
  floor5: SkyblockMemberDungeonsFloor;
  floor6: SkyblockMemberDungeonsFloor;
  floor7: SkyblockMemberDungeonsFloor;
  constructor(data: Record<string, any>, type: DungeonGamemode) {
    this.highestFloorCompleted = data?.[type]?.highest_tier_completed || 0;
    this.floor0 = 'catacombs' === type ? new SkyblockMemberDungeonsFloor(data?.[type] || {}, '0') : null;
    this.floor1 = new SkyblockMemberDungeonsFloor(data?.[type] || {}, '1');
    this.floor2 = new SkyblockMemberDungeonsFloor(data?.[type] || {}, '2');
    this.floor3 = new SkyblockMemberDungeonsFloor(data?.[type] || {}, '3');
    this.floor4 = new SkyblockMemberDungeonsFloor(data?.[type] || {}, '4');
    this.floor5 = new SkyblockMemberDungeonsFloor(data?.[type] || {}, '5');
    this.floor6 = new SkyblockMemberDungeonsFloor(data?.[type] || {}, '6');
    this.floor7 = new SkyblockMemberDungeonsFloor(data?.[type] || {}, '7');
  }

  toString(): number {
    return this.highestFloorCompleted;
  }
}

export default SkyblockMemberDungeonsMode;
