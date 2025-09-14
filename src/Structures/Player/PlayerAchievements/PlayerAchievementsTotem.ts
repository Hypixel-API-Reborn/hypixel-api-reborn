import type { PlayerAchievementsTotemColors, PlayerAchievementsTotemParts } from '../../../Types/Player.ts';

class PlayerAchievementsTotem {
  canCustomize: boolean;
  allowedMaxHeight: number;
  unlockedParts: PlayerAchievementsTotemParts[];
  selectedParts: Record<string, PlayerAchievementsTotemParts>;
  unlockedColors: PlayerAchievementsTotemColors[];
  selectedColors: Record<string, PlayerAchievementsTotemColors>;
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
