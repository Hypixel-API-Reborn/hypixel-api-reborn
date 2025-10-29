import type {
  BuildBattleLeaderboardSettingsMode,
  BuildBattleLeaderboardSettingsResetType
} from '../../../Types/Player.ts';

class BuildBattleLeaderboardSettings {
  mode: BuildBattleLeaderboardSettingsMode | 'UNKNOWN';
  resetType: BuildBattleLeaderboardSettingsResetType | 'UNKNOWN';
  constructor(data: Record<string, any>) {
    this.mode = data?.mode || 'UNKNOWN';
    this.resetType = data?.resetType || 'UNKNOWN';
  }
}

export default BuildBattleLeaderboardSettings;
