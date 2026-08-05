class DuelsOdyssey {
  currentAllModesLevel: number;
  currentBoxingLevel: number;
  currentBridgeLevel: number;
  currentOPLevel: number;
  currentSkyWarsLevel: number;
  currentSpleefLevel: number;
  currentSumoLevel: number;
  currentMegaWallsLevel: number;
  currentBlitzLevel: number;
  currentClassicLevel: number;
  currentBowLevel: number;
  currentComboLevel: number;
  currentUHCLevel: number;
  currentParkourLevel: number;
  currentArenaLevel: number;
  currentBedWarsLevel: number;
  currentNoDebuffLevel: number;
  currentQuakeLevel: number;
  constructor(data: Record<string, any>) {
    this.currentAllModesLevel = data?.claimed_odyssey_rewards?.all_modes ?? 0;
    this.currentBoxingLevel = data?.claimed_odyssey_rewards?.boxing ?? 0;
    this.currentBridgeLevel = data?.claimed_odyssey_rewards?.bridge ?? 0;
    this.currentOPLevel = data?.claimed_odyssey_rewards?.op ?? 0;
    this.currentSkyWarsLevel = data?.claimed_odyssey_rewards?.skywars ?? 0;
    this.currentSpleefLevel = data?.claimed_odyssey_rewards?.spleef ?? 0;
    this.currentSumoLevel = data?.claimed_odyssey_rewards?.sumo ?? 0;
    this.currentMegaWallsLevel = data?.claimed_odyssey_rewards?.mega_walls ?? 0;
    this.currentBlitzLevel = data?.claimed_odyssey_rewards?.blitz ?? 0;
    this.currentClassicLevel = data?.claimed_odyssey_rewards?.classic ?? 0;
    this.currentBowLevel = data?.claimed_odyssey_rewards?.bow ?? 0;
    this.currentComboLevel = data?.claimed_odyssey_rewards?.combo ?? 0;
    this.currentUHCLevel = data?.claimed_odyssey_rewards?.uhc ?? 0;
    this.currentParkourLevel = data?.claimed_odyssey_rewards?.parkour ?? 0;
    this.currentArenaLevel = data?.claimed_odyssey_rewards?.arena ?? 0;
    this.currentBedWarsLevel = data?.claimed_odyssey_rewards?.bedwars ?? 0;
    this.currentNoDebuffLevel = data?.claimed_odyssey_rewards?.no_debuff ?? 0;
    this.currentQuakeLevel = data?.claimed_odyssey_rewards?.quake ?? 0;
  }
}

export default DuelsOdyssey;
