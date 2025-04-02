import type { SkyBlockBingoGoalType } from '../../../Types/SkyBlock.js';

function parsePosition(position: number): [number, number] {
  const x = (position % 5) + 1;
  const y = Math.floor(position / 5) + 1;
  return [x, y];
}

class SkyBlockBingoGoal {
  name: string;
  id: string;
  row: number | null;
  column: number | null;
  lore: string;
  progress: number;
  tiers: number[];
  requiredAmount: number | null;
  type: SkyBlockBingoGoalType;
  constructor(data: Record<string, any>, position: number = 0) {
    this.id = data?.id || 'UNKNOWN';
    this.name = data?.name || 'UNKNOWN';
    const [row, column] = parsePosition(position);
    this.row = row;
    this.column = column;
    this.lore = data?.lore || 'UNKNOWN';
    this.progress = data?.progress || 0;
    this.tiers = Array.isArray(data.tiers) ? data.tiers.map((x) => parseInt(x, 10) || 0) : [];
    this.requiredAmount = parseInt(data.requiredAmount, 10) ?? null;
    this.type = this.tiers ? 'TIERED' : this.requiredAmount ? 'ONE_TIER' : 'ONE_TIME';
  }

  toString(): string {
    return this.id;
  }
}

export default SkyBlockBingoGoal;
