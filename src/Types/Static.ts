export const QuestObjectiveTypes = ['Integer', 'Boolean'] as const;
export type QuestObjectiveType = (typeof QuestObjectiveTypes)[number];
export const QuestTypes = ['Daily', 'Weekly'] as const;
export type QuestType = (typeof QuestTypes)[number];

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
