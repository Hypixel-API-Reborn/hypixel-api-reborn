import DuelsBridgeMode from "./DuelsBridgeMode.js";
class DuelsBridge extends DuelsBridgeMode {
    duel;
    doubles;
    threes;
    four;
    '2v2v2v2';
    '3v3v3v3';
    tournament;
    capture;
    captureThrees;
    bridgeMapWins;
    constructor(data) {
        super(data, 'bridge');
        this.duel = new DuelsBridgeMode(data, 'bridge_duel');
        this.doubles = new DuelsBridgeMode(data, 'bridge_doubles');
        this.threes = new DuelsBridgeMode(data, 'bridge_threes');
        this.four = new DuelsBridgeMode(data, 'bridge_four');
        this['2v2v2v2'] = new DuelsBridgeMode(data, 'bridge_2v2v2v2');
        this['3v3v3v3'] = new DuelsBridgeMode(data, 'bridge_3v3v3v3');
        this.tournament = new DuelsBridgeMode(data, 'bridge_tournament');
        this.capture = new DuelsBridgeMode(data, 'capture_duel');
        this.captureThrees = new DuelsBridgeMode(data, 'capture_threes');
        this.bridgeMapWins = data?.bridgeMapWins ?? [];
    }
}
export default DuelsBridge;
//# sourceMappingURL=DuelsBridge.js.map