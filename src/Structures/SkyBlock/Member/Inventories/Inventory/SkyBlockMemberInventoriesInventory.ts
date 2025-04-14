import SkyBlockMemberInventoriesBaseInventory from '../SkyBlockMemberInventoriesBaseInventory.js';
import SkyBlockMemberInventoriesInventoryDecoded from './SkyBlockMemberInventoriesInventoryDecoded.js';
import { decode } from '../../../../../Utils/SkyBlockUtils.js';

class SkyBlockMemberInventoriesInventory extends SkyBlockMemberInventoriesBaseInventory {
  override async decodeData(): Promise<SkyBlockMemberInventoriesInventoryDecoded | null> {
    if (this.base64 === undefined) return null;
    const decoded = await decode(this.base64);
    return new SkyBlockMemberInventoriesInventoryDecoded(decoded);
  }
}

export default SkyBlockMemberInventoriesInventory;
