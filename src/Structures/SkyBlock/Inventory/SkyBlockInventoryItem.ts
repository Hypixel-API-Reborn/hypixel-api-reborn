import SkyBlockInventoryItemAttribute from './SkyBlockInventoryItemAttribute.js';
import SkyBlockInventoryItemEnchantment from './SkyBlockInventoryItemEnchantment.js';
import SkyBlockInventoryItemRune from './SkyBlockInventoryItemRune.js';
import SkyBlockPotionEffect from '../Potion/SkyBlockPotionEffect.js';
import type { Rarity } from '../../../Types/SkyBlock.js';
import type { UUID } from '../../../Types/Global.js';

class SkyBlockInventoryItem {
  minecraftItemId: number;
  itemCount: number;
  itemDamage: number;
  unbreakable: boolean;
  hideFlags: number | null;
  lore: string[] | null;
  name: string | 'UNKNOWN';
  color: number | null;
  recombobulated: boolean;
  statsBook: number | null;
  runes: SkyBlockInventoryItemRune[] | null;
  reforge: string | 'none';
  hasArtOfWar: boolean;
  starCount: number;
  enchantments: SkyBlockInventoryItemEnchantment[] | null;
  uuid: UUID | null;
  hotPotatoBookCount: number;
  championCombatXP: number | null;
  id: string;
  hasDonatedItem: boolean;
  transmissionTunerCount: number | null;
  powerAbilityScroll: string | null;
  hasEtherwarp: boolean;
  isDungeonItem: boolean;
  abilityScrolls: string[] | null;
  dungeonSkillRequirement: number | null;
  baseStatBoostPercentage: number | null;
  itemTier: number | null;
  manaDisintergratorCount: number | null;
  skin: string | null;
  blazetekkChannel: number | null;
  capturedPlayer: string | null;
  cakeOwner: string | null;
  soulDurability: number | null;
  initiatorPlayer: string | null;
  isShiny: boolean;
  attributes: SkyBlockInventoryItemAttribute[] | null;
  jalapenoCount: number | null;
  hecatombSRuns: number | null;
  dungeonItemLevel: number | null;
  originTag: string | null;
  hasArtOfPeace: boolean;
  secondRandomColor: number | null;
  dyeItem: string | null;
  raffleYear: number | null;
  raffleWin: string | null;
  edition: number | null;
  recipientName: string | null;
  recipientUUID: string | null;
  bossTier: number | null;
  divanPowerCoating: number | null;
  year: number | null;
  bossId: number | null;
  spawnedFor: number | null;
  emanKills: number | null;
  isRiftTransferable: boolean;
  coinsGained: number | null;
  ranchersSpeed: number | null;
  favoriteSentinalWarden: number | null;
  potionLevel: number | null;
  potion: number | null;
  potionEffects: SkyBlockPotionEffect[] | null;
  potionType: number | null;
  isSplashPotion: boolean;
  potionName: string | null;
  isDungeonPotion: boolean;
  gearScore: number;
  rarity: Rarity;
  raw: Record<string, any>;
  constructor(data: Record<string, any>) {
    this.minecraftItemId = data?.id || 0;
    this.itemCount = data?.count || 1;
    this.itemDamage = data?.Damage || 0;
    this.unbreakable = Boolean(data?.tag?.Unbreakable || 1);
    this.hideFlags = data?.tag?.HideFlags || null;
    this.lore = data?.tag?.display?.Lore || null;
    this.name = data?.tag?.display?.name || 'UNKNOWN';
    this.color = data?.tag?.display?.color || null;
    this.recombobulated = Boolean(data?.tag?.ExtraAttributes?.rarity_upgrades || 0);
    this.statsBook = data?.tag?.ExtraAttributes?.stats_book || null;
    this.runes = data?.tag?.ExtraAttributes?.runes
      ? Object.keys(data?.tag?.ExtraAttributes?.runes).map(
        (rune) => new SkyBlockInventoryItemRune({ id: rune, tier: data?.tag?.ExtraAttributes?.runes?.[rune] })
      )
      : null;
    this.reforge = data?.tag?.ExtraAttributes?.modifier || 'none';
    this.hasArtOfWar = Boolean(data?.tag?.ExtraAttributes?.art_of_war_count || 0);
    this.starCount = data?.tag?.ExtraAttributes?.upgrade_level || 0;
    this.enchantments = data?.tag?.ExtraAttributes?.enchantments
      ? Object.keys(data?.tag?.ExtraAttributes?.enchantments).map(
        (enchantment) =>
          new SkyBlockInventoryItemEnchantment({
            id: enchantment,
            level: data?.tag?.ExtraAttributes?.enchantments?.[enchantment]
          })
      )
      : null;
    this.uuid = data?.tag?.ExtraAttributes?.uuid || null;
    this.hotPotatoBookCount = data?.tag?.ExtraAttributes?.hot_potato_count || null;
    this.championCombatXP = data?.tag?.ExtraAttributes?.champion_combat_xp || null;
    this.id = data?.tag?.ExtraAttributes?.id || 'UNKNOWN';
    this.hasDonatedItem = Boolean(data?.tag?.ExtraAttributes?.donated_museum || 0);
    this.transmissionTunerCount = data?.tag?.ExtraAttributes?.tuned_transmission || null;
    this.powerAbilityScroll = data?.tag?.ExtraAttributes?.power_ability_scroll || null;
    this.hasEtherwarp = Boolean(data?.tag?.ExtraAttributes?.ethermerge || 0);
    this.isDungeonItem = Boolean(data?.tag?.ExtraAttributes?.dungeon_item || 0);
    this.abilityScrolls = data?.tag?.ExtraAttributes?.ability_scroll || null;
    this.dungeonSkillRequirement = data?.tag?.ExtraAttributes?.dungeon_skill_req || null;
    this.baseStatBoostPercentage = data?.tag?.ExtraAttributes?.baseStatBoostPercentage || null;
    this.itemTier = data?.tag?.ExtraAttributes?.item_tier || null;
    this.manaDisintergratorCount = data?.tag?.ExtraAttributes?.mana_disintergrator_count || null;
    this.skin = data?.tag?.ExtraAttributes?.skin || null;
    this.blazetekkChannel = data?.tag?.ExtraAttributes?.blazetekk_channel || null;
    this.capturedPlayer = data?.tag?.ExtraAttributes?.captured_player || null;
    this.cakeOwner = data?.tag?.ExtraAttributes?.cake_owner || null;
    this.soulDurability = data?.tag?.ExtraAttributes?.soul_durability || null;
    this.initiatorPlayer = data?.tag?.ExtraAttributes?.initator_player || null;
    this.isShiny = Boolean(data?.tag?.ExtraAttributes?.is_shiny || 0);
    this.attributes = data?.tag?.ExtraAttributes?.attributes
      ? Object.keys(data?.tag?.ExtraAttributes?.attributes).map(
        (attribute) =>
          new SkyBlockInventoryItemAttribute({
            id: attribute,
            level: data?.tag?.ExtraAttributes?.attributes[attribute]
          })
      )
      : null;
    this.jalapenoCount = data?.tag?.ExtraAttributes?.jalapeono_count || null;
    this.hecatombSRuns = data?.tag?.ExtraAttributes?.hecatomb_s_runs || null;
    this.dungeonItemLevel = data?.tag?.ExtraAttributes?.dungeon_item_level || null;
    this.originTag = data?.tag?.ExtraAttributes?.originTag || null;
    this.hasArtOfPeace = Boolean(data?.tag?.ExtraAttributes?.artOfPeaceApplied || 0);
    this.secondRandomColor = data?.tag?.ExtraAttributes?.color || null;
    this.dyeItem = data?.tag?.ExtraAttributes?.dye_item || null;
    this.raffleYear = data?.tag?.ExtraAttributes?.raffle_year || null;
    this.raffleWin = data?.tag?.ExtraAttributes?.raffle_win || null;
    this.edition = data?.tag?.ExtraAttributes?.edition || null;
    this.recipientName = data?.tag?.ExtraAttributes?.recipient_name || null;
    this.recipientUUID = data?.tag?.ExtraAttributes?.recipient_id || null;
    this.bossTier = data?.tag?.ExtraAttributes?.boss_tier || null;
    this.divanPowerCoating = data?.tag?.ExtraAttributes?.divan_power_coating || null;
    this.year = data?.tag?.ExtraAttributes?.year || null;
    this.bossId = data?.tag?.ExtraAttributes?.bossId || null;
    this.spawnedFor = data?.tag?.ExtraAttributes?.spawnedFor || null;
    this.emanKills = data?.tag?.ExtraAttributes?.eman_kills || null;
    this.isRiftTransferable = Boolean(data?.tag?.ExtraAttributes?.rift_transferred || 0);
    this.coinsGained = data?.tag?.ExtraAttributes?.coins_gained || null;
    this.ranchersSpeed = data?.tag?.ExtraAttributes?.ranchers_speed || null;
    this.favoriteSentinalWarden = data?.tag?.ExtraAttributes?.favorite_sentinel_warden || null;
    this.potionLevel = data?.tag?.ExtraAttributes?.potion_level || null;
    this.potion = data?.tag?.ExtraAttributes?.potion || null;
    this.potionEffects = data?.tag?.ExtraAttributes?.effects
      ? data?.tag?.ExtraAttributes?.effects.map((effect: Record<string, any>) => new SkyBlockPotionEffect(effect))
      : null;
    this.potionType = data?.tag?.ExtraAttributes?.potion_type || null;
    this.isSplashPotion = Boolean(data?.tag?.ExtraAttributes?.splash || 0);
    this.potionName = data?.tag?.ExtraAttributes?.potion_name || null;
    this.isDungeonPotion = Boolean(data?.tag?.ExtraAttributes?.dungeon_potion || 0);
    this.gearScore = this.lore ? this.parseGearScore(this.lore) : 0;
    this.rarity = this.lore ? this.parseRarity(this.lore[this.lore.length - 1] || '') : 'COMMON';
    this.raw = data;
  }

  private parseRarity(str: string): Rarity {
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

  private parseGearScore(lore: any): number {
    for (const line of lore) {
      if (line.match(/Gear Score: §[0-9a-f](\d+)/)) return Number(line.match(/Gear Score: §d(\d+)/)[1]);
    }
    return 0;
  }

  toString(): string {
    return this.name;
  }
}

export default SkyBlockInventoryItem;
