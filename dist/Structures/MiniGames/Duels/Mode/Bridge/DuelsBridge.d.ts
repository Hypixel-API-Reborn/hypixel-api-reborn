import DuelsBridgeMode from './DuelsBridgeMode.ts';
import type { DuelsBridgeMap } from '../../../../../Types/Player.ts';
declare class DuelsBridge extends DuelsBridgeMode {
    duel: DuelsBridgeMode;
    doubles: DuelsBridgeMode;
    threes: DuelsBridgeMode;
    four: DuelsBridgeMode;
    '2v2v2v2': DuelsBridgeMode;
    '3v3v3v3': DuelsBridgeMode;
    tournament: DuelsBridgeMode;
    capture: DuelsBridgeMode;
    captureThrees: DuelsBridgeMode;
    bridgeMapWins: DuelsBridgeMap[];
    constructor(data: Record<string, any>);
}
export default DuelsBridge;
//# sourceMappingURL=DuelsBridge.d.ts.map