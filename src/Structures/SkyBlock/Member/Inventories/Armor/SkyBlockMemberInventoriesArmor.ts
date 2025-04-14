import SkyBlockMemberInventoriesArmorDecoded from './SkyBlockMemberInventoriesArmorDecoded.js';
import SkyBlockMemberInventoriesBaseInventory from '../SkyBlockMemberInventoriesBaseInventory.js';
import { decode } from '../../../../../Utils/SkyBlockUtils.js';

class SkyBlockMemberInventoriesArmor extends SkyBlockMemberInventoriesBaseInventory {
  override async decodeData(): Promise<SkyBlockMemberInventoriesArmorDecoded | null> {
    if (this.base64 === undefined) return null;
    const decoded = await decode(this.base64);
    return new SkyBlockMemberInventoriesArmorDecoded(decoded);
  }
}

export default SkyBlockMemberInventoriesArmor;
