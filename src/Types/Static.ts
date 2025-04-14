/* v8 ignore next 10000 */

export type QuestObjectiveType = 'Integer' | 'Boolean';
export type QuestType = 'Daily' | 'Weekly';

export interface QuestReward {
  type: string;
  amount: number;
}

export interface ChallengeReward {
  type: 'MultipliedExperienceReward';
  amount: number;
}

export interface AchievementTier {
  tier: number;
  points?: number;
  amount: number;
}
