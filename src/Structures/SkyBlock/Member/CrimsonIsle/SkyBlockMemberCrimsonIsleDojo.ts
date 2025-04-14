import SkyBlockMemberCrimsonIsleDojoMinigame from './SkyBlockMemberCrimsonIsleDojoMinigame.js';
import type { CrimsonIsleBelt } from '../../../../Types/SkyBlock.js';

class SkyBlockMemberCrimsonIsleDojo {
  force: SkyBlockMemberCrimsonIsleDojoMinigame;
  stamina: SkyBlockMemberCrimsonIsleDojoMinigame;
  mastery: SkyBlockMemberCrimsonIsleDojoMinigame;
  discipline: SkyBlockMemberCrimsonIsleDojoMinigame;
  swiftness: SkyBlockMemberCrimsonIsleDojoMinigame;
  tenacity: SkyBlockMemberCrimsonIsleDojoMinigame;
  control: SkyBlockMemberCrimsonIsleDojoMinigame;
  belt: CrimsonIsleBelt;
  constructor(data: Record<string, any>) {
    this.force = new SkyBlockMemberCrimsonIsleDojoMinigame(data || {}, 'mob_kb');
    this.stamina = new SkyBlockMemberCrimsonIsleDojoMinigame(data || {}, 'wall_jump');
    this.mastery = new SkyBlockMemberCrimsonIsleDojoMinigame(data || {}, 'archer');
    this.discipline = new SkyBlockMemberCrimsonIsleDojoMinigame(data || {}, 'sword_swap');
    this.swiftness = new SkyBlockMemberCrimsonIsleDojoMinigame(data || {}, 'snake');
    this.tenacity = new SkyBlockMemberCrimsonIsleDojoMinigame(data || {}, 'fireball');
    this.control = new SkyBlockMemberCrimsonIsleDojoMinigame(data || {}, 'lock_head');
    this.belt = this.getBelt(
      this.force.points +
        this.stamina.points +
        this.mastery.points +
        this.discipline.points +
        this.swiftness.points +
        this.tenacity.points +
        this.control.points
    );
  }

  toString(): CrimsonIsleBelt {
    return this.belt;
  }

  private getBelt(points: number): CrimsonIsleBelt {
    if (7000 <= points) {
      return 'Black';
    } else if (6000 <= points) {
      return 'Brown';
    } else if (4000 <= points) {
      return 'Blue';
    } else if (2000 <= points) {
      return 'Green';
    } else if (1000 <= points) {
      return 'Yellow';
    }
    return 'White';
  }
}

export default SkyBlockMemberCrimsonIsleDojo;
