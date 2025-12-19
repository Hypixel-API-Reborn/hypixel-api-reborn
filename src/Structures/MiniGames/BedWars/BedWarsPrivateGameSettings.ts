import type {
  BedWarsPrivateGameSettingsEventTime,
  BedWarsPrivateGameSettingsRespawnTime,
  PrivateGameSettingsGameSpeed,
  PrivateGameSettingsHealthBuff
} from '../../../Types/Player.js';

class BedWarsPrivateGameSettings {
  bedInstaBreak: boolean;
  disableBlockProtection: boolean;
  eventTime: BedWarsPrivateGameSettingsEventTime;
  healthBuff: PrivateGameSettingsHealthBuff;
  lowGravity: boolean;
  maxTeamUpgrades: boolean;
  noDiamonds: boolean;
  noEmeralds: boolean;
  oneHitOneKill: boolean;
  respawnTime: BedWarsPrivateGameSettingsRespawnTime;
  speed: PrivateGameSettingsGameSpeed;
  constructor(data: Record<string, any>) {
    this.bedInstaBreak = data?.bed_instabreak || false;
    this.disableBlockProtection = data?.disable_block_protection || false;
    this.eventTime = data?.event_time || '1x - Normal';
    this.healthBuff = data?.health_buff || 'Normal Health';
    this.lowGravity = data?.low_gravity || false;
    this.maxTeamUpgrades = data?.max_team_upgrades || false;
    this.noDiamonds = data?.no_diamonds || false;
    this.noEmeralds = data?.no_emeralds || false;
    this.oneHitOneKill = data?.one_hit_one_kill || false;
    this.respawnTime = data?.respawn_time || '5 Seconds';
    this.speed = data?.speed || 'No Speed';
  }
}

export default BedWarsPrivateGameSettings;
