class WoolWarsSettings {
  preroundBow: boolean;
  preroundPotion: boolean;
  constructor(data: Record<string, any>) {
    this.preroundBow = data?.preround_bow ?? false;
    this.preroundPotion = data?.preround_potion ?? false;
  }
}

export default WoolWarsSettings;
