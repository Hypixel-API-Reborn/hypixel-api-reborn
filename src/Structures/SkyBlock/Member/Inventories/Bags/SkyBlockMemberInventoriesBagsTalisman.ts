import SkyBlockMemberInventoriesBagsTalismanDecoded from './SkyBlockMemberInventoriesBagsTalismanDecoded.js';
import SkyBlockMemberInventoriesBaseInventory from '../SkyBlockMemberInventoriesBaseInventory.js';
import { decode } from '../../../../../Utils/SkyBlockUtils.js';

class SkyBlockMemberInventoriesBagsTalisman extends SkyBlockMemberInventoriesBaseInventory {
  override async decodeData(): Promise<SkyBlockMemberInventoriesBagsTalismanDecoded | null> {
    if (undefined === this.base64 || null === this.base64) return null;
    const decoded = await decode(this.base64);
    return new SkyBlockMemberInventoriesBagsTalismanDecoded(decoded);
  }
}

export default SkyBlockMemberInventoriesBagsTalisman;
