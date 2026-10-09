import SkyBlockMemberInventoriesBaseInventory from '../SkyBlockMemberInventoriesBaseInventory.ts';
import SkyBlockMemberInventoriesInventoryDecoded from './SkyBlockMemberInventoriesInventoryDecoded.ts';
import { decode } from '../../../../../Utils/index.ts';

class SkyBlockMemberInventoriesInventory extends SkyBlockMemberInventoriesBaseInventory {
  override async decodeData(): Promise<SkyBlockMemberInventoriesInventoryDecoded | null> {
    if (undefined === this.base64 || this.base64 === null) return null;
    const decoded = await decode(this.base64);
    return new SkyBlockMemberInventoriesInventoryDecoded(decoded);
  }
}

export default SkyBlockMemberInventoriesInventory;
