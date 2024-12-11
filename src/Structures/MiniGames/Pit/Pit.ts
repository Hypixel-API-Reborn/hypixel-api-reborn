import Divide from '../../../Utils/Divide.js';
import PitInventoryItem from './PitInventoryItem.js';
import { decode } from '../../../Utils/SkyblockUtils.js';
import { pit } from '../../../Utils/Constants.js';
import type { PitArmor } from '../../../Types/Player.js';

class Pit {
  prestige: number;
  xp: number;
  level: number;
  kills: number;
  deaths: number;
  KDR: number;
  assists: number;
  maxKillStreak: number;
  playtime: number;
  joins: number;
  damageReceived: number;
  damageDealt: number;
  damageRatio: number;
  meleeDamageReceived: number;
  meleeDamageDealt: number;
  swordHits: number;
  leftClicks: number;
  meleeAccuracy: number;
  meleeDamageRatio: number;
  bowDamageReceived: number;
  bowDamageDealt: number;
  arrowsHit: number;
  arrowsFired: number;
  bowAccuracy: number;
  bowDamageRatio: number;
  goldenHeadsEaten: number;
  getInventory: () => Promise<PitInventoryItem[]>;
  getEnterChest: () => Promise<PitInventoryItem[]>;
  getArmor: () => Promise<PitArmor>;
  constructor(data: Record<string, any>) {
    this.prestige = data?.profile?.prestiges?.[data?.profile?.prestiges?.length - 1]?.index || 0;
    this.xp = data?.profile?.xp || 0;
    this.level =
      this.calcLevel(
        this.prestige,
        0 < this.prestige
          ? this.xp - (pit?.Prestiges?.[this.prestige - 1] ? pit?.Prestiges?.[this.prestige - 1]?.SumXp || 0 : 0)
          : this.xp
      ) ?? 0;
    this.kills = data?.pit_stats_ptl?.kills || 0;
    this.deaths = data?.pit_stats_ptl?.deaths || 0;
    this.KDR = Divide(this.kills, this.deaths);
    this.assists = data?.pit_stats_ptl?.assists || 0;
    this.maxKillStreak = data?.pit_stats_ptl?.max_streak || 0;
    this.playtime = (data?.pit_stats_ptl?.playtime_minutes || 0) * 60;
    this.joins = data?.pit_stats_ptl?.joins || 0;
    this.damageReceived = data?.pit_stats_ptl?.damage_received || 0;
    this.damageDealt = data?.pit_stats_ptl?.damage_dealt || 0;
    this.damageRatio = Divide(this.damageDealt, this.damageReceived);
    this.meleeDamageReceived = data?.pit_stats_ptl?.melee_damage_received || 0;
    this.meleeDamageDealt = data?.pit_stats_ptl?.melee_damage_dealt || 0;
    this.swordHits = data?.pit_stats_ptl?.sword_hits || 0;
    this.leftClicks = data?.pit_stats_ptl?.left_clicks || 0;
    this.meleeAccuracy = Divide(this.swordHits, this.leftClicks);
    this.meleeDamageRatio = Divide(this.meleeDamageDealt, this.meleeDamageReceived);
    this.bowDamageReceived = data?.pit_stats_ptl?.bow_damage_received || 0;
    this.bowDamageDealt = data?.pit_stats_ptl?.bow_damage_dealt || 0;
    this.arrowsHit = data?.pit_stats_ptl?.arrow_hits || 0;
    this.arrowsFired = data?.pit_stats_ptl?.arrows_fired || 0;
    this.bowAccuracy = Divide(this.arrowsHit, this.arrowsFired);
    this.bowDamageRatio = Divide(this.bowDamageDealt, this.bowDamageReceived);
    this.goldenHeadsEaten = data?.pit_stats_ptl?.ghead_eaten || 0;
    this.getInventory = async (): Promise<PitInventoryItem[]> => {
      let inventory = data?.profile?.inv_contents || undefined;
      if (!inventory) return [];
      inventory = await decode(inventory?.data);
      const edited = [];
      for (let i = 1; i < inventory?.length; i++) {
        if (!inventory[i]?.id) {
          continue;
        }
        edited?.push(new PitInventoryItem(inventory[i]));
      }
      return edited;
    };
    this.getEnterChest = async () => {
      let chest = data?.profile?.inv_enderchest || undefined;
      if (!chest) return [];
      chest = await decode(chest?.data);
      const edited = [];
      for (let i = 1; i < chest?.length; i++) {
        if (!chest[i]?.id) {
          continue;
        }
        edited?.push(new PitInventoryItem(chest[i]));
      }
      return edited;
    };
    this.getArmor = async () => {
      const base64 = data?.profile?.inv_armor || undefined;
      if (!base64) return { helmet: null, chestplate: null, leggings: null, boots: null };
      const decoded = await decode(base64?.data);
      const armor = {
        helmet: decoded[3]?.id ? new PitInventoryItem(decoded[3]) : null,
        chestplate: decoded[2]?.id ? new PitInventoryItem(decoded[2]) : null,
        leggings: decoded[1]?.id ? new PitInventoryItem(decoded[1]) : null,
        boots: decoded[0]?.id ? new PitInventoryItem(decoded[0]) : null
      };
      return armor;
    };
  }
  // Credit https://github.com/PitPanda/PitPandaProduction/blob/b1971f56ea1aa8c829b722cbb33247c96591c0cb/Structures/Pit.js
  private calcLevel(prestige: number, xp: number): number {
    const multiplier = pit?.Prestiges[prestige]?.Multiplier || 0;
    let level = 0;
    while (0 < xp && 120 > level) {
      const levelXp = pit?.Levels?.[Math.floor(level / 10)]?.Xp || 0 * multiplier;
      if (xp >= levelXp * 10) {
        xp -= levelXp * 10;
        level += 10;
      } else {
        const gain = Math.floor(xp / levelXp);
        level += gain;
        xp = 0;
      }
    }
    return level;
  }
}

export default Pit;
