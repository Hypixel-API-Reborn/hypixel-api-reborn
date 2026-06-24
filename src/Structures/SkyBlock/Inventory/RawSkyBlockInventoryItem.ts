import SkyBlockInventoryItem from './SkyBlockInventoryItem.ts';
import { decode } from '../../../Utils/SkyBlockUtils.ts';

class RawSkyBlockInventoryItem {
  base64: string | null;
  constructor(data: Record<string, any>) {
    this.base64 = data?.data || null;
  }

  async decodeData(): Promise<SkyBlockInventoryItem | null> {
    if (undefined === this.base64 || this.base64 === null) return null;
    const decoded = await decode(this.base64);
    return decoded[0]?.id ? new SkyBlockInventoryItem(decoded[0]) : null;
  }
}

export default RawSkyBlockInventoryItem;
