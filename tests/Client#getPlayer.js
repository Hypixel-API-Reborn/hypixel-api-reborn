/* eslint-disable no-undef */
const {
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
  WoolWars,
  Errors
} = require('../src');
const { client } = require('./Client.js');
const { expect } = require('chai');

describe('Client#getPlayer', () => {
  let player;
  describe('Valid Player', async () => {
    describe('UUID Test 1', async () => {
      it('expect not to throw', async () => {
        player = await client.getPlayer('f025c1c7f55a4ea0b8d93f47d17dfe0f', { guild: true });
      }).timeout(5000);
      it('should be an object', () => {
        expect(player).to.be.an('object');
      });
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
          if (player.stats.woolwars) {
            expect(player.stats.woolwars).instanceOf(WoolWars);
          }
        }
      });
    });
    describe('UUID Test 2', async () => {
      it('expect not to throw', async () => {
        player = await client.getPlayer('ad8fefaa8351454bb739a4eaa872173f', { guild: true });
      }).timeout(5000);
      it('should be an object', () => {
        expect(player).to.be.an('object');
      });
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
          if (player.stats.woolwars) {
            expect(player.stats.woolwars).instanceOf(WoolWars);
          }
        }
      });
    });
    describe('UUID Test 3', async () => {
      it('expect not to throw', async () => {
        player = await client.getPlayer('b876ec32e396476ba1158438d83c67d4', { guild: true });
      }).timeout(5000);
      it('should be an object', () => {
        expect(player).to.be.an('object');
      });
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
          if (player.stats.woolwars) {
            expect(player.stats.woolwars).instanceOf(WoolWars);
          }
        }
      });
    });
    describe('UUID Test 4', async () => {
      it('expect not to throw', async () => {
        player = await client.getPlayer('52d9a36f66ce4cdf9a56ad9724ae9fb4', { guild: true });
      }).timeout(5000);
      it('should be an object', () => {
        expect(player).to.be.an('object');
      });
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
          if (player.stats.woolwars) {
            expect(player.stats.woolwars).instanceOf(WoolWars);
          }
        }
      });
    });
    describe('UUID Test 5', async () => {
      it('expect not to throw', async () => {
        player = await client.getPlayer('0e410e560df24000b585d51ab67b1099', { guild: true });
      }).timeout(5000);
      it('should be an object', () => {
        expect(player).to.be.an('object');
      });
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
          if (player.stats.woolwars) {
            expect(player.stats.woolwars).instanceOf(WoolWars);
          }
        }
      });
    });
    describe('Username Test 1', async () => {
      it('expect not to throw', async () => {
        player = await client.getPlayer('Plancke', { guild: true });
      }).timeout(5000);
      it('should be an object', () => {
        expect(player).to.be.an('object');
      });
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
          if (player.stats.woolwars) {
            expect(player.stats.woolwars).instanceOf(WoolWars);
          }
        }
      });
    });
    describe('Username Test 2', async () => {
      it('expect not to throw', async () => {
        player = await client.getPlayer('ConnorLinfoot', { guild: true });
      }).timeout(5000);
      it('should be an object', () => {
        expect(player).to.be.an('object');
      });
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
          if (player.stats.woolwars) {
            expect(player.stats.woolwars).instanceOf(WoolWars);
          }
        }
      });
    });
    describe('Username Test 3', async () => {
      it('expect not to throw', async () => {
        player = await client.getPlayer('Technoblade', { guild: true });
      }).timeout(5000);
      it('should be an object', () => {
        expect(player).to.be.an('object');
      });
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
          if (player.stats.woolwars) {
            expect(player.stats.woolwars).instanceOf(WoolWars);
          }
        }
      });
    });
    describe('Username Test 4', async () => {
      it('expect not to throw', async () => {
        player = await client.getPlayer('stavzdev', { guild: true });
      }).timeout(5000);
      it('should be an object', () => {
        expect(player).to.be.an('object');
      });
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
          if (player.stats.woolwars) {
            expect(player.stats.woolwars).instanceOf(WoolWars);
          }
        }
      });
    });
    describe('Username Test 5', async () => {
      it('expect not to throw', async () => {
        player = await client.getPlayer('xHascox', { guild: true });
      }).timeout(5000);
      it('should be an object', () => {
        expect(player).to.be.an('object');
      });
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
          if (player.stats.woolwars) {
            expect(player.stats.woolwars).instanceOf(WoolWars);
          }
        }
      });
    });
  });
  describe('Invalid Player', async () => {
    describe('Invalid Username Test', async () => {
      it('expect to throw', async () => {
        try {
          player = await client.getPlayer('ThisUsernameIsInvalid', { guild: true });
          throw new Error('Expected an error to be thrown, but no error was thrown.');
        } catch (error) {
          expect(error.message).to.equal(Errors.PLAYER_DOES_NOT_EXIST);
        }
      }).timeout(5000);
    });
    describe('Invalid UUID Test', async () => {
      it('expect to throw', async () => {
        try {
          player = await client.getPlayer('this-is-not-a-valid-uuid', { guild: true });
          throw new Error('Expected an error to be thrown, but no error was thrown.');
        } catch (error) {
          expect(error.message).to.equal(Errors.PLAYER_DOES_NOT_EXIST);
        }
      }).timeout(5000);
    });
    describe('No input Test', async () => {
      it('expect to throw', async () => {
        try {
          player = await client.getPlayer();
          throw new Error('Expected an error to be thrown, but no error was thrown.');
        } catch (error) {
          expect(error.message).to.equal(Errors.NO_NICKNAME_UUID);
        }
      }).timeout(5000);
    });
    describe('No input Test', async () => {
      it('expect to throw', async () => {
        try {
          player = await client.getPlayer();
          throw new Error('Expected an error to be thrown, but no error was thrown.');
        } catch (error) {
          expect(error.message).to.equal(Errors.NO_NICKNAME_UUID);
        }
      }).timeout(5000);
    });
  });
});
