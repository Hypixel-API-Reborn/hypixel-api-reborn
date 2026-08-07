import DuelsMode from '../DuelsMode.js';
import { ParseModeBefore } from '../../../../../Utils/index.js';
import type { DuelsModeBridgeId } from '../../../../../Types/Player.js';

class DuelsBridgeMode extends DuelsMode {
  goals: number;
  constructor(data: Record<string, any>, mode: DuelsModeBridgeId) {
    super(data, mode);
    mode = ParseModeBefore(mode) as DuelsModeBridgeId;
    this.goals = data?.[`${mode}goals`] ?? 0;
  }
}

export default DuelsBridgeMode;
