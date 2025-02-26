import { parseRarity } from '../../Utils/SkyblockUtils.js';

class SkyblockItem {
  color: string | null;
  material: string;
  name: string;
  tier: string;
  id: string;
  category: string;
  npc_sell_price: number;
  stats: Record<string, number>;
  rarity_salvageable: boolean;
  salvages: Record<string, number>;
  soulbound: string | null;
  is_soulbound: boolean;
  skin: Record<string, number>;
  constructor(data: Record<string, any>) {
    this.color = data.color || null;
    this.material = data.material;
    this.name = data.name;
    this.tier = parseRarity(data.tier || '');
    this.id = data.id;
    this.category = data.category;
    this.npc_sell_price = data.npc_sell_price || 0;
    this.stats = data.stats || {};
    this.rarity_salvageable = data.rarity_salvageable || false;
    this.salvages = data.salvages || {};
    this.soulbound = data.soulbound || null;
    this.is_soulbound = Boolean(this.soulbound);
    this.skin = data.skin || {};
  }

  toString(): string {
    return this.name;
  }
}

export default SkyblockItem;
