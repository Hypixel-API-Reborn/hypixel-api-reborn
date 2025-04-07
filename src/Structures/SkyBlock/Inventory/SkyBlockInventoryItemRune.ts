class SkyBlockInventoryItemRune {
  runeId: string | 'UNKNOWN';
  tier: number;
  constructor(data: Record<string, any>) {
    this.runeId = data?.id || 'UNKNOWN';
    this.tier = data?.tier || 0;
  }
}

export default SkyBlockInventoryItemRune;
