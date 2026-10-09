import BaseSkyWarsMode from './BaseSkyWarsMode.ts';
import { ParseModeAfter } from '../../../../Utils/index.ts';
import type { SkyWarsModeId } from '../../../../Types/index.ts';

class SkyWarsMode extends BaseSkyWarsMode {
  activeKit: string | 'UNKNOWN';
  constructor(data: Record<string, any>, mode?: SkyWarsModeId) {
    mode = ParseModeAfter(mode) as SkyWarsModeId;
    super(data, mode);
    this.activeKit = data?.[`activeKit${mode.toUpperCase()}`] ?? 'UNKNOWN';
  }
}

export default SkyWarsMode;
