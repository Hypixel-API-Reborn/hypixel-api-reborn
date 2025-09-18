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
    if (points >= 7000) {
      return 'Black';
    } else if (points >= 6000) {
      return 'Brown';
    } else if (points >= 4000) {
      return 'Blue';
    } else if (points >= 2000) {
      return 'Green';
    } else if (points >= 1000) {
      return 'Yellow';
    }
    return 'White';
  }
}

export default SkyBlockMemberCrimsonIsleDojo;
