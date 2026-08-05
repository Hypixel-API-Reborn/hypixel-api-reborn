import DuelsMode from './DuelsMode.ts';
import type { DuelsModeId, DuelsTitleParsed } from '../../../../Types/Player.ts';
declare class DuelsModeFull extends DuelsMode {
    title: DuelsTitleParsed;
    constructor(data: Record<string, any>, mode: DuelsModeId);
}
export default DuelsModeFull;
//# sourceMappingURL=DuelsModeFull.d.ts.map