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

export interface AchivementTier {
  tier: number;
  points?: number;
  amount: number;
}
