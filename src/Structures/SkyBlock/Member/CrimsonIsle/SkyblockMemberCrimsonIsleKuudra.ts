import SkyblockMemberCrimsonIsleKuudraPartyFinder from './SkyblockMemberCrimsonIsleKuudraPartyFinder.js';

class SkyblockMemberCrimsonIsleKuudra {
  basicCompletions: number;
  highestWaveBasic: number;
  hotCompletions: number;
  highestWaveHot: number;
  burningCompletions: number;
  highestWaveBurning: number;
  fieryCompletions: number;
  highestWaveFiery: number;
  infernalCompletions: number;
  highestWaveInfernal: number;
  partyFinderOptions: SkyblockMemberCrimsonIsleKuudraPartyFinder;
  totalCompletions: number;
  constructor(data: Record<string, any>, partyFinderOptions: Record<string, any>) {
    this.basicCompletions = data?.none || 0;
    this.highestWaveBasic = data?.highest_wave_none || 0;
    this.hotCompletions = data?.hot || 0;
    this.highestWaveHot = data?.highest_wave_hot || 0;
    this.burningCompletions = data?.burning || 0;
    this.highestWaveBurning = data?.highest_wave_burning || 0;
    this.fieryCompletions = data?.fiery || 0;
    this.highestWaveFiery = data?.highest_wave_fiery || 0;
    this.infernalCompletions = data?.infernal || 0;
    this.highestWaveInfernal = data?.highest_wave_infernal || 0;
    this.partyFinderOptions = new SkyblockMemberCrimsonIsleKuudraPartyFinder(partyFinderOptions || {});
    this.totalCompletions =
      this.basicCompletions +
      this.hotCompletions +
      this.burningCompletions +
      this.fieryCompletions +
      this.infernalCompletions;
  }

  toString(): number {
    return this.totalCompletions;
  }
}

export default SkyblockMemberCrimsonIsleKuudra;
