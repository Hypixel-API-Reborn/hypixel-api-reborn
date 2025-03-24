import type { RawSkyblockObjective } from '../../../Types/Skyblock.js';

class SkyblockMemberObjectives {
  objectives: Record<string, RawSkyblockObjective>;
  tutorial: string[];
  constructor(data: Record<string, any>) {
    this.objectives = Object.keys(data)
      .filter((key) => 'tutorial' !== key)
      .reduce((obj: Record<string, RawSkyblockObjective>, key: string) => {
        obj[key] = data[key];
        return obj;
      }, {});
    this.tutorial = data?.tutorial || [];
  }
}

export default SkyblockMemberObjectives;
