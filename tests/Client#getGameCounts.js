/* eslint-disable no-undef */
const { client } = require('./Client.js');
const { expect } = require('chai');

describe('Client#getGameCounts', async () => {
  let gameCounts;
  it('expect not to throw', async () => {
    gameCounts = await client.getGameCounts();
  });
  it('should be an object ', () => {
    console.log(gameCounts);
    expect(gameCounts).to.be.an('object');
  });
  it('required keys should exist', () => {
    expect(gameCounts.playerCount).to.be.a('number');

    expect(gameCounts.mainLobby).to.be.a('object');
    expect(gameCounts.mainLobby.players).to.be.a('number');

    if (gameCounts.tournamentLobby) {
      expect(gameCounts.tournamentLobby).to.be.a('object');
      expect(gameCounts.tournamentLobby.players).to.be.a('number');
    }

    if (gameCounts.smp) {
      expect(gameCounts.smp).to.be.a('object');
      expect(gameCounts.smp.players).to.be.a('number');
    }

    if (gameCounts.bedwars) {
      expect(gameCounts.bedwars).to.be.a('object');
      expect(gameCounts.bedwars.players).to.be.a('number');
      if (gameCounts.bedwars.modes) {
        expect(gameCounts.bedwars.modes).to.be.a('object');
        for (const mode in gameCounts.bedwars.modes) {
          expect(gameCounts.bedwars.modes[mode]).to.be.a('number');
        }
      }
    }

    if (gameCounts.thePit) {
      expect(gameCounts.thePit).to.be.a('object');
      expect(gameCounts.thePit.players).to.be.a('number');
      if (gameCounts.thePit.modes) {
        expect(gameCounts.thePit.modes).to.be.a('object');
        for (const mode in gameCounts.thePit.modes) {
          expect(gameCounts.thePit.modes[mode]).to.be.a('number');
        }
      }
    }

    if (gameCounts.theTntGames) {
      expect(gameCounts.theTntGames).to.be.a('object');
      expect(gameCounts.theTntGames.players).to.be.a('number');
      if (gameCounts.theTntGames.modes) {
        expect(gameCounts.theTntGames.modes).to.be.a('object');
        for (const mode in gameCounts.theTntGames.modes) {
          expect(gameCounts.theTntGames.modes[mode]).to.be.a('number');
        }
      }
    }

    if (gameCounts.classicGames) {
      expect(gameCounts.classicGames).to.be.a('object');
      expect(gameCounts.classicGames.players).to.be.a('number');
      if (gameCounts.classicGames.modes) {
        expect(gameCounts.classicGames.modes).to.be.a('object');
        for (const mode in gameCounts.classicGames.modes) {
          expect(gameCounts.classicGames.modes[mode]).to.be.a('number');
        }
      }
    }

    if (gameCounts.warlords) {
      expect(gameCounts.warlords).to.be.a('object');
      expect(gameCounts.warlords.players).to.be.a('number');
    }

    if (gameCounts.duels) {
      expect(gameCounts.duels).to.be.a('object');
      expect(gameCounts.duels.players).to.be.a('number');
      if (gameCounts.duels.modes) {
        expect(gameCounts.duels.modes).to.be.a('object');
        for (const mode in gameCounts.duels.modes) {
          expect(gameCounts.duels.modes[mode]).to.be.a('number');
        }
      }
    }

    if (gameCounts.smashHeroes) {
      expect(gameCounts.smashHeroes).to.be.a('object');
      expect(gameCounts.smashHeroes.players).to.be.a('number');
      if (gameCounts.smashHeroes.modes) {
        expect(gameCounts.smashHeroes.modes).to.be.a('object');
        for (const mode in gameCounts.smashHeroes.modes) {
          expect(gameCounts.smashHeroes.modes[mode]).to.be.a('number');
        }
      }
    }

    if (gameCounts.skyblock) {
      expect(gameCounts.skyblock).to.be.a('object');
      expect(gameCounts.skyblock.players).to.be.a('number');
      if (gameCounts.skyblock.modes) {
        expect(gameCounts.skyblock.modes).to.be.a('object');
        for (const mode in gameCounts.skyblock.modes) {
          expect(gameCounts.skyblock.modes[mode]).to.be.a('number');
        }
      }
    }

    if (gameCounts.uhcChampions) {
      expect(gameCounts.uhcChampions).to.be.a('object');
      expect(gameCounts.uhcChampions.players).to.be.a('number');
      if (gameCounts.uhcChampions.modes) {
        expect(gameCounts.uhcChampions.modes).to.be.a('object');
        for (const mode in gameCounts.uhcChampions.modes) {
          expect(gameCounts.uhcChampions.modes[mode]).to.be.a('number');
        }
      }
    }

    if (gameCounts.blitzSurvivalGames) {
      expect(gameCounts.blitzSurvivalGames).to.be.a('object');
      expect(gameCounts.blitzSurvivalGames.players).to.be.a('number');
      if (gameCounts.blitzSurvivalGames.modes) {
        expect(gameCounts.blitzSurvivalGames.modes).to.be.a('object');
        for (const mode in gameCounts.blitzSurvivalGames.modes) {
          expect(gameCounts.blitzSurvivalGames.modes[mode]).to.be.a('number');
        }
      }
    }

    if (gameCounts.murderMystery) {
      expect(gameCounts.murderMystery).to.be.a('object');
      expect(gameCounts.murderMystery.players).to.be.a('number');
      if (gameCounts.murderMystery.modes) {
        expect(gameCounts.murderMystery.modes).to.be.a('object');
        for (const mode in gameCounts.murderMystery.modes) {
          expect(gameCounts.murderMystery.modes[mode]).to.be.a('number');
        }
      }
    }

    if (gameCounts.speedUhc) {
      expect(gameCounts.speedUhc).to.be.a('object');
      expect(gameCounts.speedUhc.players).to.be.a('number');
    }

    if (gameCounts.copsAndCrims) {
      expect(gameCounts.copsAndCrims).to.be.a('object');
      expect(gameCounts.copsAndCrims.players).to.be.a('number');
      if (gameCounts.copsAndCrims.modes) {
        expect(gameCounts.copsAndCrims.modes).to.be.a('object');
        for (const mode in gameCounts.copsAndCrims.modes) {
          expect(gameCounts.copsAndCrims.modes[mode]).to.be.a('number');
        }
      }
    }

    if (gameCounts.skywars) {
      expect(gameCounts.skywars).to.be.a('object');
      expect(gameCounts.skywars.players).to.be.a('number');
      if (gameCounts.skywars.modes) {
        expect(gameCounts.skywars.modes).to.be.a('object');
        for (const mode in gameCounts.skywars.modes) {
          expect(gameCounts.skywars.modes[mode]).to.be.a('number');
        }
      }
    }

    if (gameCounts.replay) {
      expect(gameCounts.replay).to.be.a('object');
      expect(gameCounts.replay.players).to.be.a('number');
      if (gameCounts.replay.modes) {
        expect(gameCounts.replay.modes).to.be.a('object');
        for (const mode in gameCounts.replay.modes) {
          expect(gameCounts.replay.modes[mode]).to.be.a('number');
        }
      }
    }

    if (gameCounts.arcade) {
      expect(gameCounts.arcade).to.be.a('object');
      expect(gameCounts.arcade.players).to.be.a('number');
      if (gameCounts.arcade.modes) {
        expect(gameCounts.arcade.modes).to.be.a('object');
        for (const mode in gameCounts.arcade.modes) {
          expect(gameCounts.arcade.modes[mode]).to.be.a('number');
        }
      }
    }

    if (gameCounts.woolGames) {
      expect(gameCounts.woolGames).to.be.a('object');
      expect(gameCounts.woolGames.players).to.be.a('number');
      if (gameCounts.woolGames.modes) {
        expect(gameCounts.woolGames.modes).to.be.a('object');
        for (const mode in gameCounts.woolGames.modes) {
          expect(gameCounts.woolGames.modes[mode]).to.be.a('number');
        }
      }
    }

    if (gameCounts.housing) {
      expect(gameCounts.housing).to.be.a('object');
      expect(gameCounts.housing.players).to.be.a('number');
    }

    if (gameCounts.megaWalls) {
      expect(gameCounts.megaWalls).to.be.a('object');
      expect(gameCounts.megaWalls.players).to.be.a('number');
      expect(gameCounts.megaWalls.modes).to.be.a('object');
      for (const mode in gameCounts.megaWalls.modes) {
        expect(gameCounts.megaWalls.modes[mode]).to.be.a('number');
      }
    }

    if (gameCounts.buildBattle) {
      expect(gameCounts.buildBattle).to.be.a('object');
      expect(gameCounts.buildBattle.players).to.be.a('number');
      expect(gameCounts.buildBattle.modes).to.be.a('object');
      for (const mode in gameCounts.buildBattle.modes) {
        expect(gameCounts.buildBattle.modes[mode]).to.be.a('number');
      }
    }

    if (gameCounts.limbo) {
      expect(gameCounts.limbo).to.be.a('object');
      expect(gameCounts.limbo.players).to.be.a('number');
    }

    if (gameCounts.idle) {
      expect(gameCounts.idle).to.be.a('object');
      expect(gameCounts.idle.players).to.be.a('number');
    }

    if (gameCounts.queue) {
      expect(gameCounts.queue).to.be.a('object');
      expect(gameCounts.queue.players).to.be.a('number');
    }
  });
});
