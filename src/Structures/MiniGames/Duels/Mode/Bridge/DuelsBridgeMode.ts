import DuelsMode from '../DuelsMode.ts';
import { ParseModeBefore } from '../../../../../Utils/ParseMode.ts';
import type { DuelsModeBridgeId } from '../../../../../Types/Player.ts';

class DuelsBridgeMode extends DuelsMode {
  goals: number;
  constructor(data: Record<string, any>, mode: DuelsModeBridgeId) {
    super(data, mode);
    mode = ParseModeBefore(mode) as DuelsModeBridgeId;
    this.goals = data?.[`${mode}goals`] ?? 0;
  }
}

export default DuelsBridgeMode;
