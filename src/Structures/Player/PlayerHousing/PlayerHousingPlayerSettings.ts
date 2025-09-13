import type { PlayerHousingSettingsTextInputType } from '../../../Types/Player.js';

class PlayerHousingPlayerSettings {
  playerVisibility: number;
  showBorder: boolean;
  playJukeboxMusic: boolean;
  showTips: boolean;
  showProToolsParticles: boolean;
  showHousingPlusPrefix: boolean;
  textInputType: PlayerHousingSettingsTextInputType | 'UNKNOWN';
  constructor(data: Record<string, any>) {
    this.playerVisibility = data?.VISIBILITY ? Number(data?.VISIBILITY.split('-')[1]) : 4;
    this.showBorder = data?.BORDER ? Boolean(data?.BORDER.split('-')[1]) : true;
    this.playJukeboxMusic = data?.JUKEBOX_MUSIC ? Boolean(data?.JUKEBOX_MUSIC.split('-')[1]) : true;
    this.showTips = data?.TIPS ? Boolean(data?.TIPS.split('-')[1]) : false;
    this.showProToolsParticles = data?.PRO_TOOLS_PARTICLES ? Boolean(data?.PRO_TOOLS_PARTICLES.split('-')[1]) : false;
    this.showHousingPlusPrefix = data?.HOUSING_PLUS_PREFIX ? Boolean(data?.HOUSING_PLUS_PREFIX.split('-')[1]) : false;
    this.textInputType = data?.TEXT_INPUT_TYPE ? data?.TEXT_INPUT_TYPE.split('-')[1] : 'UNKNOWN';
  }
}

export default PlayerHousingPlayerSettings;
