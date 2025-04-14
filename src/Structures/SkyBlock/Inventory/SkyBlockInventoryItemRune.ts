class SkyBlockInventoryItemRune {
  runeId: string | 'UNKNOWN';
  tier: number;
  constructor(data: Record<string, any>) {
    this.runeId = data?.id || 'UNKNOWN';
    this.tier = data?.tier || 0;
  }

  toString(): string | 'UNKNOWN' {
    return this.runeId;
  }
}

export default SkyBlockInventoryItemRune;
