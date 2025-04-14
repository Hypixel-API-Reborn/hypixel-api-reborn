import Divide from '../../../Utils/Divide.js';
import ZombiesStats from './ZombiesStats.js';
import { RemoveSnakeCaseString } from '../../../Utils/RemoveSnakeCase.js';

class Zombies {
  overall: ZombiesStats;
  deadEnd: ZombiesStats;
  badBlood: ZombiesStats;
  alienArcadium: ZombiesStats;
  prison: ZombiesStats;
  killsByZombie: Record<string, number>;
  bulletsHit: number;
  bulletsShot: number;
  gunAccuracy: number;
  headShots: number;
  headShotAccuracy: number;
  constructor(data: Record<string, any>) {
    this.overall = new ZombiesStats(data);
    this.deadEnd = new ZombiesStats(data, 'deadend');
    this.badBlood = new ZombiesStats(data, 'badblood');
    this.alienArcadium = new ZombiesStats(data, 'alienarcadium');
    this.prison = new ZombiesStats(data, 'prison');
    this.killsByZombie = this.parseZombiesKills(data);
    this.bulletsHit = data?.bullets_hit_zombies || 0;
    this.bulletsShot = data?.bullets_shot_zombies || 0;
    this.gunAccuracy = Divide(this.bulletsHit, this.bulletsShot);
    this.headShots = data?.headshots_zombies || 0;
    this.headShotAccuracy = Divide(this.headShots, this.bulletsShot);
  }
  private parseZombiesKills(data: Record<string, any>): Record<string, number> {
    const matches = Array.from(Object.keys(data))
      .map((x) => x.match(/^([A-Za-z]+)_zombie_kills_zombies$/))
      .filter((x) => x);
    // From entries might be broken
    return Object.fromEntries(matches.map((x: any) => [RemoveSnakeCaseString(x[1]), data[x[0]]]));
  }
}

export default Zombies;
