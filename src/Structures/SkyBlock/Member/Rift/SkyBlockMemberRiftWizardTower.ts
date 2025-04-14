class SkyBlockMemberRiftWizardTower {
  wizardQuestStep: number;
  crumbsLaidOut: number;
  constructor(data: Record<string, any>) {
    this.wizardQuestStep = data?.wizard_quest_step || 0;
    this.crumbsLaidOut = data?.crumbs_laid_out || 0;
  }
}

export default SkyBlockMemberRiftWizardTower;
