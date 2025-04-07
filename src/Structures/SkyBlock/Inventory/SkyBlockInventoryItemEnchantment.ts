class SkyBlockInventoryItemEnchantment {
  name: string | 'UNKNOWN';
  level: number;
  constructor(data: Record<string, any>) {
    this.name = data?.id || 'UNKNOWN';
    this.level = data?.lvl || 0;
  }

  toString(): string | 'UNKNOWN' {
    return this.name;
  }
}

export default SkyBlockInventoryItemEnchantment;
