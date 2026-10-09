import SkyWarsKitsMythic from './SkyWarsKitsMythic.ts';

class SkyWarsKitsMythics {
  chronobreaker: SkyWarsKitsMythic;
  netherLord: SkyWarsKitsMythic;
  endLord: SkyWarsKitsMythic;
  monsterTrainer: SkyWarsKitsMythic;
  cryomancer: SkyWarsKitsMythic;
  thundermeister: SkyWarsKitsMythic;
  fishmonger: SkyWarsKitsMythic;
  constructor(data: Record<string, any>) {
    this.chronobreaker = new SkyWarsKitsMythic(data, 'kit_mythical_chronobreaker');
    this.netherLord = new SkyWarsKitsMythic(data, 'kit_mythical_nether-lord');
    this.endLord = new SkyWarsKitsMythic(data, 'kit_mythical_end-lord');
    this.monsterTrainer = new SkyWarsKitsMythic(data, 'kit_mythical_monster-trainer');
    this.cryomancer = new SkyWarsKitsMythic(data, 'kit_mythical_cryomancer');
    this.thundermeister = new SkyWarsKitsMythic(data, 'kit_mythical_thundermeister');
    this.fishmonger = new SkyWarsKitsMythic(data, 'kit_mythical_fishmonger');
  }
}

export default SkyWarsKitsMythics;
