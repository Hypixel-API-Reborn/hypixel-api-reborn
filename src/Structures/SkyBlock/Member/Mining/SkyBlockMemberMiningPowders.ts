import SkyBlockMemberMiningPowder from './SkyBlockMemberMiningPowder.ts';

class SkyBlockMemberMiningPowders {
  mithril: SkyBlockMemberMiningPowder;
  gemstone: SkyBlockMemberMiningPowder;
  glacite: SkyBlockMemberMiningPowder;
  constructor(data: Record<string, any>) {
    this.mithril = new SkyBlockMemberMiningPowder(data ?? {}, 'mithril');
    this.gemstone = new SkyBlockMemberMiningPowder(data ?? {}, 'gemstone');
    this.glacite = new SkyBlockMemberMiningPowder(data ?? {}, 'glacite');
  }
}

export default SkyBlockMemberMiningPowders;
