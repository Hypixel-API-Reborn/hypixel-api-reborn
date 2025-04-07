class SkyBlockInventoryItemAttribute {
  id: string | 'UNKNOWN';
  tier: number;
  constructor(data: Record<string, any>) {
    this.id = data?.id || 'UNKNOWN';
    this.tier = data?.tier || 0;
  }
}

export default SkyBlockInventoryItemAttribute;
