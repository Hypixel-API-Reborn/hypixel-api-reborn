import SkyblockMuseumItem from './SkyblockMuseumItem.js';
import { decode } from '../../Utils/SkyblockUtils.js';

class SkyblockMuseum {
  raw: Record<string, any>;
  value: number;
  appraisal: boolean;
  getItems: () => Promise<SkyblockMuseumItem[]>;
  getSpecial: () => Promise<SkyblockMuseumItem[]>;
  constructor(data: Record<string, any>) {
    this.raw = data.m.members?.[data.uuid] ?? {};
    this.value = data.value;
    this.appraisal = data.appraisal;
    this.getItems = async (): Promise<SkyblockMuseumItem[]> => {
      const items: SkyblockMuseumItem[] = [];
      for (const item of Object.keys(data?.m?.members[data?.uuid]?.items) || {}) {
        items.push(
          new SkyblockMuseumItem(
            item,
            data?.m?.members[data?.uuid]?.items[item],
            await decode(data?.m?.members[data?.uuid]?.items[item]?.items?.data)
          )
        );
      }
      return items;
    };
    this.getSpecial = async (): Promise<SkyblockMuseumItem[]> => {
      const items: SkyblockMuseumItem[] = [];
      for (const item of Object.keys(data?.m?.members[data?.uuid]?.special || {})) {
        items.push(
          new SkyblockMuseumItem(
            item,
            data?.m?.members[data?.uuid]?.special[item],
            await decode(data?.m?.members[data?.uuid]?.special[item]?.items?.data)
          )
        );
      }
      return items;
    };
  }
}

export default SkyblockMuseum;
