import SkyBlockMemberSlayer from './SkyBlockMemberSlayer.ts';
import SkyBlockMemberSlayersQuest from './SkyBlockMemberSlayersQuest.ts';

class SkyBlockMemberSlayers {
  activeSlayer: SkyBlockMemberSlayersQuest | null;
  zombie: SkyBlockMemberSlayer;
  spider: SkyBlockMemberSlayer;
  wolf: SkyBlockMemberSlayer;
  enderman: SkyBlockMemberSlayer;
  blaze: SkyBlockMemberSlayer;
  vampire: SkyBlockMemberSlayer;
  constructor(data: Record<string, any>) {
    this.activeSlayer = data?.slayer_quest ? new SkyBlockMemberSlayersQuest(data?.slayer_quest ?? {}) : null;
    this.zombie = new SkyBlockMemberSlayer(data?.slayer_bosses?.zombie ?? {}, 'zombie');
    this.spider = new SkyBlockMemberSlayer(data?.slayer_bosses?.spider ?? {}, 'spider');
    this.wolf = new SkyBlockMemberSlayer(data?.slayer_bosses?.wolf ?? {}, 'wolf');
    this.enderman = new SkyBlockMemberSlayer(data?.slayer_bosses?.enderman ?? {}, 'enderman');
    this.blaze = new SkyBlockMemberSlayer(data?.slayer_bosses?.blaze ?? {}, 'blaze');
    this.vampire = new SkyBlockMemberSlayer(data?.slayer_bosses?.vampire ?? {}, 'vampire');
  }
}

export default SkyBlockMemberSlayers;
