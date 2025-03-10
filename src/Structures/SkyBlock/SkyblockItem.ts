import { parseRarity } from '../../Utils/SkyblockUtils.js';

class SkyblockItem {
  color: string | null;
  material: string;
  name: string;
  tier: string;
  id: string;
  category: string;
  npcSellPrice: number;
  stats: Record<string, number>;
  raritySalvageable: boolean;
  salvages: Record<string, number>;
  soulbound: string | null;
  isSoulbound: boolean;
  skin: Record<string, number>;
  constructor(data: Record<string, any>) {
    this.color = data.color || null;
    this.material = data.material;
    this.name = data.name;
    this.tier = parseRarity(data.tier || '');
    this.id = data.id;
    this.category = data.category;
    this.npcSellPrice = data.npc_sell_price || 0;
    this.stats = data.stats || {};
    this.raritySalvageable = data.rarity_salvageable || false;
    this.salvages = data.salvages || {};
    this.soulbound = data.soulbound || null;
    this.isSoulbound = Boolean(this.soulbound);
    this.skin = data.skin || {};
  }

  toString(): string {
    return this.name;
  }
}

export default SkyblockItem;
