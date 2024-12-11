import SkyWarsKits from './SkyWarsKits.js';

class SkyWarsPackages {
  rawPackages: Record<string, any>;
  cages: any;
  kits: SkyWarsKits;
  achievements: any;
  constructor(data: Record<string, any>) {
    this.rawPackages = data;
    this.cages = this.parseCages();
    this.kits = new SkyWarsKits(data);
    this.achievements = this.rawPackages
      ?.map((pkg: string) => pkg?.match(/^([A-Za-z]+)_?achievement([0-9]?)$/))
      ?.filter((x: any) => x)
      ?.map((x: any[]) => x?.slice(1)?.join(''));
  }

  parseCages(): string[] {
    return this.rawPackages
      .map((pkg: string) => pkg?.match(/^cage_([A-Za-z]+)-cage$/))
      .filter((x: any) => x)
      .map((x: string[]) => x[1]?.replace(/-[a-z]/g, (x) => (x?.[1] || '').toUpperCase()));
  }
}

export default SkyWarsPackages;
