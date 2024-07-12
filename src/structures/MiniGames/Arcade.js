// IMPORTANT : a lot of the properties from the API seem to be nonsense

const { removeSnakeCaseString } = require('../../utils/removeSnakeCase');
const { weekAB, monthAB } = require('../../utils/oscillation');
const divide = require('../../utils/divide');

// eslint-disable-next-line jsdoc/require-jsdoc
function parseZombiesKills(data) {
  const matches = Array.from(Object.keys(data))
    .map((x) => x.match(/^([A-Za-z]+)_zombie_kills_zombies$/))
    .filter((x) => x);
  // From entries might be broken
  return Object.fromEntries(matches.map((x) => [removeSnakeCaseString(x[1]), data[x[0]] || 0]));
}
/**
 * Zombies - Stats by Map + Difficulty
 */
class ZombiesStats {
  /**
   * Constructor
   * @param {Object} data Data from API
   * @param {string} type Map name + difficulty ( default overall )
   */
  constructor(data, type = '') {
    if (type) type = `_${type}`;
    /**
     * Best Round
     * @type {number}
     */
    this.bestRound = data[`best_round_zombies${type}`] || 0;
    /**
     * Deaths ( NOT losses )
     * @type {number}
     */
    this.deaths = data[`deaths_zombies${type}`] || 0;
    /**
     * Doors opened
     * @type {number}
     */
    this.doorsOpened = data[`doors_opened_zombies${type}`] || 0;
    /**
     * Fastest time to reach round 10 in seconds
     * @type {number}
     */
    this.fastestRound10 = data[`fastest_time_10_zombies${type}_normal`] || 0;
    /**
     * Fastest time to reach round 20 in seconds
     * @type {number}
     */
    this.fastestRound20 = data[`fastest_time_20_zombies${type}_normal`] || 0;
    /**
     * Fastest time to reach round 30 in seconds
     * @type {number}
     */
    this.fastestRound30 = data[`fastest_time_30_zombies${type}_normal`] || 0;
    /**
     * Players revived
     * @type {number}
     */
    this.playersRevived = data[`players_revived_zombies${type}`] || 0;
    /**
     * Number of times player is knocked down
     * @type {number}
     */
    this.timesKnockedDown = data[`times_knocked_down_zombies${type}`] || 0;
    /**
     * Total amount of rounds the player survived
     * @type {number}
     */
    this.roundsSurvived = data[`total_rounds_survived_zombies${type}`] || 0;
    /**
     * Total amount of windows fully repaired by player
     * @type {number}
     */
    this.windowsRepaired = data[`windows_repaired_zombies${type}`] || 0;
    /**
     * Wins
     * @type {number}
     */
    this.wins = data[`wins_zombies${type}`] || 0;
    /**
     * Total Zombie Kills
     * @type {number}
     */
    this.zombieKills = data[`zombie_kills_zombies${type}`] || 0;
  }
}

/**
 * Zombies - Overall stats
 */
class Zombies {
  /**
   * Constructor
   * @param {Object} data Data from API
   */
  constructor(data) {
    /**
     * Overall Stats
     * @type {ZombiesStats}
     */
    this.overall = new ZombiesStats(data);
    /**
     * Stats for Dead End
     * @type {ZombiesStats}
     */
    this.deadEnd = new ZombiesStats(data, 'deadend');
    /**
     * Stats for Bad Blood
     * @type {ZombiesStats}
     */
    this.badBlood = new ZombiesStats(data, 'badblood');
    /**
     * Stats for Alien Arcadium
     * @type {ZombiesStats}
     */
    this.alienArcadium = new ZombiesStats(data, 'alienarcadium');
    /**
     * Stats for Prison
     * @type {ZombiesStats}
     */
    this.prison = new ZombiesStats(data, 'prison');
    /**
     * Kills By Zombie
     * @type {Record<string, number>}
     */
    this.killsByZombie = parseZombiesKills(data);
    /**
     * Bullets Hit
     * @type {number}
     */
    this.bulletsHit = data.bullets_hit_zombies || 0;
    /**
     * Bullets Shot
     * @type {number}
     */
    this.bulletsShot = data.bullets_shot_zombies || 0;
    /**
     * Gun Accuracy
     * @type {number}
     */
    this.gunAccuracy = divide(this.bulletsHit, this.bulletsShot);
    /**
     * Headshots
     * @type {number}
     */
    this.headshots = data.headshots_zombies || 0;
    /**
     * Headshot Accuracy
     * @type {number}
     */
    this.headshotAccuracy = divide(this.headshots, this.bulletsShot);
  }
}

/**
 * Dropper stats by map
 */
class DropperMap {
  /**
   * Constructor
   * @param {Object} data Data from API
   * @param {string} mapName String map name
   */
  constructor(data, mapName) {
    /**
     * Best Complete Time
     * @type {number}
     */
    this.bestTime = data?.[mapName]?.best_time ?? 0;
    /**
     * Total completions
     * @type {number}
     */
    this.completions = data?.[mapName]?.completions ?? 0;
  }
}

/**
 * Blocking Dead class
 */
class BlockingDead {
  constructor(data) {
    /**
     * Wins
     * @type {number}
     */
    this.wins = data.wins_dayone || 0;
    /**
     * Kills
     * @type {number}
     */
    this.kills = data.kills_dayone || 0;
    /**
     * Headshots
     * @type {number}
     */
    this.headshots = data.headshots_dayone || 0;
  }
}
/**
 * Bounty Hunters class
 */
class BountyHunters {
  constructor(data) {
    /**
     * Wins
     * @type {number}
     */
    this.wins = data.wins_oneinthequiver || 0;
    /**
     * Kills
     * @type {number}
     */
    this.kills = data.kills_oneinthequiver || 0;
    /**
     * Deaths
     * @type {number}
     */
    this.deaths = data.deaths_oneinthequiver || 0;
    /**
     * Kill Death Ratio
     * @type {number}
     */
    this.KDRatio = divide(this.kills, this.deaths);
    /**
     * Bounty Kills
     * @type {number}
     */
    this.bountyKills = data.bounty_kills_oneinthequiver || 0;
    /**
     * Bow Kills
     * @type {number}
     */
    this.bowKills = data.bow_kills_oneinthequiver || 0;
    /**
     * Sword Kills
     * @type {number}
     */
    this.swordKills = data.sword_kills_oneinthequiver || 0;
  }
}
/**
 * Capture the Wool class
 */
class CaptureTheWool {
  constructor(data) {
    /**
     * Wins
     * @type {number}
     */
    this.wins = data.woolhunt_participated_wins || 0;
    /**
     * Losses
     * @type {number}
     */
    this.losses = data.woolhunt_participated_losses || 0;
    /**
     * Win Loss ratio
     * @type {number}
     */
    this.WLRatio = divide(this.wins, this.losses);
    /**
     * Draws
     * @type {number}
     */
    this.draws = data.woolhunt_participated_draws || 0;
    /**
     * Kills
     * @type {number}
     */
    this.kills = data.woolhunt_kills || 0;
    /**
     * Deaths
     * @type {number}
     */
    this.deaths = data.woolhunt_deaths || 0;
    /**
     * Kill Death ratio
     * @type {number}
     */
    this.KDRatio = divide(this.kills, this.deaths);
    /**
     * assists
     * @type {number}
     */
    this.assists = data.woolhunt_assists || 0;
    /**
     * woolPickedUp
     * @type {number}
     */
    this.woolPickedUp = data.woolhunt_wools_stolen || 0;
    /**
     * woolCaptured
     * @type {number}
     */
    this.woolCaptured = data.woolhunt_wools_captured || 0;
    /**
     * fastestWin (In seconds)
     * @type {number}
     */
    this.fastestWin = data.woolhunt_fastest_win || 0;
    /**
     * longestGame (In seconds)
     * @type {number}
     */
    this.longestGame = data.woolhunt_longest_game || 0;
  }
}
/**
 * Dragon Wars class
 */
class DragonWars {
  constructor(data) {
    /**
     * Wins
     * @type {number}
     */
    this.wins = data.wins_dragonwars2 || 0;
    /**
     * Kills
     * @type {number}
     */
    this.kills = data.kills_dragonwars2 || 0;
  }
}
/**
 * Dropper class
 */
class Dropper {
  constructor(data) {
    /**
     * Total Wins
     * @type {number}
     */
    this.wins = data?.wins ?? 0;
    /**
     * Total Fails
     * @type {number}
     */
    this.fails = data?.fails ?? 0;
    /**
     * Fastest Game
     * @type {number}
     */
    this.fastestGame = data?.fastest_game ?? 0;
    /**
     * Total Amount of Flawless Games
     * @type {number}
     */
    this.flawlessGames = data?.flawless_games ?? 0;
    /**
     * Total Amount of Games Played
     * @type {number}
     */
    this.gamesPlayed = data?.games_played ?? 0;
    /**
     * Total Amount of Maps Completed
     * @type {number}
     */
    this.mapsCompleted = data?.maps_completed ?? 0;
    /**
     * Total Amount of Games Finished
     * @type {number}
     */
    this.gamesFinished = data?.games_finished ?? 0;
    /**
     * Maps
     * @type {Object.<string, DropperMap>}
     */
    this.maps = {};
    Object.keys(data?.map_stats ?? {}).forEach((map) => {
      this.maps[map] = new DropperMap(data?.map_stats, map);
    });
  }
}
/**
 * Ender Spleef class
 */
class EnderSpleef {
  constructor(data) {
    /**
     * Wins
     * @type {number}
     */
    this.wins = data.wins_ender || 0;
    /**
     * Kills
     * @type {number}
     */
    this.kills = data.kills_dragonwars2 || 0;
    /**
     * Trail
     * @type {string}
     */
    this.trail = data.enderspleef_trail || '';
    /**
     * Blocks Destroyed
     * @type {number}
     */
    this.blocksDestroyed = data.blocks_destroyed_ender || 0;
    /**
     * Big Shot Activations
     * @type {number}
     */
    this.bigShotActivations = data.bigshot_powerup_activations_ender || 0;
    /**
     * Triple Shot Activations
     * @type {number}
     */
    this.tripleShotActivations = data.tripleshot_powerup_activations_ender || 0;
    /**
     * Total Powerup Activations
     * @type {number}
     */
    this.tripleShotActivations = this.bigShotActivations + this.tripleShotActivations;
  }
}
/**
 * Farm Hunt class
 */
class FarmHunt {
  constructor(data) {
    /**
     * Wins
     * @type {number}
     */
    this.wins = data.wins_farm_hunt || 0;
    /**
     * Wins as Animal
     * @type {number}
     */
    this.winsAsAnimal = data.animal_wins_farm_hunt || 0;
    /**
     * Wins as Hunter
     * @type {number}
     */
    this.winsAsHunter = data.hunter_wins_farm_hunt || 0;
    /**
     * Kills
     * @type {number}
     */
    this.kills = data.kills_farm_hunt || 0;
    /**
     * Kills as Animal
     * @type {number}
     */
    this.killsAsAnimal = data.animal_kills_farm_hunt || 0;
    /**
     * Kills as Hunter
     * @type {number}
     */
    this.killsAsHunter = data.hunter_kills_farm_hunt || 0;
    /**
     * Taunts Used
     * @type {number}
     */
    this.tauntsUsed = data.taunts_used_farm_hunt || 0;
    /**
     * Risky Taunts Used
     * @type {number}
     */
    this.riskyTauntsUsed = data.risky_taunts_used_farm_hunt || 0;
    /**
     * Safe Taunts Used
     * @type {number}
     */
    this.safeTauntsUsed = data.safe_taunts_used_farm_hunt || 0;
    /**
     * Dangerous Taunts Used
     * @type {number}
     */
    this.dangerousTauntsUsed = data.dangerous_taunts_used_farm_hunt || 0;
    /**
     * Firework Taunts Used
     * @type {number}
     */
    this.fireworkTauntsUsed = data.firework_taunts_used_farm_hunt || 0;
    /**
     * Poop Collected
     * @type {number}
     */
    this.poop = (data.poop_collected_farm_hunt || 0) + (data.poop_collected || 0);
  }
}
/**
 * Football class
 */
class Football {
  constructor(data) {
    /**
     * Wins
     * @type {number}
     */
    this.wins = data.wins_soccer || 0;
    /**
     * Goals
     * @type {number}
     */
    this.goals = data.goals_soccer || 0;
    /**
     * Kikcs
     * @type {number}
     */
    this.kicks = data.kicks_soccer || 0;
    /**
     * Power Kicks
     * @type {number}
     */
    this.powerKicks = data.powerkicks_soccer || 0;
  }
}
/**
 * Galxy Wars
 */
class GalaxyWars {
  /**
   * @param {Object} data Data from API
   */
  constructor(data) {
    /**
     * Wins
     * @type {number}
     */
    this.wins = data.sw_game_wins || 0;
    /**
     * Kills
     * @type {number}
     */
    this.kills = data.sw_kills || 0;
    /**
     * Deaths
     * @type {number}
     */
    this.deaths = data.sw_deaths || 0;
    /**
     * Total shots fired
     * @type {number}
     */
    this.shotsFired = data.sw_shots_fired || 0;
    /**
     * Total weekly kills
     * @type {number}
     */
    this.weeklyKills = parseInt(data[`weekly_kills_${weekAB()}`] || 0, 10);
    /**
     * Total Monthly kills
     * @type {number}
     */
    this.monthlyKills = parseInt(data[`monthly_kills_${monthAB()}`] || 0, 10);
    /**
     * Attacker Kills
     * @type {number}
     */
    this.attackerKills = data.sw_rebel_kills || 0;
    /**
     * Defender Kills
     * @type {number}
     */
    this.defenderKills = data.sw_empire_kills || 0;
  }
}
/**
 * Party Popper Stats (Sub gamemode of Hide and Seek)
 */
class PartyPopper {
  /**
   * @param {Object} data Data from API
   */
  constructor(data) {
    /**
     * Wins as Seeker
     * @type {number}
     */
    this.winsAsSeeker = data.party_pooper_seeker_wins_hide_and_seek || 0;
    /**
     * Wins as Hider
     * @type {number}
     */
    this.winsAsHider = data.party_pooper_hider_wins_hide_and_seek || 0;
    /**
     * Wins
     * @type {number}
     */
    this.wins = this.winsAsSeeker + this.winsAsHider;
  }
}
/**
 * Prop Hunt Stats (Sub gamemode of Hide and Seek)
 */
class PropHunt {
  /**
   * @param {Object} data Data from API
   */
  constructor(data) {
    /**
     * Wins as Seeker
     * @type {number}
     */
    this.winsAsSeeker = data.prop_hunt_seeker_wins_hide_and_seek || 0;
    /**
     * Wins as Hider
     * @type {number}
     */
    this.winsAsHider = data.prop_hunt_hider_wins_hide_and_seek || 0;
    /**
     * Wins
     * @type {number}
     */
    this.wins = this.winsAsSeeker + this.winsAsHider;
  }
}
/**
 * Hide And Seek Stats
 */
class HideAndSeek {
  /**
   * @param {Object} data Data from API
   */
  constructor(data) {
    /**
     * Party Popper Stats
     * @type {PartyPopper}
     */
    this.partyPopper = new PartyPopper(data);
    /**
     * Prop Hunt Stats
     * @type {PropHunt}
     */
    this.propHunt = new PropHunt(data);
    /**
     * Wins as Seeker
     * @type {number}
     */
    this.winsAsSeeker = data.seeker_wins_hide_and_seek || 0;
    /**
     * Wins as Hider
     * @type {number}
     */
    this.winsAsHider = data.hider_wins_hide_and_seek || 0;
  }
}
/**
 * Hide And Seek Stats
 */
class HoleInTheWall {
  /**
   * @param {Object} data Data from API
   */
  constructor(data) {
    /**
     * Wins
     * @type {number}
     */
    this.wins = data.wins_hole_in_the_wall || 0;
    /**
     * Rounds Played
     * @type {number}
     */
    this.rounds = data.rounds_hole_in_the_wall || 0;
    /**
     * Score Record in Finals
     * @type {number}
     */
    this.scoreRecordFinals = data.hitw_record_f || 0;
    /**
     * Score Record in Normal
     * @type {number}
     */
    this.scoreRecordNormal = data.hitw_record_q || 0;
    /**
     * Score Record Overall
     * @type {number}
     */
    this.scoreRecordOverall = this.scoreRecordFinals + this.scoreRecordNormal;
  }
}
/**
 * Hypixel Says Stats
 */
class HypixelSays {
  constructor(data) {
    /**
     * Wins
     * @type {number}
     */
    this.wins = data.wins_simon_says || 0;
    /**
     * Rounds
     * @type {number}
     */
    this.rounds = data.rounds_simon_says || 0;
    /**
     * Round Wins
     * @type {number}
     */
    this.roundWins = data.round_wins_simon_says || 0;
    /**
     * Top Score
     * @type {number}
     */
    this.topScore = data.top_score_simon_says || 0;
  }
}
/**
 * Mini Walls class
 */
class MiniWalls {
  /**
   * Constructor
   * @param {Object} data data from API
   */
  constructor(data) {
    /**
     * Active Kit
     * @type {string}
     */
    this.kit = data.miniWalls_activeKit || '';
    /**
     * Wins
     * @type {number}
     */
    this.wins = data.wins_mini_walls || 0;
    /**
     * Kills
     * @type {number}
     */
    this.kills = data.kills_mini_walls || 0;
    /**
     * Deaths
     * @type {number}
     */
    this.deaths = data.deaths_mini_walls || 0;
    /**
     * Kill Death Ratio
     * @type {number}
     */
    this.KDRatio = divide(this.kills, this.deaths);
    /**
     * Final Kills
     * @type {number}
     */
    this.finalKills = data.final_kills_mini_walls || 0;
    /**
     * Wither Kills
     * @type {number}
     */
    this.witherKills = data.wither_kills_mini_walls || 0;
    /**
     * Wither Damage
     * @type {number}
     */
    this.witherDamage = data.wither_damage_mini_walls || 0;
    /**
     * Arrows Shot
     * @type {number}
     */
    this.arrowsShot = data.arrows_shot_mini_walls || 0;
    /**
     * Arrows Hit
     * @type {number}
     */
    this.arrowsHit = data.arrows_hit_mini_walls || 0;
    /**
     * Bow Accuracy
     * @type {number}
     */
    this.bowAccuracy = divide(this.arrowsHit, this.arrowsShot);
  }
}
/**
 * Party Games class
 */
class PartyGames {
  /**
   * Constructor
   * @param {Object} data data from API
   */
  constructor(data) {
    /**
     * Wins
     * @type {number}
     */
    this.wins = data.wins_party || 0;
    /**
     * Rounds Won
     * @type {number}
     */
    this.roundWins = data.round_wins_party || 0;
    /**
     * Stars Earned
     * @type {number}
     */
    this.stars = data.total_stars_party || 0;
  }
}
/**
 * Pixel Party Game Mode
 */
class PixelPartyGameMode {
  /**
   * Constructor
   * @param {Object} data data from API
   * @param {string} modeName Mode name
   */
  constructor(data, modeName) {
    /**
     * Wins
     * @type {number}
     */
    this.wins = data?.[`wins_${modeName}`] || 0;
    /**
     * Games Played
     * @type {number}
     */
    this.gamesPlayed = data?.[`games_played_${modeName}`] || 0;
    /**
     * Losses
     * @type {number}
     */
    this.losses = this.gamesPlayed - this.wins;
    /**
     * Win Loss Ratio
     * @type {number}
     */
    this.WLRatio = divide(this.wins, this.losses);
    /**
     * Rounds Played
     * @type {number}
     */
    this.roundsPlayed = data?.[`rounds_completed_${modeName}`] || 0;
    /**
     * Power Ups Collected
     * @type {number}
     */
    this.powerUpsCollected = data?.[`power_ups_collected_${modeName}`] || 0;
  }
}
/**
 * Party Games class
 */
class PixelParty {
  /**
   * Constructor
   * @param {Object} data data from API
   */
  constructor(data) {
    /**
     * Wins
     * @type {number}
     */
    this.wins = data?.pixel_party?.wins || 0;
    /**
     * Games Played
     * @type {number}
     */
    this.gamesPlayed = data?.pixel_party?.games_played || 0;
    /**
     * Losses
     * @type {number}
     */
    this.losses = this.gamesPlayed - this.wins;
    /**
     * Win Loss Ratio
     * @type {number}
     */
    this.WLRatio = divide(this.wins, this.losses);
    /**
     * Rounds Played
     * @type {number}
     */
    this.roundsPlayed = data?.pixel_party?.rounds_completed || 0;
    /**
     * Power Ups Collected
     * @type {number}
     */
    this.powerUpsCollected = data?.pixel_party?.power_ups_collected || 0;
    /**
     * Normal Game Mode
     * @type {PixelPartyGameMode}
     */
    this.normal = new PixelPartyGameMode(data.pixel_party, 'normal');
    /**
     * Hyper Game Mode
     * @type {PixelPartyGameMode}
     */
    this.hyper = new PixelPartyGameMode(data.pixel_party, 'hyper');
    /**
     * Highest Round
     * @type {number}
     */
    this.highestRound = data?.pixel_party?.highest_round || 0;
    /**
     * Music Volume
     * @type {number}
     */
    this.musicVolume = data.pixel_party_music_volume || 0;
    /**
     * Color Blind Settings
     * @type {object}
     */
    this.colorBlind = data.pixelparty || {};
  }
}
/**
 * Throw Out class
 */
class ThrowOut {
  /**
   * Constructor
   * @param {Object} data data from API
   */
  constructor(data) {
    /**
     * Wins
     * @type {number}
     */
    this.wins = data.wins_throw_out || 0;
    /**
     * Kills
     * @type {number}
     */
    this.kills = data.kills_throw_out || 0;
    /**
     * Deaths
     * @type {number}
     */
    this.deaths = data.deaths_throw_out || 0;
    /**
     * KDRatio
     * @type {number}
     */
    this.KDRatio = divide(this.kills, this.deaths);
  }
}
/**
 * Arcade class
 */
class Arcade {
  /**
   * Constructor
   * @param {Object} data Data from the API
   */
  constructor(data = {}) {
    /**
     * Amount of coins
     * @type {number}
     */
    this.coins = data.coins || 0;
    /**
     * Weekly coins
     * @type {number}
     */
    this.weeklyCoins = parseInt(data[`weekly_coins_${weekAB()}`] || 0, 10);
    /**
     * Monthly coins
     * @type {number}
     */
    this.monthlyCoins = parseInt(data[`monthly_coins_${monthAB()}`] || 0, 10);
    /**
     * Hints Disabled
     * @type {boolean}
     */
    this.hintsDisabled = !data.hints;
    /**
     * Flash Disabled
     * @type {boolean}
     */
    this.flashDisabled = !data.flash;
    /**
     * Blocking dead ( previously known as DayOne ) stats
     * @type {BlockingDead}
     */
    this.blockingDead = new BlockingDead(data);
    /**
     * Bounty Hunters (previously known as One In The Quiver) stats
     * @type {BountyHunters}
     */
    this.bountyHunters = new BountyHunters(data);
    /**
     * Capture The Wool
     * @type {CaptureTheWool}
     */
    this.captureTheWool = new CaptureTheWool(data);
    /**
     * Dragon wars stats
     * @type {DragonWars}
     */
    this.dragonWars = new DragonWars(data);
    /**
     * Dropper
     * @type {Dropper}
     */
    this.dropper = new Dropper(data.dropper);
    /**
     * Ender Spleef stats
     * @type {EnderSpleef}
     */
    this.enderSpleef = new EnderSpleef(data);
    /**
     * Farm Hunt stats
     * @type {FarmHunt}
     */
    this.farmHunt = new FarmHunt(data);
    /**
     * Football stats
     * @type {Football}
     */
    this.football = new Football(data);
    /**
     * Galaxy Wars stats
     * @type {GalaxyWars}
     */
    this.galaxyWars = new GalaxyWars(data);
    /**
     * Hide and Seek stats
     * @type {HideAndSeek}
     */
    this.hideAndSeek = new HideAndSeek(data);
    /**
     * Hole in the Wall stats
     * @type {HoleInTheWall}
     */
    this.holeInTheWall = new HoleInTheWall(data);
    /**
     * Hypixel Says stats
     * @type {HypixelSays}
     */
    this.hypixelSays = new HypixelSays(data);
    /**
     * Mini Walls stats
     * @type {MiniWalls}
     */
    this.miniWalls = new MiniWalls(data);
    /**
     * Party games stats
     * @type {PartyGames}
     */
    this.partyGames = new PartyGames(data);
    /**
     * Pixel Party stats
     * @type {PixelParty}
     */
    this.pixelParty = new PixelParty(data);
    /**
     * Throw out stats
     * @type {ThrowOut}
     */
    this.throwOut = new ThrowOut(data);
    /**
     * Zombies
     * @type {Zombies}
     */
    this.zombies = new Zombies(data);
  }
}

module.exports = Arcade;
