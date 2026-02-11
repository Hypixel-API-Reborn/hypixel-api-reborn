import SkyBlockMemberCrimsonIsleDojoMinigame from './SkyBlockMemberCrimsonIsleDojoMinigame.js';
class SkyBlockMemberCrimsonIsleDojo {
    force;
    stamina;
    mastery;
    discipline;
    swiftness;
    tenacity;
    control;
    belt;
    constructor(data) {
        this.force = new SkyBlockMemberCrimsonIsleDojoMinigame(data || {}, 'mob_kb');
        this.stamina = new SkyBlockMemberCrimsonIsleDojoMinigame(data || {}, 'wall_jump');
        this.mastery = new SkyBlockMemberCrimsonIsleDojoMinigame(data || {}, 'archer');
        this.discipline = new SkyBlockMemberCrimsonIsleDojoMinigame(data || {}, 'sword_swap');
        this.swiftness = new SkyBlockMemberCrimsonIsleDojoMinigame(data || {}, 'snake');
        this.tenacity = new SkyBlockMemberCrimsonIsleDojoMinigame(data || {}, 'fireball');
        this.control = new SkyBlockMemberCrimsonIsleDojoMinigame(data || {}, 'lock_head');
        this.belt = this.getBelt(this.force.points +
            this.stamina.points +
            this.mastery.points +
            this.discipline.points +
            this.swiftness.points +
            this.tenacity.points +
            this.control.points);
    }
    toString() {
        return this.belt;
    }
    getBelt(points) {
        if (points >= 7000) {
            return 'Black';
        }
        else if (points >= 6000) {
            return 'Brown';
        }
        else if (points >= 4000) {
            return 'Blue';
        }
        else if (points >= 2000) {
            return 'Green';
        }
        else if (points >= 1000) {
            return 'Yellow';
        }
        return 'White';
    }
}
export default SkyBlockMemberCrimsonIsleDojo;
//# sourceMappingURL=SkyBlockMemberCrimsonIsleDojo.js.map