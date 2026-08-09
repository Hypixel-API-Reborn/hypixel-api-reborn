import type { LeaderboardSettingsResetType } from '../../../Types/index.js';

class LeaderboardSettings<ModeType> {
  mode: ModeType | 'UNKNOWN';
  resetType: LeaderboardSettingsResetType | 'UNKNOWN';
  constructor(data: Record<string, any>) {
    this.mode = data?.mode ?? 'UNKNOWN';
    this.resetType = data?.resetType ?? 'UNKNOWN';
  }
}

export default LeaderboardSettings;
