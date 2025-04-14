import SkyBlockMuseumItem from './SkyBlockMuseumItem.js';
import { decode } from '../../../Utils/SkyBlockUtils.js';

class SkyBlockMuseumMember {
  value: number;
  appraisal: boolean;
  rawItems: Record<string, any>;
  getItems: () => Promise<SkyBlockMuseumItem[]>;
  constructor(data: Record<string, any>) {
    this.value = data?.value || 0;
    this.appraisal = data?.appraisal || false;
    this.rawItems = data?.items || {};
    this.getItems = async (): Promise<SkyBlockMuseumItem[]> => {
      const items: SkyBlockMuseumItem[] = [];
      for (const item of Object.keys(data?.items || {})) {
        items.push(
          new SkyBlockMuseumItem(item, data?.items?.[item] || {}, await decode((data?.items?.[item] || {})?.data))
        );
      }
      return items;
    };
  }
}

export default SkyBlockMuseumMember;
