/* eslint-disable no-undef */
const { Client, Game, SkyWars, BedWars, UHC, SpeedUHC, MurderMystery, Duels, BuildBattle, MegaWalls, CopsAndCrims, TNTGames, SmashHeroes, VampireZ, BlitzSurvivalGames, ArenaBrawl } = require('../src');
const client = new Client(process.env.HYPIXEL_KEY, { cache: true });
const { expect } = require('chai');
describe('Client', () => {
  describe('getPlayer', () => {
    let player;
    it('expect not to throw', async () => {
      player = await client.getPlayer('f025c1c7f55a4ea0b8d93f47d17dfe0f');
    });
    it('required keys should exist', () => {
      expect(player.nickname).to.be.a('string');
      expect(player.uuid).to.be.a('string');
      expect(player.history).to.be.an('array').that.satisfies(v => {
        return v.every(i => typeof i === 'string');
      });
      expect(player.rank).to.be.a('string');
      if (player.mcVersion) {
        expect(player.mcVersion).to.be.a('string');
      }
      if (player.firstLoginTimestamp) {
        expect(player.firstLoginTimestamp).to.be.a('number');
      }
      if (player.lastLoginTimestamp) {
        expect(player.lastLoginTimestamp).to.be.a('number');
      }
      if (player.lastLogoutTimestamp) {
        expect(player.lastLogoutTimestamp).to.be.a('number');
      }
      if (player.recentlyPlayedGame) {
        expect(player.recentlyPlayedGame).instanceOf(Game);
      }
      if (player.plusColor) {
        expect(player.plusColor).instanceOf(Color);
      }
      expect(player.karma).to.be.a('number');
      expect(player.achievementPoints).to.be.a('number');
      expect(player.totalExperience).to.be.a('number');
      expect(player.level).to.be.a('number');
      expect(player.socialMedia).to.be.an('array');
      if (player.giftsSent) {
        expect(player.giftsSent).to.be.a('number')
      }
      if (player.giftsReceived) {
        expect(player.giftsReceived).to.be.a('number')
      }
      if (player.lastDailyRewardTimestamp) {
        expect(player.lastDailyRewardTimestamp).to.be.a('number');
      }
      if (player.stats) {
        if (player.stats.skywars) {
          expect(player.stats.skywars).instanceOf(SkyWars);
        }
        if (player.stats.bedwars) {
          expect(player.stats.bedwars).instanceOf(BedWars);
        }
        if (player.stats.uhc) {
          expect(player.stats.uhc).instanceOf(UHC);
        }
        if (player.stats.speeduhc) {
          expect(player.stats.speeduhc).instanceOf(SpeedUHC);
        }
        if (player.stats.murdermystery) {
          expect(player.stats.murdermystery).instanceOf(MurderMystery);
        }
        if (player.stats.duels) {
          expect(player.stats.duels).instanceOf(Duels);
        }
        if (player.stats.buildbattle) {
          expect(player.stats.buildbattle).instanceOf(BuildBattle);
        }
        if (player.stats.megawalls) {
          expect(player.stats.megawalls).instanceOf(MegaWalls);
        }
        if (player.stats.copsandcrims) {
          expect(player.stats.copsandcrims).instanceOf(CopsAndCrims);
        }
        if (player.stats.tntgames) {
          expect(player.stats.tntgames).instanceOf(TNTGames);
        }
        if (player.stats.smashheroes) {
          expect(player.stats.smashheroes).instanceOf(SmashHeroes);
        }
        if (player.stats.vampirez) {
          expect(player.stats.vampirez).instanceOf(VampireZ);
        }
        if (player.stats.blitzsg) {
          expect(player.stats.blitzsg).instanceOf(BlitzSurvivalGames);
        }
        if (player.stats.arena) {
          expect(player.stats.arena).instanceOf(ArenaBrawl);
        }
      }
    });
  });
});
describe('Client', () => {
  describe('getWatchdogStats', () => {
    let result;
    it('expect not to throw', async () => {
      result = await client.getWatchdogStats();
    });
    it('required keys should exist', () => {
      expect(result.byStaffRollingDay).to.be.a('number');
      expect(result.byStaffTotal).to.be.a('number');
      expect(result.byWatchdogLastMinute).to.be.a('number');
      expect(result.byWatchdogRollingDay).to.be.a('number');
      expect(result.byWatchdogTotal).to.be.a('number');
    });
  });
});
describe('Client', () => {
  describe('getPing', () => {
    it('should be a number', async () => {
      const ping = await client.getPing();
      expect(ping).to.be.an('number');
    });
  });
});
describe('Client', () => {
  describe('getFriends', () => {
    it('required keys should exist', async () => {
      const friends = await client.getFriends('f025c1c7f55a4ea0b8d93f47d17dfe0f');
      expect(friends).to.be.an('array');
      for (const friend of friends) {
        expect(friend.sender).to.be.a('string');
        expect(friend.receiver).to.be.a('string');
        expect(friend.friendSinceTimestamp).to.be.a('number');
        expect(friend.friendSince).to.be.a('Date');
      }
    });
  });
});
