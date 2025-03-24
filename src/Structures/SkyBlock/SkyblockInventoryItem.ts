import SkyblockGemstone from './SkyblockGemstone.js';
import type { Rarity, SkyblockGemstoneQuality } from '../../Types/Skyblock.js';
import type { UUID } from '../../Types/Global.js';

class SkyblockInventoryItem {
  itemId: number;
  count: number;
  name: string;
  lore: string;
  loreArray: string[];
  loreForEmbed: string;
  color: string | null;
  enchantments: Record<string, number>;
  reforge: string;
  gemstones: SkyblockGemstone[] | [];
  damage: number;
  rarity: string;
  dungeonStars: number;
  gearScore: number;
  uuid: UUID;
  soulbound: boolean;
  artOfWar: number;
  rune: object;
  hotPotatoBooks: number;
  recombobulated: boolean;
  attributes: object;
  hecatomb: number;
  champion: number;
  cultivating: number;
  expertise: number;
  compact: number;
  blocksWalked: number;
  constructor(data: Record<string, any>) {
    this.itemId = data?.id || 0;
    this.count = data?.Count || 0;
    this.name =
      null !== data?.tag?.display?.Name
        ? data?.tag?.display?.Name?.toString()?.replace(/§([1-9]|[a-f])|§/gm, '')
        : null;
    this.lore = data?.tag?.display?.Lore?.join('\n');
    this.loreArray = data?.tag?.display?.Lore;
    this.loreForEmbed = this?.lore?.replace(/§([0-9]|[a-f])|§/gm, '')?.replace(/<br>/gm, '\n');
    this.color = data?.tag?.ExtraAttributes?.color ?? data?.tag?.display?.color ?? null;
    this.enchantments = data?.tag?.ExtraAttributes?.enchantments ?? null;
    this.reforge = data?.tag?.ExtraAttributes?.modifier ?? null;
    this.gemstones = data?.tag?.ExtraAttributes?.gems
      ? Object.entries(data?.tag?.ExtraAttributes?.gems)?.map((gem) => {
          return new SkyblockGemstone({ type: gem[0], quality: gem[1] as SkyblockGemstoneQuality });
        })
      : [];
    this.damage = data?.Damage || 0;
    this.rarity = this.parseRarity(this?.loreArray[this?.loreArray?.length - 1] || 'UNKNOWN');
    this.dungeonStars = data?.tag?.ExtraAttributes?.upgrade_level ?? 0;
    this.gearScore = this.parseGearScore(this?.loreArray);
    this.uuid = data?.tag?.ExtraAttributes?.uuid ?? '';
    this.soulbound = 1 === data?.tag?.ExtraAttributes?.donated_museum;
    this.artOfWar = data?.tag?.ExtraAttributes?.art_of_war_count ?? 0;
    this.rune = data?.tag?.ExtraAttributes?.runes ?? null;
    this.hotPotatoBooks = data?.tag?.ExtraAttributes?.hot_potato_count ?? 0;
    this.recombobulated = 1 === data?.tag?.ExtraAttributes?.rarity_upgrades;
    this.attributes = data?.tag?.ExtraAttributes?.attributes ?? {};
    this.hecatomb = data?.tag?.ExtraAttributes?.hecatomb_s_runs ?? 0;
    this.champion = data?.tag?.ExtraAttributes?.champion_combat_xp ?? 0;
    this.cultivating = data?.tag?.ExtraAttributes?.farmed_cultivating ?? 0;
    this.expertise = data?.tag?.ExtraAttributes?.expertise_kills ?? 0;
    this.compact = data?.tag?.ExtraAttributes?.compact_blocks ?? 0;
    this.blocksWalked = data?.tag?.ExtraAttributes?.blocks_walked ?? 0;
  }

  parseRarity(str: string): Rarity {
    const rarityArray = [
      'COMMON',
      'UNCOMMON',
      'RARE',
      'EPIC',
      'LEGENDARY',
      'MYTHIC',
      'DIVINE',
      'SPECIAL',
      'VERY SPECIAL'
    ];
    for (const rarity of rarityArray) {
      if (str.includes(rarity)) return rarity as Rarity;
    }
    return 'COMMON';
  }

  parseGearScore(lore: any): number {
    for (const line of lore) {
      if (line.match(/Gear Score: §[0-9a-f](\d+)/)) return Number(line.match(/Gear Score: §d(\d+)/)[1]);
    }
    return 0;
  }

  toString(): string {
    return this.name;
  }
}

export default SkyblockInventoryItem;
