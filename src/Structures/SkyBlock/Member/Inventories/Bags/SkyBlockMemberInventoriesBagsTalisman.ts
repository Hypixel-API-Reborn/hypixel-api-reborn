import SkyBlockMemberInventoriesBagsTalismanDecoded from './SkyBlockMemberInventoriesBagsTalismanDecoded.ts';
import SkyBlockMemberInventoriesBaseInventory from '../SkyBlockMemberInventoriesBaseInventory.ts';
import { decode } from '../../../../../Utils/index.ts';

class SkyBlockMemberInventoriesBagsTalisman extends SkyBlockMemberInventoriesBaseInventory {
  override async decodeData(): Promise<SkyBlockMemberInventoriesBagsTalismanDecoded | null> {
    if (undefined === this.base64 || this.base64 === null) return null;
    const decoded = await decode(this.base64);
    return new SkyBlockMemberInventoriesBagsTalismanDecoded(decoded);
  }
}

export default SkyBlockMemberInventoriesBagsTalisman;
