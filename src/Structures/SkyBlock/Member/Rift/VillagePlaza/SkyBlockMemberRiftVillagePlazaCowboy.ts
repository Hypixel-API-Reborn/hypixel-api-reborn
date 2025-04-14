import type { RiftVillagePlazaCowboyRabbit } from '../../../../../Types/SkyBlock.js';

class SkyBlockMemberRiftVillagePlazaCowboy {
  stage: number;
  hayEaten: number;
  rabbitName: RiftVillagePlazaCowboyRabbit | 'UNKNOWN';
  constructor(data: Record<string, any>) {
    this.stage = data?.stage || 0;
    this.hayEaten = data?.hay_eaten || 0;
    this.rabbitName = data?.rabbit_name || 'UNKNOWN';
  }
}

export default SkyBlockMemberRiftVillagePlazaCowboy;
