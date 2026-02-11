import SkyBlockMemberDungeonsFloor from './SkyBlockMemberDungeonsFloor.js';
import type { DungeonGamemode } from '../../../../Types/SkyBlock.js';
declare class SkyBlockMemberDungeonsMode {
    highestFloorCompleted: number;
    floor0: SkyBlockMemberDungeonsFloor | null;
    floor1: SkyBlockMemberDungeonsFloor;
    floor2: SkyBlockMemberDungeonsFloor;
    floor3: SkyBlockMemberDungeonsFloor;
    floor4: SkyBlockMemberDungeonsFloor;
    floor5: SkyBlockMemberDungeonsFloor;
    floor6: SkyBlockMemberDungeonsFloor;
    floor7: SkyBlockMemberDungeonsFloor;
    constructor(data: Record<string, any>, type: DungeonGamemode);
    toString(): number;
}
export default SkyBlockMemberDungeonsMode;
//# sourceMappingURL=SkyBlockMemberDungeonsMode.d.ts.map