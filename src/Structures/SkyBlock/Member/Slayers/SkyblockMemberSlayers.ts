import SkyblockMemberSlayer from './SkyblockMemberSlayer.js';
import SkyblockMemberSlayersQuest from './SkyblockMemberSlayersQuest.js';

class SkyblockMemberSlayers {
  activeSlayer: SkyblockMemberSlayersQuest | null;
  zombie: SkyblockMemberSlayer;
  spider: SkyblockMemberSlayer;
  wolf: SkyblockMemberSlayer;
  enderman: SkyblockMemberSlayer;
  blaze: SkyblockMemberSlayer;
  vampire: SkyblockMemberSlayer;
  constructor(data: Record<string, any>) {
    this.activeSlayer = data?.slayer_quest ? new SkyblockMemberSlayersQuest(data?.slayer_quest || {}) : null;
    this.zombie = new SkyblockMemberSlayer(data?.slayer_bosses?.zombie || {}, 'zombie');
    this.spider = new SkyblockMemberSlayer(data?.slayer_bosses?.spider || {}, 'spider');
    this.wolf = new SkyblockMemberSlayer(data?.slayer_bosses?.wolf || {}, 'wolf');
    this.enderman = new SkyblockMemberSlayer(data?.slayer_bosses?.enderman || {}, 'enderman');
    this.blaze = new SkyblockMemberSlayer(data?.slayer_bosses?.blaze || {}, 'blaze');
    this.vampire = new SkyblockMemberSlayer(data?.slayer_bosses?.vampire || {}, 'vampire');
  }
}

export default SkyblockMemberSlayers;
