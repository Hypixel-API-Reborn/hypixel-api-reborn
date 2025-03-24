import SkyblockMemberMiningPowder from './SkyblockMemberMiningPowder.js';

class SkyblockMemberMiningPowders {
  mithril: SkyblockMemberMiningPowder;
  gemstone: SkyblockMemberMiningPowder;
  glacite: SkyblockMemberMiningPowder;
  constructor(data: Record<string, any>) {
    this.mithril = new SkyblockMemberMiningPowder(data || {}, 'mithril');
    this.gemstone = new SkyblockMemberMiningPowder(data || {}, 'gemstone');
    this.glacite = new SkyblockMemberMiningPowder(data || {}, 'glacite');
  }
}

export default SkyblockMemberMiningPowders;
