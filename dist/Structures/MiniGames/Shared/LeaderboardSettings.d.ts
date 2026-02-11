import type { LeaderboardSettingsResetType } from '../../../Types/Player.js';
declare class LeaderboardSettings<ModeType> {
    mode: ModeType | 'UNKNOWN';
    resetType: LeaderboardSettingsResetType | 'UNKNOWN';
    constructor(data: Record<string, any>);
}
export default LeaderboardSettings;
//# sourceMappingURL=LeaderboardSettings.d.ts.map