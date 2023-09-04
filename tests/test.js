/* eslint-disable no-undef */
const {
  Client,
  Game,
  SkyWars,
  BedWars,
  UHC,
  SpeedUHC,
  MurderMystery,
  Duels,
  BuildBattle,
  MegaWalls,
  CopsAndCrims,
  TNTGames,
  SmashHeroes,
  VampireZ,
  BlitzSurvivalGames,
  ArenaBrawl,
  Guild,
  PlayerCosmetics,
  Pets,
  Pet,
  Color,
  ServerInfo
} = require('../src');
const client = new Client('2069b2b6-a716-493f-afd5-d0b1f16b9923', {
  cache: true
});
const { expect } = require('chai');
describe('Client#getPlayer', () => {
  let player;
  it('expect not to throw', async () => {
    player = await client.getPlayer('f025c1c7f55a4ea0b8d93f47d17dfe0f', { guild: true });
  }).timeout(5000);
  it('required keys should exist', () => {
    expect(player.nickname).to.be.a('string');
    expect(player.uuid).to.be.a('string');
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
    if (player.guild) {
      expect(player.guild).instanceOf(Guild);
    }
    expect(player.karma).to.be.a('number');
    expect(player.achievementPoints).to.be.a('number');
    expect(player.totalExperience).to.be.a('number');
    expect(player.level).to.be.a('number');
    expect(player.socialMedia).to.be.an('array');
    if (player.giftsSent) {
      expect(player.giftsSent).to.be.a('number');
    }
    if (player.giftsReceived) {
      expect(player.giftsReceived).to.be.a('number');
    }
    if (player.lastDailyRewardTimestamp) {
      expect(player.lastDailyRewardTimestamp).to.be.a('number');
    }
    expect(player.userLanguage).to.be.a('string');
    if (player.claimedLevelingRewards.length) {
      expect(player.claimedLevelingRewards)
        .to.be.an('array')
        .that.satisfies((v) => {
          return v.every((i) => typeof i === 'number');
        });
    }
    if (player.globalCosmetics) {
      expect(player.globalCosmetics).to.be.instanceOf(PlayerCosmetics);
      expect(player.globalCosmetics.allCosmetics)
        .to.be.an('array')
        .that.satisfies((v) => {
          return v.every((i) => typeof i === 'string');
        });
      if (player.globalCosmetics.petManager) {
        expect(player.globalCosmetics.petManager).to.be.instanceOf(Pets);
        expect(player.globalCosmetics.petManager.pets)
          .to.be.an('array')
          .that.satisfies((v) => {
            return v.every((i) => i instanceof Pet);
          });
        if (player.globalCosmetics.petManager.lastJourneyTimestamp) {
          expect(player.globalCosmetics.petManager.lastJourneyTimestamp).to.be.a('number');
        }
        if (player.globalCosmetics.petManager.lastJourneyAt) {
          expect(player.globalCosmetics.petManager.lastJourneyAt).to.be.instanceOf(Date);
        }
        if (player.globalCosmetics.petManager.petConsumables) {
          expect(player.globalCosmetics.petManager.petConsumables).to.be.an('object');
        }
      }
      if (player.globalCosmetics.suits) {
        expect(player.globalCosmetics.suits)
          .to.be.an('array')
          .that.satisfies((v) => {
            return v.every((i) => typeof i === 'string');
          });
      }
      if (player.globalCosmetics.hats) {
        expect(player.globalCosmetics.hats)
          .to.be.an('array')
          .that.satisfies((v) => {
            return v.every((i) => typeof i === 'string');
          });
      }
      if (player.globalCosmetics.gadgets) {
        expect(player.globalCosmetics.gadgets)
          .to.be.an('array')
          .that.satisfies((v) => {
            return v.every((i) => typeof i === 'string');
          });
      }
      if (player.globalCosmetics.morphs) {
        expect(player.globalCosmetics.morphs)
          .to.be.an('array')
          .that.satisfies((v) => {
            return v.every((i) => typeof i === 'string');
          });
      }
      if (player.globalCosmetics.cloaks) {
        expect(player.globalCosmetics.cloaks)
          .to.be.an('array')
          .that.satisfies((v) => {
            return v.every((i) => typeof i === 'string');
          });
      }
      if (player.globalCosmetics.rankColors) {
        expect(player.globalCosmetics.rankColors)
          .to.be.an('array')
          .that.satisfies((v) => {
            return v.every((i) => typeof i === 'string');
          });
      }
      if (player.globalCosmetics.particlePacks) {
        expect(player.globalCosmetics.particlePacks)
          .to.be.an('array')
          .that.satisfies((v) => {
            return v.every((i) => typeof i === 'string');
          });
      }
      if (player.globalCosmetics.clickEffects) {
        expect(player.globalCosmetics.clickEffects)
          .to.be.an('array')
          .that.satisfies((v) => {
            return v.every((i) => typeof i === 'string');
          });
      }
    }
    if (player.ranksPurchaseTime) {
      if (player.ranksPurchaseTime['VIP']) {
        expect(player.ranksPurchaseTime['VIP']).to.be.instanceOf(Date);
      }
      if (player.ranksPurchaseTime['VIP_PLUS']) {
        expect(player.ranksPurchaseTime['VIP_PLUS']).to.be.instanceOf(Date);
      }
      if (player.ranksPurchaseTime['MVP']) {
        expect(player.ranksPurchaseTime['MVP']).to.be.instanceOf(Date);
      }
      if (player.ranksPurchaseTime['MVP_PLUS']) {
        expect(player.ranksPurchaseTime['MVP_PLUS']).to.be.instanceOf(Date);
      }
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
describe('Client#getWatchdogStats', () => {
  let watchdog;
  it('expect not to throw', async () => {
    watchdog = await client.getWatchdogStats();
  });
  it('required keys should exist', () => {
    expect(watchdog.byStaffRollingDay).to.be.a('number');
    expect(watchdog.byStaffTotal).to.be.a('number');
    expect(watchdog.byWatchdogLastMinute).to.be.a('number');
    expect(watchdog.byWatchdogRollingDay).to.be.a('number');
    expect(watchdog.byWatchdogTotal).to.be.a('number');
  });
});
describe('Client#getStatus', () => {
  let status;
  it('expect not to throw', async () => {
    status = await client.getStatus('f025c1c7f55a4ea0b8d93f47d17dfe0f');
  });
  it('required keys should exist', () => {
    if (status.online) {
      expect(status.online).to.be.a('boolean');
    }
    if (status.game) {
      expect(status.game).to.be.a('number');
    }
    if (status.map) {
      expect(status.map).to.be.a('number');
    }
    if (status.mode) {
      expect(status.mode).to.be.a('number');
    }
  });
});
describe('Client#getLeaderboards', async () => {
  let leaderboards;
  it('expect not to throw', async () => {
    leaderboards = await client.getLeaderboards();
  });
  it('should be an object', () => {
    expect(leaderboards).to.be.an('object');
  });
  it('required keys should exist', () => {
    for (const minigame in leaderboards) {
      const minigameLbs = leaderboards[minigame];
      for (const lb of minigameLbs) {
        expect(lb).to.be.an('object');
        expect(lb.leaders).to.be.an('array');
        expect(lb.playerCount).to.be.a('number');
        if (lb.name) {
          expect(lb.name).to.be.a('string');
        }
        if (lb.title) {
          expect(lb.title).to.be.a('string');
        }
      }
    }
  });
});
describe('Client#getSkyblockNews', async () => {
  let news;
  it('expect not to throw', async () => {
    news = await client.getSkyblockNews();
  });
  it('required keys should exist', () => {
    expect(news).to.be.an('array');
    for (const record of news) {
      expect(record.title).to.be.a('string');
      expect(record.link).to.be.a('string');
      expect(record.date).instanceOf(Date);
      expect(record.rawDate).to.be.a('string');
    }
  });
});
describe('Client#getServerInfo', async () => {
  let server;
  it('expect not to throw', async () => {
    server = await client.getServerInfo('not-a-number');
  });
  it('required keys should exist', () => {
    expect(server.protocolUsed).to.be.a('number');
    expect(server.versionInfo).to.be.a('string');
    expect(server.players.max).to.be.a('number');
    expect(server.players.online).to.be.a('number');
    expect(server.players.players).to.be.an('array');
    if (server.rawMOTD) {
      expect(server.rawMOTD).to.be.a('string');
    }
    if (server.cleanMOTD) {
      expect(server.cleanMOTD).to.be.a('string');
    }
    if (server.textMOTD) {
      expect(server.textMOTD).to.be.a('string');
    }
    if (server.faviconB64) {
      expect(server.faviconB64).to.be.a('string');
    }
    if (server.favicon) {
      expect(server.favicon).to.be.instanceOf(Buffer);
    }
    if (server.ping) {
      expect(server.ping).to.be.a('number');
    }
  });
});
