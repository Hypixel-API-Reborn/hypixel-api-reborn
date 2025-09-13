class PlayerSeasonalChristmasYearLeveling {
  experience: number;
  constructor(data: Record<string, any>) {
    this.experience = data?.experience || 0;
  }
}

export default PlayerSeasonalChristmasYearLeveling;
