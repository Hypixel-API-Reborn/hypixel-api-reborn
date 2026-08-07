import BaseSkyWarsMode from './BaseSkyWarsMode.js';
import { ParseModeAfter } from '../../../../Utils/index.js';
import type { SkyWarsModeId } from '../../../../Types/Player.js';

class SkyWarsMode extends BaseSkyWarsMode {
  activeKit: string | 'UNKNOWN';
  constructor(data: Record<string, any>, mode?: SkyWarsModeId) {
    mode = ParseModeAfter(mode) as SkyWarsModeId;
    super(data, mode);
    this.activeKit = data?.[`activeKit${mode.toUpperCase()}`] ?? 'UNKNOWN';
  }
}

export default SkyWarsMode;
