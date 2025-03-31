import SkyblockMemberCrimsonIsleDojoMinigame from './SkyblockMemberCrimsonIsleDojoMinigame.js';
import type { CrimsonIsleBelt } from '../../../../Types/Skyblock.js';

class SkyblockMemberCrimsonIsleDojo {
  force: SkyblockMemberCrimsonIsleDojoMinigame;
  stamina: SkyblockMemberCrimsonIsleDojoMinigame;
  mastery: SkyblockMemberCrimsonIsleDojoMinigame;
  discipline: SkyblockMemberCrimsonIsleDojoMinigame;
  swiftness: SkyblockMemberCrimsonIsleDojoMinigame;
  tenacity: SkyblockMemberCrimsonIsleDojoMinigame;
  control: SkyblockMemberCrimsonIsleDojoMinigame;
  belt: CrimsonIsleBelt;
  constructor(data: Record<string, any>) {
    this.force = new SkyblockMemberCrimsonIsleDojoMinigame(data || {}, 'mob_kb');
    this.stamina = new SkyblockMemberCrimsonIsleDojoMinigame(data || {}, 'wall_jump');
    this.mastery = new SkyblockMemberCrimsonIsleDojoMinigame(data || {}, 'archer');
    this.discipline = new SkyblockMemberCrimsonIsleDojoMinigame(data || {}, 'sword_swap');
    this.swiftness = new SkyblockMemberCrimsonIsleDojoMinigame(data || {}, 'snake');
    this.tenacity = new SkyblockMemberCrimsonIsleDojoMinigame(data || {}, 'fireball');
    this.control = new SkyblockMemberCrimsonIsleDojoMinigame(data || {}, 'lock_head');
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

export default SkyblockMemberCrimsonIsleDojo;
