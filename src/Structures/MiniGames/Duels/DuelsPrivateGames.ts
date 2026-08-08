import type {
  BlitzSurvivalGamesPrivateGamesExtraStar,
  DuelsPrivateGameSettingsArrowCooldown,
  DuelsPrivateGameSettingsArrowCount,
  DuelsPrivateGameSettingsBoxingMaxHits,
  DuelsPrivateGameSettingsChangeWeapon,
  DuelsPrivateGameSettingsGiveHaste,
  DuelsPrivateGameSettingsGiveRegen,
  DuelsPrivateGameSettingsGiveSlowness,
  DuelsPrivateGameSettingsGodApple,
  DuelsPrivateGameSettingsMoreCaptures,
  DuelsPrivateGameSettingsMoreGoals,
  DuelsPrivateGameSettingsNightTime,
  DuelsPrivateGameSettingsRoundTime,
  PrivateGameSettingsHealthBuff,
  PrivateGameSettingsSpeed
} from '../../../Types/index.js';

class DuelsPrivateGames {
  arrowCooldown: DuelsPrivateGameSettingsArrowCooldown;
  arrowCount: DuelsPrivateGameSettingsArrowCount;
  blockProtection: boolean;
  boxingMaxHits: DuelsPrivateGameSettingsBoxingMaxHits;
  boxingMercy: boolean;
  changeWeapon: DuelsPrivateGameSettingsChangeWeapon;
  enableMaxKitsAndKillEffects: boolean;
  enableNightTime: boolean;
  enableOp: boolean;
  extraBlitzStars: BlitzSurvivalGamesPrivateGamesExtraStar;
  giveHaste: DuelsPrivateGameSettingsGiveHaste;
  giveRegen: DuelsPrivateGameSettingsGiveRegen;
  giveSlowness: DuelsPrivateGameSettingsGiveSlowness;
  godApple: DuelsPrivateGameSettingsGodApple;
  healthBuff: PrivateGameSettingsHealthBuff;
  knockbackTen: boolean;
  lowGravity: boolean;
  moreCaptures: DuelsPrivateGameSettingsMoreCaptures;
  moreGoals: DuelsPrivateGameSettingsMoreGoals;
  nightTime: DuelsPrivateGameSettingsNightTime;
  noKit: boolean;
  noKits: boolean;
  oneHitOneKill: boolean;
  oneHitOneKillBlitz: boolean;
  onlyTnt: boolean;
  rawDamage: boolean;
  removeBows: boolean;
  removeRods: boolean;
  roundTime: DuelsPrivateGameSettingsRoundTime;
  speed: PrivateGameSettingsSpeed;
  worldBorder: boolean;
  constructor(data: Record<string, any>) {
    this.arrowCooldown = data?.duels_arrow_cooldown ?? 'Default';
    this.arrowCount = data?.duels_arrow_count ?? 'Default';
    this.blockProtection = data?.duels_block_protection ?? false;
    this.boxingMaxHits = data?.duels_boxing_max_hits ?? 'Default';
    this.boxingMercy = data?.duels_boxing_mercy ?? false;
    this.changeWeapon = data?.duels_change_weapon ?? 'Default Weapon';
    this.enableMaxKitsAndKillEffects = data?.enable_max_kits_and_kill_effects ?? false;
    this.enableNightTime = data?.enable_night_time ?? false;
    this.enableOp = data?.duels_enable_op ?? false;
    this.extraBlitzStars = data?.extra_blitz_stars ?? '1 Star - Normal';
    this.giveHaste = data?.duels_give_haste ?? 'No Haste';
    this.giveRegen = data?.duels_give_regen ?? 'No Regeneration';
    this.giveSlowness = data?.duels_give_slowness ?? 'No Slowness';
    this.godApple = data?.duels_god_apple ?? 'None';
    this.healthBuff = data?.health_buff ?? 'Normal Health';
    this.knockbackTen = data?.duels_knockback_ten ?? false;
    this.lowGravity = data?.low_gravity ?? false;
    this.moreCaptures = data?.duels_more_captures ?? 'Default';
    this.moreGoals = data?.duels_more_goals ?? 'Default';
    this.nightTime = data?.duels_night_time ?? 'Default';
    this.noKit = data?.duels_no_kit ?? false;
    this.noKits = data?.no_kits ?? false;
    this.oneHitOneKill = data?.one_hit_one_kill ?? false;
    this.oneHitOneKillBlitz = data?.one_hit_one_kill_blitz ?? false;
    this.onlyTnt = data?.duels_only_tnt ?? false;
    this.rawDamage = data?.duels_raw_damage ?? false;
    this.removeBows = data?.duels_remove_bows ?? false;
    this.removeRods = data?.duels_remove_rods ?? false;
    this.roundTime = data?.duels_round_time ?? 'Default';
    this.speed = data?.speed ?? 'No Speed';
    this.worldBorder = data?.duels_world_border ?? false;
  }
}

export default DuelsPrivateGames;
