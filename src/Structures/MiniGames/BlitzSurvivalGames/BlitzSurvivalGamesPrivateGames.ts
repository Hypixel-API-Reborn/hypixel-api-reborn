import type {
  BlitzSurvivalGamesPrivateGamesExtraStar,
  PrivateGameSettingsHealthBuff,
  PrivateGameSettingsSpeed
} from '../../../Types/Player.js';

class BlitzSurvivalGamesPrivateGames {
  healthBuff: PrivateGameSettingsHealthBuff;
  lowGravity: boolean;
  speed: PrivateGameSettingsSpeed;
  extraBlitzStars: BlitzSurvivalGamesPrivateGamesExtraStar;
  oneHitOneKill: boolean;
  nightTime: boolean;
  noKits: boolean;
  constructor(data: Record<string, any>) {
    this.healthBuff = data?.health_buff ?? 'Normal Health';
    this.lowGravity = data?.low_gravity ?? false;
    this.speed = data?.speed ?? 'No Speed';
    this.extraBlitzStars = data?.extra_blitz_stars ?? '1 Star - Normal';
    this.oneHitOneKill = data?.one_hit_one_kill_blitz ?? false;
    this.nightTime = data?.enable_night_time ?? false;
    this.noKits = data?.no_kits ?? false;
  }
}

export default BlitzSurvivalGamesPrivateGames;
