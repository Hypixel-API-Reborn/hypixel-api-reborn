import type {
  BlitzSurvivalGamesPrivateGamesExtraStars,
  PrivateGameSettingsGameSpeed,
  PrivateGameSettingsHealthBuff
} from '../../../Types/Player.ts';

class BlitzSurvivalGamesPrivateGames {
  healthBuff: PrivateGameSettingsHealthBuff | 'UNKNOWN';
  lowGravity: boolean;
  speed: PrivateGameSettingsGameSpeed | 'UNKNOWN';
  extraBlitzStars: BlitzSurvivalGamesPrivateGamesExtraStars;
  oneHitOneKill: boolean;
  nightTime: boolean;
  noKits: boolean;
  constructor(data: Record<string, any>) {
    this.healthBuff = data?.health_buff || 'UNKNOWN';
    this.lowGravity = data?.low_gravity || false;
    this.speed = data?.speed || 'UNKNOWN';
    this.extraBlitzStars = data?.extra_blitz_stars || '1 Star - Normal';
    this.oneHitOneKill = data?.one_hit_one_kill_blitz || false;
    this.nightTime = data?.enable_night_time || false;
    this.noKits = data?.no_kits || false;
  }
}

export default BlitzSurvivalGamesPrivateGames;
