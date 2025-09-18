import type { RawSkyBlockObjective } from '../../../Types/SkyBlock.js';

class SkyBlockMemberObjectives {
  objectives: Record<string, RawSkyBlockObjective>;
  tutorial: string[];
  constructor(data: Record<string, any>) {
    this.objectives = Object.keys(data)
      .filter((key) => key !== 'tutorial')
      .reduce((obj: Record<string, RawSkyBlockObjective>, key: string) => {
        obj[key] = data[key];
        return obj;
      }, {});
    this.tutorial = data?.tutorial || [];
  }
}

export default SkyBlockMemberObjectives;
