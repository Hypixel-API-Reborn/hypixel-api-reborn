import SkyBlockMemberInventoriesArmorDecoded from './SkyBlockMemberInventoriesArmorDecoded.ts';
import SkyBlockMemberInventoriesBaseInventory from '../SkyBlockMemberInventoriesBaseInventory.ts';
import { decode } from '../../../../../Utils/index.ts';

class SkyBlockMemberInventoriesArmor extends SkyBlockMemberInventoriesBaseInventory {
  override async decodeData(): Promise<SkyBlockMemberInventoriesArmorDecoded | null> {
    if (undefined === this.base64 || this.base64 === null) return null;
    const decoded = await decode(this.base64);
    return new SkyBlockMemberInventoriesArmorDecoded(decoded);
  }
}

export default SkyBlockMemberInventoriesArmor;
