/* eslint-disable no-undef */
const { client } = require('./Client.js');
const { Game } = require('../src');
const { expect } = require('chai');

describe('Client#getGuild', async () => {
  let guildName;
  let guildId;
  let guildPlayer;
  it('expect not to throw', async () => {
    guildName = await client.getGuild('name', 'PancakeSquad');
    guildId = await client.getGuild('id', '557c75d90cf2ce51d4a92368');
    guildPlayer = await client.getGuild('player', 'f025c1c7f55a4ea0b8d93f47d17dfe0f');
  });
  it('should be an object', () => {
    expect(guildName).to.be.an('object');
    expect(guildId).to.be.an('object');
    expect(guildPlayer).to.be.an('object');
  });
  it('required keys should exist - Guild Name', () => {
    expect(guildName.id).to.be.a('string');
    expect(guildName.name).to.be.a('string');
    expect(guildName.description).to.be.a('string');
    expect(guildName.experience).to.be.a('number');
    expect(guildName.level).to.be.a('number');
    expect(guildName.members).to.be.an('array');
    guildName.members.forEach((member) => {
      expect(member).to.be.an('object');
      expect(member.uuid).to.be.a('string');
      expect(member.joinedAtTimestamp).to.be.a('number');
      expect(member.joinedAt).to.be.a('Date');
      expect(member.questParticipation).to.be.a('number');
      expect(member.rank).to.be.a('string');
      expect(member.expHistory).to.be.a('array');
      member.expHistory.forEach((history) => {
        expect(history).to.be.a('object');
        expect(history.day).to.be.a('string');
        expect(history.date).to.be.a('date');
        expect(history.exp).to.be.a('number');
        expect(history.totalExp).to.be.a('number');
      });
      expect(member.weeklyExperience).to.be.a('number');
    });
    expect(guildName.me).to.be.a('undefined');
    expect(guildName.ranks).to.be.an('array');
    guildName.ranks.forEach((rank) => {
      expect(rank).to.be.an('object');
      expect(rank.name).to.be.a('string');
      expect(rank.default).to.be.a('boolean');
      if (rank.tag) expect(rank.tag).to.be.a('string');
      expect(rank.createdAt).to.be.a('date');
      expect(rank.createdAtTimestamp).to.be.a('number');
      expect(rank.priority).to.be.a('number');
    });
    expect(guildName.totalWeeklyGexp).to.be.a('number');
    expect(guildName.createdAtTimestamp).to.be.a('number');
    expect(guildName.createdAt).to.be.a('date');
    expect(guildName.joinable).to.be.a('boolean');
    expect(guildName.publiclyListed).to.be.a('boolean');
    if (guildName.banner) {
      expect(guildName.banner).to.be.a('object');
      expect(guildName.banner['Base']).to.be.a('string');
      expect(guildName.banner['Patterns']).to.be.an('array');
      guildName.banner['Patterns'].forEach((pattern) => {
        expect(pattern).to.be.a('object');
        expect(pattern['Pattern']).to.be.a('string');
        expect(pattern['Color']).that.satisfies((value) => typeof value === 'number' || typeof value === 'string');
      });
    }
    if (guildName.tag) expect(guildName.tag).to.be.a('string');
    if (guildName.tagColor) {
      expect(guildName.tagColor.color).to.be.a('string');
      expect(guildName.tagColor.color).to.be.oneOf([
        'BLACK',
        'DARK_BLUE',
        'DARK_GREEN',
        'DARK_AQUA',
        'DARK_RED',
        'DARK_PURPLE',
        'GOLD',
        'GRAY',
        'DARK_GRAY',
        'BLUE',
        'GREEN',
        'AQUA',
        'RED',
        'LIGHT_PURPLE',
        'YELLOW',
        'WHITE'
      ]);
    }
    expect(guildName.legacyRank).to.be.a('number');
    expect(guildName.expHistory).to.be.a('array');
    guildName.expHistory.forEach((history) => {
      expect(history).to.be.a('object');
      expect(history.day).to.be.a('string');
      expect(history.date).to.be.a('date');
      expect(history.exp).to.be.a('number');
      expect(history.totalExp).to.be.a('number');
      expect(guildName.achievements).to.be.a('object');
      expect(guildName.achievements.winners).to.be.a('number');
      expect(guildName.achievements.experienceKings).to.be.a('number');
      expect(guildName.achievements.onlinePlayers).to.be.a('number');
      expect(guildName.preferredGames).to.be.an('array');
      guildName.preferredGames.forEach((game) => {
        expect(game).instanceOf(Game);
      });
    });
  });

  it('required keys should exist - Guild Id', () => {
    expect(guildId.id).to.be.a('string');
    expect(guildId.name).to.be.a('string');
    expect(guildId.description).to.be.a('string');
    expect(guildId.experience).to.be.a('number');
    expect(guildId.level).to.be.a('number');
    expect(guildId.members).to.be.an('array');
    guildId.members.forEach((member) => {
      expect(member).to.be.an('object');
      expect(member.uuid).to.be.a('string');
      expect(member.joinedAtTimestamp).to.be.a('number');
      expect(member.joinedAt).to.be.a('Date');
      expect(member.questParticipation).to.be.a('number');
      expect(member.rank).to.be.a('string');
      expect(member.expHistory).to.be.a('array');
      member.expHistory.forEach((history) => {
        expect(history).to.be.a('object');
        expect(history.day).to.be.a('string');
        expect(history.date).to.be.a('date');
        expect(history.exp).to.be.a('number');
        expect(history.totalExp).to.be.a('number');
      });
      expect(member.weeklyExperience).to.be.a('number');
    });
    expect(guildId.me).to.be.a('undefined');
    expect(guildId.ranks).to.be.an('array');
    guildId.ranks.forEach((rank) => {
      expect(rank).to.be.an('object');
      expect(rank.name).to.be.a('string');
      expect(rank.default).to.be.a('boolean');
      if (rank.tag) expect(rank.tag).to.be.a('string');
      expect(rank.createdAt).to.be.a('date');
      expect(rank.createdAtTimestamp).to.be.a('number');
      expect(rank.priority).to.be.a('number');
    });
    expect(guildId.totalWeeklyGexp).to.be.a('number');
    expect(guildId.createdAtTimestamp).to.be.a('number');
    expect(guildId.createdAt).to.be.a('date');
    expect(guildId.joinable).to.be.a('boolean');
    expect(guildId.publiclyListed).to.be.a('boolean');
    if (guildId.banner) {
      expect(guildId.banner).to.be.a('object');
      expect(guildId.banner['Base']).to.be.a('string');
      expect(guildId.banner['Patterns']).to.be.an('array');
      guildId.banner['Patterns'].forEach((pattern) => {
        expect(pattern).to.be.a('object');
        expect(pattern['Pattern']).to.be.a('string');
        expect(pattern['Color']).that.satisfies((value) => typeof value === 'number' || typeof value === 'string');
      });
    }
    if (guildId.tag) expect(guildId.tag).to.be.a('string');
    if (guildId.tagColor) {
      expect(guildId.tagColor.color).to.be.a('string');
      expect(guildId.tagColor.color).to.be.oneOf([
        'BLACK',
        'DARK_BLUE',
        'DARK_GREEN',
        'DARK_AQUA',
        'DARK_RED',
        'DARK_PURPLE',
        'GOLD',
        'GRAY',
        'DARK_GRAY',
        'BLUE',
        'GREEN',
        'AQUA',
        'RED',
        'LIGHT_PURPLE',
        'YELLOW',
        'WHITE'
      ]);
    }
    expect(guildId.legacyRank).to.be.a('number');
    expect(guildId.expHistory).to.be.a('array');
    guildId.expHistory.forEach((history) => {
      expect(history).to.be.a('object');
      expect(history.day).to.be.a('string');
      expect(history.date).to.be.a('date');
      expect(history.exp).to.be.a('number');
      expect(history.totalExp).to.be.a('number');
      expect(guildId.achievements).to.be.a('object');
      expect(guildId.achievements.winners).to.be.a('number');
      expect(guildId.achievements.experienceKings).to.be.a('number');
      expect(guildId.achievements.onlinePlayers).to.be.a('number');
      expect(guildId.preferredGames).to.be.an('array');
      guildId.preferredGames.forEach((game) => {
        expect(game).instanceOf(Game);
      });
    });
  });

  it('required keys should exist - Guild Player', () => {
    expect(guildPlayer.id).to.be.a('string');
    expect(guildPlayer.name).to.be.a('string');
    expect(guildPlayer.description).to.be.a('string');
    expect(guildPlayer.experience).to.be.a('number');
    expect(guildPlayer.level).to.be.a('number');
    expect(guildPlayer.members).to.be.an('array');
    guildPlayer.members.forEach((member) => {
      expect(member).to.be.an('object');
      expect(member.uuid).to.be.a('string');
      expect(member.joinedAtTimestamp).to.be.a('number');
      expect(member.joinedAt).to.be.a('Date');
      expect(member.questParticipation).to.be.a('number');
      expect(member.rank).to.be.a('string');
      expect(member.expHistory).to.be.a('array');
      member.expHistory.forEach((history) => {
        expect(history).to.be.a('object');
        expect(history.day).to.be.a('string');
        expect(history.date).to.be.a('date');
        expect(history.exp).to.be.a('number');
        expect(history.totalExp).to.be.a('number');
      });
      expect(member.weeklyExperience).to.be.a('number');
    });
    // expect(guildPlayer.me).to.be.a('undefined');
    expect(guildPlayer.me).to.be.an('object');
    expect(guildPlayer.me.uuid).to.be.a('string');
    expect(guildPlayer.me.joinedAtTimestamp).to.be.a('number');
    expect(guildPlayer.me.joinedAt).to.be.a('Date');
    expect(guildPlayer.me.questParticipation).to.be.a('number');
    expect(guildPlayer.me.rank).to.be.a('string');
    expect(guildPlayer.me.expHistory).to.be.a('array');
    guildPlayer.me.expHistory.forEach((history) => {
      expect(history).to.be.a('object');
      expect(history.day).to.be.a('string');
      expect(history.date).to.be.a('date');
      expect(history.exp).to.be.a('number');
      expect(history.totalExp).to.be.a('number');
    });
    expect(guildPlayer.me.weeklyExperience).to.be.a('number');
    expect(guildPlayer.ranks).to.be.an('array');
    guildPlayer.ranks.forEach((rank) => {
      expect(rank).to.be.an('object');
      expect(rank.name).to.be.a('string');
      expect(rank.default).to.be.a('boolean');
      if (rank.tag) expect(rank.tag).to.be.a('string');
      expect(rank.createdAt).to.be.a('date');
      expect(rank.createdAtTimestamp).to.be.a('number');
      expect(rank.priority).to.be.a('number');
    });
    expect(guildPlayer.totalWeeklyGexp).to.be.a('number');
    expect(guildPlayer.createdAtTimestamp).to.be.a('number');
    expect(guildPlayer.createdAt).to.be.a('date');
    expect(guildPlayer.joinable).to.be.a('boolean');
    expect(guildPlayer.publiclyListed).to.be.a('boolean');
    if (guildPlayer.banner) {
      expect(guildPlayer.banner).to.be.a('object');
      expect(guildPlayer.banner['Base']).to.be.a('string');
      expect(guildPlayer.banner['Patterns']).to.be.an('array');
      guildPlayer.banner['Patterns'].forEach((pattern) => {
        expect(pattern).to.be.a('object');
        expect(pattern['Pattern']).to.be.a('string');
        expect(pattern['Color']).that.satisfies((value) => typeof value === 'number' || typeof value === 'string');
      });
    }
    if (guildPlayer.tag) expect(guildPlayer.tag).to.be.a('string');
    if (guildPlayer.tagColor) {
      expect(guildPlayer.tagColor.color).to.be.a('string');
      expect(guildPlayer.tagColor.color).to.be.oneOf([
        'BLACK',
        'DARK_BLUE',
        'DARK_GREEN',
        'DARK_AQUA',
        'DARK_RED',
        'DARK_PURPLE',
        'GOLD',
        'GRAY',
        'DARK_GRAY',
        'BLUE',
        'GREEN',
        'AQUA',
        'RED',
        'LIGHT_PURPLE',
        'YELLOW',
        'WHITE'
      ]);
    }
    expect(guildPlayer.legacyRank).to.be.a('number');
    expect(guildPlayer.expHistory).to.be.a('array');
    guildPlayer.expHistory.forEach((history) => {
      expect(history).to.be.a('object');
      expect(history.day).to.be.a('string');
      expect(history.date).to.be.a('date');
      expect(history.exp).to.be.a('number');
      expect(history.totalExp).to.be.a('number');
      expect(guildPlayer.achievements).to.be.a('object');
      expect(guildPlayer.achievements.winners).to.be.a('number');
      expect(guildPlayer.achievements.experienceKings).to.be.a('number');
      expect(guildPlayer.achievements.onlinePlayers).to.be.a('number');
      expect(guildPlayer.preferredGames).to.be.an('array');
      guildPlayer.preferredGames.forEach((game) => {
        expect(game).instanceOf(Game);
      });
    });
  });
});
