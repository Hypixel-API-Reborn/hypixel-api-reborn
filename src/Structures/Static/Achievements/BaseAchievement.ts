class BaseAchievement {
  codeName: string;
  name: string;
  description: string;
  secret: boolean;
  legacy: boolean;
  constructor(achievementName: string, data: Record<string, any>) {
    this.codeName = achievementName;
    this.name = data.name;
    this.description = data.description;
    this.secret = data.secret || false;
    this.legacy = data.legacy || false;
  }

  toString(): string {
    return this.codeName;
  }
}

export default BaseAchievement;
