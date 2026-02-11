import BaseSkyWarsMode from './BaseSkyWarsMode.ts';
import type { SkyWarsModeId } from '../../../../Types/Player.ts';
declare class SkyWarsMode extends BaseSkyWarsMode {
    activeKit: string | 'UNKNOWN';
    constructor(data: Record<string, any>, mode?: SkyWarsModeId);
}
export default SkyWarsMode;
//# sourceMappingURL=SkyWarsMode.d.ts.map