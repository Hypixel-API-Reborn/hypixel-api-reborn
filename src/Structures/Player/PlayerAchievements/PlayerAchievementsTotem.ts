import type { PlayerAchievementsTotemColor, PlayerAchievementsTotemPart } from '../../../Types/Player.js';

class PlayerAchievementsTotem {
  canCustomize: boolean;
  allowedMaxHeight: number;
  unlockedParts: PlayerAchievementsTotemPart[];
  selectedParts: Record<string, PlayerAchievementsTotemPart>;
  unlockedColors: PlayerAchievementsTotemColor[];
  selectedColors: Record<string, PlayerAchievementsTotemColor>;
  constructor(data: Record<string, any>) {
    this.canCustomize = data?.canCustomize || false;
    this.allowedMaxHeight = data?.allowed_max_height || 0;
    this.unlockedParts = data?.unlockedParts || [];
    this.selectedParts = data?.selectedParts || {};
    this.unlockedColors = data?.unlockedColors || [];
    this.selectedColors = data?.selectedColors || {};
  }
}

export default PlayerAchievementsTotem;
