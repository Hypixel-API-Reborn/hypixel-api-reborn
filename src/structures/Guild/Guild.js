const GuildMember = require('./GuildMember');
const GuildRank = require('./GuildRank');
const Color = require('../Color');
const Game = require('../Game');
const getGuildLevel = require('../../utils/getGuildLevel');

class Guild {
  constructor (data) {
    this._data = data;
    this.id = data._id;
    this.name = data.name;
    this.description = data.description ? data.description : null;
    this.experience = data.exp || 0;
    this.level = getGuildLevel(this.experience);
    this.createdAt = data.created;
    this.joinable = data.joinable ? data.joinable : false;
    this.publiclyListed = !!data.publiclyListed;
    this.tag = data.tag ? data.tag : null;
    this.tagColor = data.tagColor ? new Color(data.tagColor) : null;
    this.legacyRank = !isNaN(data.legacyRanking) ? parseInt(data.legacyRanking) + 1 : undefined;
    this.achievements = {
      winners: data.achievements ? data.achievements.WINNERS : 0,
      experienceKings: data.achievements ? data.achievements.EXPERIENCE_KINGS : 0,
      onlinePlayers: data.achievements ? data.achievements.ONLINE_PLAYERS : 0
    };
    this.preferredGames = data.preferredGames ? data.preferredGames.map(g => new Game(g)) : null;
  }

  /**
   * @returns {Array<GuildMember>}
   */
  get members () {
    return this._data.members ? this._data.members.map(m => new GuildMember(m)) : null;
  }

  /**
  * @returns {Map<GuildMember, string}
  */
  get memberUUIDMap () {
    return this._data.members ? new Map(this._data.members.map(m => [new GuildMember(m).uuid, new GuildMember(m)])) : null;
  }

  /**
   * @returns {Array<GuildRank>}
   */
  get ranks () {
    return this._data.ranks ? this._data.ranks.map(r => new GuildRank(r)).sort((a, b) => a.priority - b.priority) : null;
  }
}
module.exports = Guild;
