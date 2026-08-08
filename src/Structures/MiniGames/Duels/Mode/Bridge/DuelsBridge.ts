import DuelsBridgeMode from './DuelsBridgeMode.js';
import type { DuelsBridgeMap } from '../../../../../Types/index.js';

class DuelsBridge extends DuelsBridgeMode {
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
  constructor(data: Record<string, any>) {
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
