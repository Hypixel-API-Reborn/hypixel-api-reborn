import SkyWarsKit from './SkyWarsKit.js';

class SkyWarsKits {
  kits: SkyWarsKit[];
  constructor(kits: Record<string, any>) {
    this.kits = kits.map((kit: any) => new SkyWarsKit(kit)).filter((kit: SkyWarsKit) => kit?.isKit);
  }
  get(gameMode: string = '', type: string = ''): SkyWarsKit[] {
    return this.kits.filter((kit) => kit?.gameMode?.startsWith(gameMode) && kit?.kitType.startsWith(type));
  }
}

export default SkyWarsKits;
