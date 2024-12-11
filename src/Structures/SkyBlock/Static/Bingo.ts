function parsePosition(position: number): [number, number] {
  const x = (position % 5) + 1;
  const y = Math.floor(position / 5) + 1;
  return [x, y];
}

class Bingo {
  name: string;
  id: string;
  row: number | null;
  column: number | null;
  rawLore: string;
  lore: string;
  tiers: number[];
  tierStep: number | null;
  requiredAmount: number | null;
  type: 'ONE_TIME' | 'ONE_TIER' | 'TIERED';
  constructor(data: Record<string, any>, position: number = 0) {
    this.name = data.name;
    this.id = data.id;
    const [row, column] = parsePosition(position);
    this.row = row;
    this.column = column;
    this.rawLore = data.lore;
    this.lore = data.lore?.replace?.(/§([1-9]|[a-l])|§/gm, '') || [];
    this.tiers = Array.isArray(data.tiers) ? data.tiers.map((x) => parseInt(x, 10) || 0) : [];
    this.tierStep = this.getTierStep();
    this.requiredAmount = parseInt(data.requiredAmount, 10) ?? null;
    this.type = this.tiers ? 'TIERED' : this.requiredAmount ? 'ONE_TIER' : 'ONE_TIME';
  }

  toString(): string {
    return this.id;
  }

  private getTierStep(): number | null {
    if ('TIERED' !== this.type) return null;
    // No step possible
    if (2 > this.tiers.length) return null;
    const hypotheticStep = (this.tiers?.[1] || 0) - (this.tiers?.[0] || 0);
    // Check if every 2 elements have the same step
    const isConstant = this.tiers.slice(1).every((el, index) => {
      return hypotheticStep === (this.tiers?.[index - 1] || 0) - el;
    });
    if (!isConstant) return null;
    return hypotheticStep;
  }
}

export default Bingo;
