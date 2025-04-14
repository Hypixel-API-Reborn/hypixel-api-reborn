import SkyBlockMemberInventoriesBaseInventory from '../SkyBlockMemberInventoriesBaseInventory.js';
import SkyBlockMemberInventoriesEquipmentDecoded from './SkyBlockMemberInventoriesEquipmentDecoded.js';
import { decode } from '../../../../../Utils/SkyBlockUtils.js';

class SkyBlockMemberInventoriesEquipment extends SkyBlockMemberInventoriesBaseInventory {
  override async decodeData(): Promise<SkyBlockMemberInventoriesEquipmentDecoded | null> {
    if (undefined === this.base64 || null === this.base64) return null;
    const decoded = await decode(this.base64);
    return new SkyBlockMemberInventoriesEquipmentDecoded(decoded);
  }
}

export default SkyBlockMemberInventoriesEquipment;
