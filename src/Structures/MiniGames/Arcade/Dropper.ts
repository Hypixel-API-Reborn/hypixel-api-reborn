import DropperMap from './DropperMap.js';

class Dropper {
  wins: number;
  fails: number;
  fastestGame: number;
  flawlessGames: number;
  gamesPlayed: number;
  mapsCompleted: number;
  gamesFinished: number;
  maps: Record<string, DropperMap>;
  constructor(data: Record<string, any>) {
    this.wins = data?.wins ?? 0;
    this.fails = data?.fails ?? 0;
    this.fastestGame = data?.fastest_game ?? 0;
    this.flawlessGames = data?.flawless_games ?? 0;
    this.gamesPlayed = data?.games_played ?? 0;
    this.mapsCompleted = data?.maps_completed ?? 0;
    this.gamesFinished = data?.games_finished ?? 0;
    this.maps = {};
    Object?.keys(data?.map_stats ?? {})?.forEach((map) => {
      this.maps[map] = new DropperMap(data?.map_stats, map);
    });
  }
}

export default Dropper;
