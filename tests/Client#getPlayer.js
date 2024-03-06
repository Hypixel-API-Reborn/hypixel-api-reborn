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
  Errors,
  Player
} = require('../src');
const { client } = require('./Client.js');
const { expect } = require('chai');

const uuids = [
  'f025c1c7f55a4ea0b8d93f47d17dfe0f',
  '52d9a36f66ce4cdf9a56ad9724ae9fb4',
  '4982eac19ae7422891b61a17a74c87a2',
  'f17d5ae1ed1f4dc9833339b56024640c',
  '3b76b69ae5134296a730ed49171ad6f8',
  '14727faefbdc4aff848cd2713eb9939e'
];

const usernames = ['kathund', 'StavZDev', 'Plancke', 'SoupyRaccn', 'duckysoskilled', 'Altpapier'];

describe('Client#getPlayer', () => {
  describe('Valid Player', async () => {
    uuids.forEach((uuid) => {
      describe(`UUID Test ${uuids.indexOf(uuid) + 1}`, async () => {
        let playerTest;
        it('expect not to throw', async () => {
          playerTest = await client.getPlayer(uuid, { guild: true });
        }).timeout(5000);
        it('should be an object', () => {
          expect(playerTest).to.be.an('object');
        });
        it('required keys should exist', () => {
          expect(playerTest).to.be.instanceOf(Player);
          expect(playerTest.nickname).to.be.a('string');
          expect(playerTest.uuid).to.be.a('string');
          expect(playerTest.rank).to.be.a('string');
          if (playerTest.mcVersion) {
            expect(playerTest.mcVersion).to.be.a('string');
          }
          if (playerTest.firstLoginTimestamp) {
            expect(playerTest.firstLoginTimestamp).to.be.a('number');
          }
          if (playerTest.lastLoginTimestamp) {
            expect(playerTest.lastLoginTimestamp).to.be.a('number');
          }
          if (playerTest.lastLogoutTimestamp) {
            expect(playerTest.lastLogoutTimestamp).to.be.a('number');
          }
          if (playerTest.recentlyPlayedGame) {
            expect(playerTest.recentlyPlayedGame).instanceOf(Game);
          }
          if (playerTest.plusColor) {
            expect(playerTest.plusColor).instanceOf(Color);
          }
          if (playerTest.guild) {
            expect(playerTest.guild).instanceOf(Guild);
          }
          expect(playerTest.karma).to.be.a('number');
          expect(playerTest.achievementPoints).to.be.a('number');
          expect(playerTest.totalExperience).to.be.a('number');
          expect(playerTest.level).to.be.a('number');
          expect(playerTest.socialMedia).to.be.an('array');
          if (playerTest.giftsSent) {
            expect(playerTest.giftsSent).to.be.a('number');
          }
          if (playerTest.giftsReceived) {
            expect(playerTest.giftsReceived).to.be.a('number');
          }
          if (playerTest.lastDailyRewardTimestamp) {
            expect(playerTest.lastDailyRewardTimestamp).to.be.a('number');
          }
          expect(playerTest.userLanguage).to.be.a('string');
          if (playerTest.claimedLevelingRewards.length) {
            expect(playerTest.claimedLevelingRewards)
              .to.be.an('array')
              .that.satisfies((v) => {
                return v.every((i) => typeof i === 'number');
              });
          }
          if (playerTest.globalCosmetics) {
            expect(playerTest.globalCosmetics).to.be.instanceOf(PlayerCosmetics);
            expect(playerTest.globalCosmetics.allCosmetics)
              .to.be.an('array')
              .that.satisfies((v) => {
                return v.every((i) => typeof i === 'string');
              });
            if (playerTest.globalCosmetics.petManager) {
              expect(playerTest.globalCosmetics.petManager).to.be.instanceOf(Pets);
              expect(playerTest.globalCosmetics.petManager.pets)
                .to.be.an('array')
                .that.satisfies((v) => {
                  return v.every((i) => i instanceof Pet);
                });
              if (playerTest.globalCosmetics.petManager.lastJourneyTimestamp) {
                expect(playerTest.globalCosmetics.petManager.lastJourneyTimestamp).to.be.a('number');
              }
              if (playerTest.globalCosmetics.petManager.lastJourneyAt) {
                expect(playerTest.globalCosmetics.petManager.lastJourneyAt).to.be.instanceOf(Date);
              }
              if (playerTest.globalCosmetics.petManager.petConsumables) {
                expect(playerTest.globalCosmetics.petManager.petConsumables).to.be.an('object');
              }
            }
            if (playerTest.globalCosmetics.suits) {
              expect(playerTest.globalCosmetics.suits)
                .to.be.an('array')
                .that.satisfies((v) => {
                  return v.every((i) => typeof i === 'string');
                });
            }
            if (playerTest.globalCosmetics.hats) {
              expect(playerTest.globalCosmetics.hats)
                .to.be.an('array')
                .that.satisfies((v) => {
                  return v.every((i) => typeof i === 'string');
                });
            }
            if (playerTest.globalCosmetics.gadgets) {
              expect(playerTest.globalCosmetics.gadgets)
                .to.be.an('array')
                .that.satisfies((v) => {
                  return v.every((i) => typeof i === 'string');
                });
            }
            if (playerTest.globalCosmetics.morphs) {
              expect(playerTest.globalCosmetics.morphs)
                .to.be.an('array')
                .that.satisfies((v) => {
                  return v.every((i) => typeof i === 'string');
                });
            }
            if (playerTest.globalCosmetics.cloaks) {
              expect(playerTest.globalCosmetics.cloaks)
                .to.be.an('array')
                .that.satisfies((v) => {
                  return v.every((i) => typeof i === 'string');
                });
            }
            if (playerTest.globalCosmetics.rankColors) {
              expect(playerTest.globalCosmetics.rankColors)
                .to.be.an('array')
                .that.satisfies((v) => {
                  return v.every((i) => typeof i === 'string');
                });
            }
            if (playerTest.globalCosmetics.particlePacks) {
              expect(playerTest.globalCosmetics.particlePacks)
                .to.be.an('array')
                .that.satisfies((v) => {
                  return v.every((i) => typeof i === 'string');
                });
            }
            if (playerTest.globalCosmetics.clickEffects) {
              expect(playerTest.globalCosmetics.clickEffects)
                .to.be.an('array')
                .that.satisfies((v) => {
                  return v.every((i) => typeof i === 'string');
                });
            }
          }
          if (playerTest.ranksPurchaseTime) {
            if (playerTest.ranksPurchaseTime['VIP']) {
              expect(playerTest.ranksPurchaseTime['VIP']).to.be.instanceOf(Date);
            }
            if (playerTest.ranksPurchaseTime['VIP_PLUS']) {
              expect(playerTest.ranksPurchaseTime['VIP_PLUS']).to.be.instanceOf(Date);
            }
            if (playerTest.ranksPurchaseTime['MVP']) {
              expect(playerTest.ranksPurchaseTime['MVP']).to.be.instanceOf(Date);
            }
            if (playerTest.ranksPurchaseTime['MVP_PLUS']) {
              expect(playerTest.ranksPurchaseTime['MVP_PLUS']).to.be.instanceOf(Date);
            }
          }
          if (playerTest.stats) {
            if (playerTest.stats.skywars) {
              expect(playerTest.stats.skywars).instanceOf(SkyWars);
            }
            if (playerTest.stats.bedwars) {
              expect(playerTest.stats.bedwars).instanceOf(BedWars);
            }
            if (playerTest.stats.uhc) {
              expect(playerTest.stats.uhc).instanceOf(UHC);
            }
            if (playerTest.stats.speeduhc) {
              expect(playerTest.stats.speeduhc).instanceOf(SpeedUHC);
            }
            if (playerTest.stats.murdermystery) {
              expect(playerTest.stats.murdermystery).instanceOf(MurderMystery);
            }
            if (playerTest.stats.duels) {
              expect(playerTest.stats.duels).instanceOf(Duels);
            }
            if (playerTest.stats.buildbattle) {
              expect(playerTest.stats.buildbattle).instanceOf(BuildBattle);
            }
            if (playerTest.stats.megawalls) {
              expect(playerTest.stats.megawalls).instanceOf(MegaWalls);
            }
            if (playerTest.stats.copsandcrims) {
              expect(playerTest.stats.copsandcrims).instanceOf(CopsAndCrims);
            }
            if (playerTest.stats.tntgames) {
              expect(playerTest.stats.tntgames).instanceOf(TNTGames);
            }
            if (playerTest.stats.smashheroes) {
              expect(playerTest.stats.smashheroes).instanceOf(SmashHeroes);
            }
            if (playerTest.stats.vampirez) {
              expect(playerTest.stats.vampirez).instanceOf(VampireZ);
            }
            if (playerTest.stats.blitzsg) {
              expect(playerTest.stats.blitzsg).instanceOf(BlitzSurvivalGames);
            }
            if (playerTest.stats.arena) {
              expect(playerTest.stats.arena).instanceOf(ArenaBrawl);
            }
            if (playerTest.stats.woolwars) {
              expect(playerTest.stats.woolwars).instanceOf(WoolWars);
            }
          }
        });
      });
    });
    usernames.forEach((username) => {
      describe(`Username Test ${usernames.indexOf(username) + 1}`, async () => {
        let playerTest;
        it('expect not to throw', async () => {
          playerTest = await client.getPlayer(username, { guild: true });
        }).timeout(5000);
        it('should be an object', () => {
          expect(playerTest).to.be.an('object');
        });
        it('required keys should exist', () => {
          expect(playerTest).to.be.instanceOf(Player);
          expect(playerTest.nickname).to.be.a('string');
          expect(playerTest.uuid).to.be.a('string');
          expect(playerTest.rank).to.be.a('string');
          if (playerTest.mcVersion) {
            expect(playerTest.mcVersion).to.be.a('string');
          }
          if (playerTest.firstLoginTimestamp) {
            expect(playerTest.firstLoginTimestamp).to.be.a('number');
          }
          if (playerTest.lastLoginTimestamp) {
            expect(playerTest.lastLoginTimestamp).to.be.a('number');
          }
          if (playerTest.lastLogoutTimestamp) {
            expect(playerTest.lastLogoutTimestamp).to.be.a('number');
          }
          if (playerTest.recentlyPlayedGame) {
            expect(playerTest.recentlyPlayedGame).instanceOf(Game);
          }
          if (playerTest.plusColor) {
            expect(playerTest.plusColor).instanceOf(Color);
          }
          if (playerTest.guild) {
            expect(playerTest.guild).instanceOf(Guild);
          }
          expect(playerTest.karma).to.be.a('number');
          expect(playerTest.achievementPoints).to.be.a('number');
          expect(playerTest.totalExperience).to.be.a('number');
          expect(playerTest.level).to.be.a('number');
          expect(playerTest.socialMedia).to.be.an('array');
          if (playerTest.giftsSent) {
            expect(playerTest.giftsSent).to.be.a('number');
          }
          if (playerTest.giftsReceived) {
            expect(playerTest.giftsReceived).to.be.a('number');
          }
          if (playerTest.lastDailyRewardTimestamp) {
            expect(playerTest.lastDailyRewardTimestamp).to.be.a('number');
          }
          expect(playerTest.userLanguage).to.be.a('string');
          if (playerTest.claimedLevelingRewards.length) {
            expect(playerTest.claimedLevelingRewards)
              .to.be.an('array')
              .that.satisfies((v) => {
                return v.every((i) => typeof i === 'number');
              });
          }
          if (playerTest.globalCosmetics) {
            expect(playerTest.globalCosmetics).to.be.instanceOf(PlayerCosmetics);
            expect(playerTest.globalCosmetics.allCosmetics)
              .to.be.an('array')
              .that.satisfies((v) => {
                return v.every((i) => typeof i === 'string');
              });
            if (playerTest.globalCosmetics.petManager) {
              expect(playerTest.globalCosmetics.petManager).to.be.instanceOf(Pets);
              expect(playerTest.globalCosmetics.petManager.pets)
                .to.be.an('array')
                .that.satisfies((v) => {
                  return v.every((i) => i instanceof Pet);
                });
              if (playerTest.globalCosmetics.petManager.lastJourneyTimestamp) {
                expect(playerTest.globalCosmetics.petManager.lastJourneyTimestamp).to.be.a('number');
              }
              if (playerTest.globalCosmetics.petManager.lastJourneyAt) {
                expect(playerTest.globalCosmetics.petManager.lastJourneyAt).to.be.instanceOf(Date);
              }
              if (playerTest.globalCosmetics.petManager.petConsumables) {
                expect(playerTest.globalCosmetics.petManager.petConsumables).to.be.an('object');
              }
            }
            if (playerTest.globalCosmetics.suits) {
              expect(playerTest.globalCosmetics.suits)
                .to.be.an('array')
                .that.satisfies((v) => {
                  return v.every((i) => typeof i === 'string');
                });
            }
            if (playerTest.globalCosmetics.hats) {
              expect(playerTest.globalCosmetics.hats)
                .to.be.an('array')
                .that.satisfies((v) => {
                  return v.every((i) => typeof i === 'string');
                });
            }
            if (playerTest.globalCosmetics.gadgets) {
              expect(playerTest.globalCosmetics.gadgets)
                .to.be.an('array')
                .that.satisfies((v) => {
                  return v.every((i) => typeof i === 'string');
                });
            }
            if (playerTest.globalCosmetics.morphs) {
              expect(playerTest.globalCosmetics.morphs)
                .to.be.an('array')
                .that.satisfies((v) => {
                  return v.every((i) => typeof i === 'string');
                });
            }
            if (playerTest.globalCosmetics.cloaks) {
              expect(playerTest.globalCosmetics.cloaks)
                .to.be.an('array')
                .that.satisfies((v) => {
                  return v.every((i) => typeof i === 'string');
                });
            }
            if (playerTest.globalCosmetics.rankColors) {
              expect(playerTest.globalCosmetics.rankColors)
                .to.be.an('array')
                .that.satisfies((v) => {
                  return v.every((i) => typeof i === 'string');
                });
            }
            if (playerTest.globalCosmetics.particlePacks) {
              expect(playerTest.globalCosmetics.particlePacks)
                .to.be.an('array')
                .that.satisfies((v) => {
                  return v.every((i) => typeof i === 'string');
                });
            }
            if (playerTest.globalCosmetics.clickEffects) {
              expect(playerTest.globalCosmetics.clickEffects)
                .to.be.an('array')
                .that.satisfies((v) => {
                  return v.every((i) => typeof i === 'string');
                });
            }
          }
          if (playerTest.ranksPurchaseTime) {
            if (playerTest.ranksPurchaseTime['VIP']) {
              expect(playerTest.ranksPurchaseTime['VIP']).to.be.instanceOf(Date);
            }
            if (playerTest.ranksPurchaseTime['VIP_PLUS']) {
              expect(playerTest.ranksPurchaseTime['VIP_PLUS']).to.be.instanceOf(Date);
            }
            if (playerTest.ranksPurchaseTime['MVP']) {
              expect(playerTest.ranksPurchaseTime['MVP']).to.be.instanceOf(Date);
            }
            if (playerTest.ranksPurchaseTime['MVP_PLUS']) {
              expect(playerTest.ranksPurchaseTime['MVP_PLUS']).to.be.instanceOf(Date);
            }
          }
          if (playerTest.stats) {
            if (playerTest.stats.skywars) {
              expect(playerTest.stats.skywars).instanceOf(SkyWars);
            }
            if (playerTest.stats.bedwars) {
              expect(playerTest.stats.bedwars).instanceOf(BedWars);
            }
            if (playerTest.stats.uhc) {
              expect(playerTest.stats.uhc).instanceOf(UHC);
            }
            if (playerTest.stats.speeduhc) {
              expect(playerTest.stats.speeduhc).instanceOf(SpeedUHC);
            }
            if (playerTest.stats.murdermystery) {
              expect(playerTest.stats.murdermystery).instanceOf(MurderMystery);
            }
            if (playerTest.stats.duels) {
              expect(playerTest.stats.duels).instanceOf(Duels);
            }
            if (playerTest.stats.buildbattle) {
              expect(playerTest.stats.buildbattle).instanceOf(BuildBattle);
            }
            if (playerTest.stats.megawalls) {
              expect(playerTest.stats.megawalls).instanceOf(MegaWalls);
            }
            if (playerTest.stats.copsandcrims) {
              expect(playerTest.stats.copsandcrims).instanceOf(CopsAndCrims);
            }
            if (playerTest.stats.tntgames) {
              expect(playerTest.stats.tntgames).instanceOf(TNTGames);
            }
            if (playerTest.stats.smashheroes) {
              expect(playerTest.stats.smashheroes).instanceOf(SmashHeroes);
            }
            if (playerTest.stats.vampirez) {
              expect(playerTest.stats.vampirez).instanceOf(VampireZ);
            }
            if (playerTest.stats.blitzsg) {
              expect(playerTest.stats.blitzsg).instanceOf(BlitzSurvivalGames);
            }
            if (playerTest.stats.arena) {
              expect(playerTest.stats.arena).instanceOf(ArenaBrawl);
            }
            if (playerTest.stats.woolwars) {
              expect(playerTest.stats.woolwars).instanceOf(WoolWars);
            }
          }
        });
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
  });
});
