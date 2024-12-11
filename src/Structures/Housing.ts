class HousingGivenCookies {
  date: string;
  houses: string[];
  constructor(date: string, houses: string[]) {
    this.date = date;
    this.houses = houses;
  }
}

class Housing {
  allowedBlocks: string[];
  playerVisibility: number;
  showBorder: boolean;
  showTips: boolean;
  tutorialStage: string;
  packages: string[];
  firstHouseJoinTimestamp: number;
  firstHouseJoinAt: Date;
  plotSize: number;
  givenCookies: HousingGivenCookies[];
  constructor(data: Record<string, any>) {
    this.allowedBlocks = data.allowedBlocks;
    this.playerVisibility = data?.playerSettings?.VISIBILITY
      ? Number(data?.playerSettings?.VISIBILITY.split('-')[1])
      : 4;
    this.showBorder = data?.playerSettings?.BORDER ? Boolean(data?.playerSettings?.BORDER.split('-')[1]) : true;
    this.showTips = data?.playerSettings?.TIPS ? Boolean(data?.playerSettings?.TIPS.split('-')[1]) : false;
    this.tutorialStage = data.tutorialStep;
    this.packages = data.packages;
    this.firstHouseJoinTimestamp = data.firstHouseJoinMs;
    this.firstHouseJoinAt = new Date(this.firstHouseJoinTimestamp);
    this.plotSize = data.plotSize;
    this.givenCookies = [];
    Object.keys(data)
      .filter((key) => key.startsWith('given_cookies_'))
      .map((key) => {
        this.givenCookies.push(new HousingGivenCookies(key, data[key]));
      });
  }
}

export default Housing;
