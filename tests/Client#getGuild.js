/* eslint-disable no-undef */
const { Game, Errors } = require('../src');
const { client } = require('./Client.js');
const { expect } = require('chai');

const guilds = [
  {
    name: 'PancakeSquad',
    id: '557c75d90cf2ce51d4a92368',
    player: 'f025c1c7f55a4ea0b8d93f47d17dfe0f'
  },
  {
    name: 'WristSpasm',
    id: '5b8dd8cb0cf24573ab84c9ad',
    player: '2700c8b565c74d8e9be5eb7a6ae19295'
  },
  {
    name: 'Pixelic',
    id: '64b54f9d8ea8c96aaedafe84',
    player: '14727faefbdc4aff848cd2713eb9939e'
  },
  {
    name: 'The Dawns Awakening',
    id: '5ba94ed50cf2cc24cf043706',
    player: '3b76b69ae5134296a730ed49171ad6f8'
  },
  {
    name: 'Felony',
    id: '5fc50e9a8ea8c9d1008d5f86',
    player: 'f17d5ae1ed1f4dc9833339b56024640c'
  }
];

describe('Client#getGuild', async () => {
  describe('Valid', async () => {
    guilds.forEach((guild) => {
      let guildName;
      let guildId;
      let guildPlayer;
      describe(`Guild Test ${guilds.indexOf(guild) + 1}`, async () => {
        describe('Guild Name', async () => {
          it('expect not to throw', async () => {
            guildName = await client.getGuild('name', guild.name);
          });
          it('should be an object', () => {
            expect(guildName).to.be.an('object');
          });
          it('required keys should exist', () => {
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
            if (guildName.me) {
              expect(guildName.me).to.be.an('object');
              expect(guildName.me.uuid).to.be.a('string');
              expect(guildName.me.joinedAtTimestamp).to.be.a('number');
              expect(guildName.me.joinedAt).to.be.a('Date');
              expect(guildName.me.questParticipation).to.be.a('number');
              expect(guildName.me.rank).to.be.a('string');
              expect(guildName.me.expHistory).to.be.a('array');
              guildName.me.expHistory.forEach((history) => {
                expect(history).to.be.a('object');
                expect(history.day).to.be.a('string');
                expect(history.date).to.be.a('date');
                expect(history.exp).to.be.a('number');
                expect(history.totalExp).to.be.a('number');
              });
              expect(guildName.me.weeklyExperience).to.be.a('number');
            }
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
        });
        describe('Guild Id', async () => {
          it('expect not to throw', async () => {
            guildId = await client.getGuild('id', guild.id);
          });
          it('should be an object', () => {
            expect(guildId).to.be.an('object');
          });

          it('required keys should exist', () => {
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
            if (guildId.me) {
              expect(guildId.me).to.be.an('object');
              expect(guildId.me.uuid).to.be.a('string');
              expect(guildId.me.joinedAtTimestamp).to.be.a('number');
              expect(guildId.me.joinedAt).to.be.a('Date');
              expect(guildId.me.questParticipation).to.be.a('number');
              expect(guildId.me.rank).to.be.a('string');
              expect(guildId.me.expHistory).to.be.a('array');
              guildId.me.expHistory.forEach((history) => {
                expect(history).to.be.a('object');
                expect(history.day).to.be.a('string');
                expect(history.date).to.be.a('date');
                expect(history.exp).to.be.a('number');
                expect(history.totalExp).to.be.a('number');
              });
              expect(guildId.me.weeklyExperience).to.be.a('number');
            }
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
        });
        describe('Guild Player', async () => {
          it('expect not to throw', async () => {
            guildPlayer = await client.getGuild('player', guild.player);
          });
          it('should be an object', () => {
            expect(guildPlayer).to.be.an('object');
          });
          it('required keys should exist', () => {
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
            if (guildPlayer.me) {
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
            }
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
      });
    });
  });
  describe('Invalid', async () => {
    describe('Guild Name Test', async () => {
      it('expect to throw', async () => {
        try {
          player = await client.getGuild('name', 'This is not a valid guild name');
          throw new Error('Expected an error to be thrown, but no error was thrown.');
        } catch (error) {
          expect(error.message).to.equal(Errors.GUILD_DOES_NOT_EXIST);
        }
      }).timeout(5000);
    });
    describe('Player not in guild', async () => {
      it('expect to throw', async () => {
        player = await client.getGuild('player', '337a48bf57e944eb8acb83b885936e83');
        expect(player).to.be.null;
      }).timeout(5000);
    });
    describe('Guild id Test', async () => {
      it('expect to throw', async () => {
        try {
          player = await client.getGuild('id', 'This is not a valid guild id');
          throw new Error('Expected an error to be thrown, but no error was thrown.');
        } catch (error) {
          expect(error.message).to.equal(Errors.INVALID_GUILD_ID);
        }
      }).timeout(5000);
    });
    describe('No input Test', async () => {
      it('expect to throw', async () => {
        try {
          player = await client.getGuild();
          throw new Error('Expected an error to be thrown, but no error was thrown.');
        } catch (error) {
          expect(error.message).to.equal(Errors.NO_GUILD_QUERY);
        }
      }).timeout(5000);
    });
    describe('Bad guild search', async () => {
      it('expect to throw', async () => {
        try {
          player = await client.getGuild('test', 'no');
          throw new Error('Expected an error to be thrown, but no error was thrown.');
        } catch (error) {
          expect(error.message).to.equal(Errors.INVALID_GUILD_SEARCH_PARAMETER);
        }
      }).timeout(5000);
    });
  });
});
