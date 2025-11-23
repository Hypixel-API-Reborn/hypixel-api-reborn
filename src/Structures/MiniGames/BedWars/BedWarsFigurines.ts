class BedWarsFigurines {
  active: string | 'UNKNOWN';
  featuredCommon: string[];
  featuredLegendary: string[];
  featuredRare: string[];
  constructor(data: Record<string, any>) {
    this.active = data?.active || 'UNKNOWN';
    this.featuredCommon = data?.featured?.COMMON || [];
    this.featuredLegendary = data?.featured?.LEGENDARY || [];
    this.featuredRare = data?.featured?.RARE || [];
  }
}

export default BedWarsFigurines;
