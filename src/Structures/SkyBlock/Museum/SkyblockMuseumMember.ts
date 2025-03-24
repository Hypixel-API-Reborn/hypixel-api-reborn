import SkyblockMuseumItem from './SkyblockMuseumItem.js';
import { decode } from '../../../Utils/SkyblockUtils.js';

class SkyblockMuseumMember {
  value: number;
  appraisal: boolean;
  rawItems: Record<string, any>;
  getItems: () => Promise<SkyblockMuseumItem[]>;
  constructor(data: Record<string, any>) {
    this.value = data?.value || 0;
    this.appraisal = data?.appraisal || false;
    this.rawItems = data?.items || {};
    this.getItems = async (): Promise<SkyblockMuseumItem[]> => {
      const items: SkyblockMuseumItem[] = [];
      for (const item of Object.keys(data?.items || {})) {
        items.push(
          new SkyblockMuseumItem(item, data?.items?.[item] || {}, await decode((data?.items?.[item] || {})?.data))
        );
      }
      return items;
    };
  }
}

export default SkyblockMuseumMember;
