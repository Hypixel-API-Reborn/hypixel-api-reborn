class PlayerAchievementsRewards {
  [key: string]: number;
  constructor(data: Record<string, any>) {
    Object.keys(data)
      .filter((key) => key.startsWith('for_points_'))
      .map((key) => ({ [key.replace('for_points_', '')]: data[key] }))
      .sort((a, b) => {
        const keyA = Object.keys(a)?.[0] || '';
        const keyB = Object.keys(b)?.[0] || '';
        return parseInt(keyA) - parseInt(keyB);
      })
      .forEach((item) => {
        const key: string = Object.keys(item)?.[0] || 'UNKNOWN';
        this[key] = item[key];
      });
  }
}

export default PlayerAchievementsRewards;
