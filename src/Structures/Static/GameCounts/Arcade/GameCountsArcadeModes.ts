class GameCountsArcadeModes {
  party: number;
  holeInTheWall: number;
  defender: number;
  miniWalls: number;
  simonSays: number;
  zombiesBadBlood: number;
  hideAndSeekPartyPooper: number;
  dayOne: number;
  drawTheirThing: number;
  zombiesAlianArcadium: number;
  pixelParty: number;
  oneInTheQuiver: number;
  soccer: number;
  zombiesPrison: number;
  ender: number;
  throwOut: number;
  starWars: number;
  dragonWars2: number;
  dropper: number;
  zombiesDeadEnd: number;
  disasters: number;
  farmHunt: number;
  hideAndSeekPropHunt: number;
  constructor(data: Record<string, any>) {
    this.party = data?.PARTY || 0;
    this.holeInTheWall = data?.HOLE_IN_THE_WALL || 0;
    this.defender = data?.DEFENDER || 0;
    this.miniWalls = data?.MINI_WALLS || 0;
    this.simonSays = data?.SIMON_SAYS || 0;
    this.zombiesBadBlood = data?.ZOMBIES_BAD_BLOOD || 0;
    this.hideAndSeekPartyPooper = data?.HIDE_AND_SEEK_PARTY_POOPER || 0;
    this.dayOne = data?.DAYONE || 0;
    this.drawTheirThing = data?.DRAW_THEIR_THING || 0;
    this.zombiesAlianArcadium = data?.ZOMBIES_ALIEN_ARCADIUM || 0;
    this.pixelParty = data?.PIXEL_PARTY || 0;
    this.oneInTheQuiver = data?.ONEINTHEQUIVER || 0;
    this.soccer = data?.SOCCER || 0;
    this.zombiesPrison = data?.ZOMBIES_PRISON || 0;
    this.ender = data?.ENDER || 0;
    this.throwOut = data?.THROW_OUT || 0;
    this.starWars = data?.STARWARS || 0;
    this.dragonWars2 = data?.DRAGONWARS2 || 0;
    this.dropper = data?.DROPPER || 0;
    this.zombiesDeadEnd = data?.ZOMBIES_DEAD_END || 0;
    this.disasters = data?.DISASTERS || 0;
    this.farmHunt = data?.FARM_HUNT || 0;
    this.hideAndSeekPropHunt = data?.HIDE_AND_SEEK_PROP_HUNT || 0;
  }
}

export default GameCountsArcadeModes;
