const divide = require('../../utils/divide');

class BlitzSGKit {
  /**
   * @param {object} data Blitz SG data
   * @param {string} kitName Kit name
   */
  constructor(data, kitName) {
    /**
     * Kit Level
     * @type {number}
     */
    this.level = data[kitName] || 0;
    /**
     * Kit Level
     * @type {number}
     */
    this.exp = data[`exp_${kitName}`] || 0;
    /**
     * Kills
     * @type {number}
     */
    this.kills = data[`kills_${kitName}`] || 0;
    /**
     * Deaths
     * @type {number}
     */
    this.deaths = data[`deaths_${kitName}`] || 0;
    /**
     * Kill Death ratio
     * @type {number}
     */
    this.KDRatio = divide(this.kills, this.deaths);
    /**
     * Wins
     * @type {number}
     */
    this.wins = data[`wins_${kitName}`] || 0;
    /**
     * Games Played
     * @type {number}
     */
    this.gamesPlayed = data[`games_played_${kitName}`] || 0;
    /**
     * Losses
     * @type {number}
     */
    this.losses = this.gamesPlayed - this.wins;
    /**
     * Win Loss ratio
     * @type {number}
     */
    this.WLRatio = divide(this.wins, this.losses);
    /**
     * Arrows Shot
     * @type {number}
     */
    this.arrowsShot = data[`arrows_fired_${kitName}`] || 0;
    /**
     * Arrows Hit
     * @type {number}
     */
    this.arrowsHit = data[`arrows_hit_${kitName}`] || 0;
    /**
     * Bow Accuracy
     * @type {number}
     */
    this.bowAccuracy = divide(this.arrowsHit, this.arrowsShot);
    /**
     * Damage Delt
     * @type {number}
     */
    this.damage = data[`damage_${kitName}`] || 0;
    /**
     * Damage Taken
     * @type {number}
     */
    this.damageTaken = data[`damage_taken_${kitName}`] || 0;
    /**
     * Potions Drunk
     * @type {number}
     */
    this.potionsDrunk = data[`potions_drunk_${kitName}`] || 0;
    /**
     * Potions Thrown
     * @type {number}
     */
    this.potionsThrown = data[`potions_thrown_${kitName}`] || 0;
    /**
     * Time Played (In seconds)
     * @type {number}
     */
    this.playTime = data[`time_played_${kitName}`] || 0;
    /**
     * Mobs Spawned
     * @type {number}
     */
    this.mobsSpawned = data[`mobs_spawned_${kitName}`] || 0;
    /**
     * Chests Opened
     * @type {number}
     */
    this.chestsOpened = data[`chests_opened_${kitName}`] || 0;
  }
}

/**
 * Blitz SG class
 */
class BlitzSurvivalGames {
  /**
   * @param {object} data Blitz SG data
   */
  constructor(data) {
    /**
     * Coins
     * @type {number}
     */
    this.coins = data.coins || 0;
    /**
     * Kills
     * @type {number}
     */
    this.kills = data.kills || 0;
    /**
     * Kit
     * @type {string}
     */
    this.kit = data.defaultkit || '';
    /**
     * Solo Kills
     * @type {number}
     */
    this.killsSolo = data.kills_solo_normal || 0;
    /**
     * Teams Kills
     * @type {number}
     */
    this.killsTeams = data.kills_teams_normal || 0;
    /**
     * Deaths
     * @type {number}
     */
    this.deaths = data.deaths || 0;
    /**
     * Kill Death ratio
     * @type {number}
     */
    this.KDRatio = divide(this.kills, this.deaths);
    /**
     * Wins
     * @type {number}
     */
    this.wins = data.wins || 0;
    /**
     * Solo wins
     * @type {number}
     */
    this.winsSolo = data.wins_solo_normal || 0;
    /**
     * Team wins
     * @type {number}
     */
    this.winsTeam = data.wins_teams || 0;
    /**
     * Games Played
     * @type {number}
     */
    this.gamesPlayed = data.games_played || 0;
    /**
     * Losses
     * @type {number}
     */
    this.losses = this.gamesPlayed - this.wins;
    /**
     * Win Loss ratio
     * @type {number}
     */
    this.WLRatio = divide(this.wins, this.losses);
    /**
     * Arrows Shot
     * @type {number}
     */
    this.arrowsShot = data.arrows_fired || 0;
    /**
     * Arrows Hit
     * @type {number}
     */
    this.arrowsHit = data.arrows_hit || 0;
    /**
     * Bow Accuracy
     * @type {number}
     */
    this.bowAccuracy = divide(this.arrowsHit, this.arrowsShot);
    /**
     * Damage Delt
     * @type {number}
     */
    this.damage = data.damage || 0;
    /**
     * Damage Taken
     * @type {number}
     */
    this.damageTaken = data.damage_taken || 0;
    /**
     * Potions Drunk
     * @type {number}
     */
    this.potionsDrunk = data.potions_drunk || 0;
    /**
     * Potions Thrown
     * @type {number}
     */
    this.potionsThrown = data.potions_thrown || 0;
    /**
     * Mobs Spawned
     * @type {number}
     */
    this.mobsSpawned = data.mobs_spawned || 0;
    /**
     * Time Played (In seconds)
     * @type {number}
     */
    this.playTime = data.time_played || 0;
    /**
     * Blitz Uses
     * @type {number}
     */
    this.blitzUses = data.blitz_uses || 0;
    /**
     * Chests Opened
     * @type {number}
     */
    this.chestsOpened = data.chests_opened || 0;

    /**
     * Archer Kit Stats
     * @type {BlitzSGKit}
     */
    this.archer = new BlitzSGKit(data, 'archer');
    /**
     * Meatmaster Kit Stats
     * @type {BlitzSGKit}
     */
    this.meatmaster = new BlitzSGKit(data, 'meatmaster');
    /**
     * Speleologist Kit Stats
     * @type {BlitzSGKit}
     */
    this.speleologist = new BlitzSGKit(data, 'speleologist');
    /**
     * Baker Kit Stats
     * @type {BlitzSGKit}
     */
    this.baker = new BlitzSGKit(data, 'baker');
    /**
     * Knight Kit Stats
     * @type {BlitzSGKit}
     */
    this.knight = new BlitzSGKit(data, 'knight');
    /**
     * Guardian Kit Stats
     * @type {BlitzSGKit}
     */
    this.guardian = new BlitzSGKit(data, 'guardian');
    /**
     * Scout Kit Stats
     * @type {BlitzSGKit}
     */
    this.scout = new BlitzSGKit(data, 'scout');
    /**
     * Hunter Kit Stats
     * @type {BlitzSGKit}
     */
    this.hunter = new BlitzSGKit(data, 'hunter');
    /**
     * Hype Train Kit Stats
     * @type {BlitzSGKit}
     */
    this.hypeTrain = new BlitzSGKit(data, 'hype train');
    /**
     * Fisherman Kit Stats
     * @type {BlitzSGKit}
     */
    this.fisherman = new BlitzSGKit(data, 'fisherman');
    /**
     * Armorer Kit Stats
     * @type {BlitzSGKit}
     */
    this.armorer = new BlitzSGKit(data, 'armorer');
    /**
     * Horsetamer Kit Stats
     * @type {BlitzSGKit}
     */
    this.horsetamer = new BlitzSGKit(data, 'horsetamer');
    /**
     * Astronaut Kit Stats
     * @type {BlitzSGKit}
     */
    this.astronaut = new BlitzSGKit(data, 'astronaut');
    /**
     * Troll Kit Stats
     * @type {BlitzSGKit}
     */
    this.troll = new BlitzSGKit(data, 'troll');
    /**
     * Reaper Kit Stats
     * @type {BlitzSGKit}
     */
    this.reaper = new BlitzSGKit(data, 'reaper');
    /**
     * Shark Kit Stats
     * @type {BlitzSGKit}
     */
    this.shark = new BlitzSGKit(data, 'shark');
    /**
     * Reddragon Kit Stats
     * @type {BlitzSGKit}
     */
    this.reddragon = new BlitzSGKit(data, 'reddragon');
    /**
     * Toxicologist Kit Stats
     * @type {BlitzSGKit}
     */
    this.toxicologist = new BlitzSGKit(data, 'toxicologist');
    /**
     * Rogue Kit Stats
     * @type {BlitzSGKit}
     */
    this.rogue = new BlitzSGKit(data, 'rogue');
    /**
     * Warlock Kit Stats
     * @type {BlitzSGKit}
     */
    this.warlock = new BlitzSGKit(data, 'warlock');
    /**
     * Slimeyslime Kit Stats
     * @type {BlitzSGKit}
     */
    this.slimeyslime = new BlitzSGKit(data, 'slimeyslime');
    /**
     * Jockey Kit Stats
     * @type {BlitzSGKit}
     */
    this.jockey = new BlitzSGKit(data, 'jockey');
    /**
     * Golem Kit Stats
     * @type {BlitzSGKit}
     */
    this.golem = new BlitzSGKit(data, 'golem');
    /**
     * Viking Kit Stats
     * @type {BlitzSGKit}
     */
    this.viking = new BlitzSGKit(data, 'viking');
    /**
     * Shadow Knight Kit Stats
     * @type {BlitzSGKit}
     */
    this.shadowKnight = new BlitzSGKit(data, 'shadow knight');
    /**
     * Pigman Kit Stats
     * @type {BlitzSGKit}
     */
    this.pigman = new BlitzSGKit(data, 'pigman');
    /**
     * Paladin Kit Stats
     * @type {BlitzSGKit}
     */
    this.paladin = new BlitzSGKit(data, 'paladin');
    /**
     * Necromancer Kit Stats
     * @type {BlitzSGKit}
     */
    this.necromancer = new BlitzSGKit(data, 'necromancer');
    /**
     * Florist Kit Stats
     * @type {BlitzSGKit}
     */
    this.florist = new BlitzSGKit(data, 'florist');
    /**
     * Diver Kit Stats
     * @type {BlitzSGKit}
     */
    this.diver = new BlitzSGKit(data, 'diver');
    /**
     * Arachnologist Kit Stats
     * @type {BlitzSGKit}
     */
    this.arachnologist = new BlitzSGKit(data, 'arachnologist');
    /**
     * Blaze Kit Stats
     * @type {BlitzSGKit}
     */
    this.blaze = new BlitzSGKit(data, 'blaze');
    /**
     * Wolftamer Kit Stats
     * @type {BlitzSGKit}
     */
    this.wolftamer = new BlitzSGKit(data, 'wolftamer');
    /**
     * Tim Kit Stats
     * @type {BlitzSGKit}
     */
    this.tim = new BlitzSGKit(data, 'tim');
    /**
     * Farmer Kit Stats
     * @type {BlitzSGKit}
     */
    this.farmer = new BlitzSGKit(data, 'farmer');
    /**
     * Creepertamer Kit Stats
     * @type {BlitzSGKit}
     */
    this.creepertamer = new BlitzSGKit(data, 'creepertamer');
    /**
     * Snowman Kit Stats
     * @type {BlitzSGKit}
     */
    this.snowman = new BlitzSGKit(data, 'snowman');
  }
}

module.exports = BlitzSurvivalGames;
