class SkyBlockMemberLeveling {
    experience;
    level;
    completions;
    completed;
    completedTasks;
    lastViewedTasks;
    highestPetScore;
    miningFiestaOresMined;
    fishingFestivalSharksKilled;
    taskSort;
    claimedTalisman;
    emblemUnlocks;
    constructor(data) {
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
    toString() {
        return this.level;
    }
}
export default SkyBlockMemberLeveling;
//# sourceMappingURL=SkyBlockMemberLeveling.js.map