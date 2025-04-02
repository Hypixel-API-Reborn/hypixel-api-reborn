class SkyBlockMemberPlayerStatsSpookyFestival {
  year: number;
  green: number;
  purple: number;
  total: number;
  constructor(data: Record<string, any>, year: number) {
    this.year = year;
    this.green = data?.green_candy || 0;
    this.purple = data?.purple_candy || 0;
    this.total = this.green + this.purple;
  }

  toString(): number {
    return this.total;
  }
}

export default SkyBlockMemberPlayerStatsSpookyFestival;
