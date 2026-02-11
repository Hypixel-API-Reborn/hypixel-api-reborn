import type { PlayerHousingSettingsTextInputType } from '../../../Types/Player.js';
declare class PlayerHousingPlayerSettings {
    playerVisibility: number;
    showBorder: boolean;
    playJukeboxMusic: boolean;
    showTips: boolean;
    showProToolsParticles: boolean;
    showHousingPlusPrefix: boolean;
    textInputType: PlayerHousingSettingsTextInputType | 'UNKNOWN';
    constructor(data: Record<string, any>);
}
export default PlayerHousingPlayerSettings;
//# sourceMappingURL=PlayerHousingPlayerSettings.d.ts.map