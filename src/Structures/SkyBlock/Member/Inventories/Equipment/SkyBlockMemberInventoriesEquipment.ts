import SkyBlockMemberInventoriesBaseInventory from '../SkyBlockMemberInventoriesBaseInventory.ts';
import SkyBlockMemberInventoriesEquipmentDecoded from './SkyBlockMemberInventoriesEquipmentDecoded.ts';
import { decode } from '../../../../../Utils/index.ts';

class SkyBlockMemberInventoriesEquipment extends SkyBlockMemberInventoriesBaseInventory {
  override async decodeData(): Promise<SkyBlockMemberInventoriesEquipmentDecoded | null> {
    if (undefined === this.base64 || this.base64 === null) return null;
    const decoded = await decode(this.base64);
    return new SkyBlockMemberInventoriesEquipmentDecoded(decoded);
  }
}

export default SkyBlockMemberInventoriesEquipment;
