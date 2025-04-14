import SkyBlockMemberInventoriesBackpackDecoded from './SkyBlockMemberInventoriesBackpackDecoded.js';
import { decode } from '../../../../../Utils/SkyBlockUtils.js';

class SkyBlockMemberInventoriesBackpack {
  backpackItemBase64: string;
  backpackContentsBase64: string;
  constructor(data: Record<string, any>, slot: string) {
    this.backpackItemBase64 = data?.backpackIcons?.[slot]?.data;
    this.backpackContentsBase64 = data?.backpackContents?.[slot]?.data;
  }

  async decodeData(): Promise<SkyBlockMemberInventoriesBackpackDecoded | null> {
    if (this.backpackItemBase64 === undefined) return null;
    if (this.backpackContentsBase64 === undefined) return null;
    const backpackIconDecoded = await decode(this.backpackItemBase64);
    const backpackItemsDecoded = await decode(this.backpackContentsBase64);
    return new SkyBlockMemberInventoriesBackpackDecoded({ backpackIconDecoded, backpackItemsDecoded });
  }
}

export default SkyBlockMemberInventoriesBackpack;
