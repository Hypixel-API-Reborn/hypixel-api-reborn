import type { ZombiesMaps } from '../../../Types/Player.js';

class ZombiesStats {
  bestRound: number;
  deaths: number;
  doorsOpened: number;
  fastestRound10: number;
  fastestRound20: number;
  fastestRound30: number;
  playersRevived: number;
  timesKnockedDown: number;
  roundsSurvived: number;
  windowsRepaired: number;
  wins: number;
  zombieKills: number;
  constructor(data: Record<string, any>, map?: ZombiesMaps) {
    const mapName = map ? `_${map}` : '';
    this.bestRound = data?.[`best_round_zombies${mapName}`] || 0;
    this.deaths = data?.[`deaths_zombies${mapName}`] || 0;
    this.doorsOpened = data?.[`doors_opened_zombies${mapName}`] || 0;
    this.fastestRound10 = data?.[`fastest_time_10_zombies${mapName}_normal`] || 0;
    this.fastestRound20 = data?.[`fastest_time_20_zombies${mapName}_normal`] || 0;
    this.fastestRound30 = data?.[`fastest_time_30_zombies${mapName}_normal`] || 0;
    this.playersRevived = data?.[`players_revived_zombies${mapName}`] || 0;
    this.timesKnockedDown = data?.[`times_knocked_down_zombies${mapName}`] || 0;
    this.roundsSurvived = data?.[`total_rounds_survived_zombies${mapName}`] || 0;
    this.windowsRepaired = data?.[`windows_repaired_zombies${mapName}`] || 0;
    this.wins = data?.[`wins_zombies${mapName}`] || 0;
    this.zombieKills = data?.[`zombie_kills_zombies${mapName}`] || 0;
  }
}

export default ZombiesStats;
