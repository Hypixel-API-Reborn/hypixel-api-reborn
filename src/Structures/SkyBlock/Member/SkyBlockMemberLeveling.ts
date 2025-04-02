import type { TaskLevelingSort } from '../../../Types/SkyBlock.js';

class SkyBlockMemberLeveling {
  experience: number;
  level: number;
  completions: Record<string, number>;
  completed: string[];
  completedTasks: string[];
  lastViewedTasks: string[];
  highestPetScore: number;
  miningFiestaOresMined: number;
  fishingFestivalSharksKilled: number;
  taskSort: TaskLevelingSort | 'UNKNOWN';
  claimedTalisman: boolean;
  emblemUnlocks: string[];
  constructor(data: Record<string, any>) {
    this.experience = data?.experience || 0;
    this.level = this.experience / 100;
    this.completions = data?.completions || {};
    this.completed = data?.completed || [];
    this.completedTasks = data?.completed_tasks || [];
    this.lastViewedTasks = data?.last_viewed_tasks || [];
    this.highestPetScore = data?.highest_pet_score || 0;
    this.miningFiestaOresMined = data?.mining_fiesta_ores_mined || 0;
    this.fishingFestivalSharksKilled = data?.fishing_festival_sharks_killed || 0;
    this.taskSort = data?.task_sort || 'UNKNOWN';
    this.claimedTalisman = data?.claimed_talisman || false;
    this.emblemUnlocks = data?.emblem_unlocks || [];
  }

  toString(): number {
    return this.level;
  }
}

export default SkyBlockMemberLeveling;
