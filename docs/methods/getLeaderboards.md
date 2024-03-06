# getLeaderboards

Gets all leaderboards.

## Arguments

- [Method options](https://hypixel-api-reborn.github.io/#/docs/main/master/typedef/MethodOptions) (optional)

## Example usage

```js
const Hypixel = require('hypixel-api-reborn');
const hypixel = new Hypixel.Client('API-KEY');

hypixel
  .getLeaderboards()
  .then((leaderboards) => {
    console.log(leaderboards);
  })
  .catch((e) => {
    console.error(e);
  });

// async/await
const leaderboards = await hypixel.getLeaderboards().catch((e) => console.error(e));
console.log(leaderboards);
```

## Example response

```js
{
  ARENA: [
    Leaderboard { name: 'Overall', title: 'Rating', playerCount: 10, leaders: [Array] },
    Leaderboard { name: 'Overall', title: '1v1 Wins', playerCount: 10, leaders: [Array] }
  ],
  COPS_AND_CRIMS: [
    Leaderboard { name: 'Overall', title: 'Kills', playerCount: 10, leaders: [Array] },
    Leaderboard { name: 'Monthly', title: 'Defusal Wins', playerCount: 10, leaders: [Array] },
    Leaderboard { name: 'Weekly', title: 'Defusal Wins', playerCount: 10, leaders: [Array] },
    Leaderboard { name: 'Monthly', title: 'Deathmatch Wins', playerCount: 10, leaders: [Array] },
    Leaderboard { name: 'Weekly', title: 'Deathmatch Wins', playerCount: 10, leaders: [Array] }
  ],
  WARLORDS: [
    Leaderboard { name: 'Overall', title: 'Wins', playerCount: 10, leaders: [Array] },
    Leaderboard { name: 'Overall', title: 'DOM Wins', playerCount: 10, leaders: [Array] },
    Leaderboard { name: 'Overall', title: 'TDM Wins', playerCount: 10, leaders: [Array] },
    Leaderboard { name: 'Overall', title: 'CTF Wins', playerCount: 10, leaders: [Array] }
  ],
  BLITZ_SURVIVAL_GAMES: [
    Leaderboard { name: 'Overall', title: 'Kills', playerCount: 10, leaders: [Array] },
    Leaderboard { name: 'Overall', title: 'Solo Wins', playerCount: 10, leaders: [Array] },
    Leaderboard { name: 'Overall', title: 'Teams Wins', playerCount: 10, leaders: [Array] }
  ],
  UHC: [
    Leaderboard { name: 'Overall', title: 'Kills', playerCount: 10, leaders: [Array] },
    Leaderboard { name: 'Monthly', title: 'Kills', playerCount: 10, leaders: [Array] },
    Leaderboard { name: 'Overall', title: 'Wins', playerCount: 10, leaders: [Array] },
    Leaderboard { name: 'Monthly', title: 'Wins', playerCount: 10, leaders: [Array] }
  ],
  WALLS: [
    Leaderboard { name: 'Overall', title: 'Kills', playerCount: 10, leaders: [Array] },
    Leaderboard { name: 'Monthly', title: 'Kills', playerCount: 10, leaders: [Array] },
    Leaderboard { name: 'Weekly', title: 'Kills', playerCount: 10, leaders: [Array] }
  ],
  PROTOTYPE: [],
  PAINTBALL: [
    Leaderboard { name: 'Overall', title: 'Kills', playerCount: 10, leaders: [Array] },
    Leaderboard { name: 'Monthly', title: 'Kills', playerCount: 10, leaders: [Array] },
    Leaderboard { name: 'Weekly', title: 'Kills', playerCount: 10, leaders: [Array] }
  ],
  SKYWARS: [
    Leaderboard { name: 'Overall', title: 'Rating', playerCount: 14, leaders: [] },
    Leaderboard { name: 'Overall', title: 'Wins', playerCount: 14, leaders: [Array] },
    Leaderboard { name: 'Overall', title: 'Kills', playerCount: 14, leaders: [Array] },
    Leaderboard { name: 'Monthly', title: 'Kills', playerCount: 14, leaders: [Array] },
    Leaderboard { name: 'Weekly', title: 'Kills', playerCount: 14, leaders: [Array] }
  ],
  MURDER_MYSTERY: [
    Leaderboard { name: 'Overall', title: 'Wins', playerCount: 14, leaders: [Array] },
    Leaderboard { name: 'Weekly', title: 'Wins', playerCount: 14, leaders: [Array] },
    Leaderboard { name: 'Overall', title: 'Kills', playerCount: 14, leaders: [Array] },
    Leaderboard { name: 'Weekly', title: 'Kills', playerCount: 14, leaders: [Array] },
    Leaderboard { name: 'Overall', title: 'Kills as Murderer', playerCount: 14, leaders: [Array] },
    Leaderboard { name: 'Weekly', title: 'Kills as Murderer', playerCount: 14, leaders: [Array] }
  ],
  SMASH_HEROES: [
    Leaderboard { name: 'Overall', title: 'Smash Level', playerCount: 14, leaders: [Array] },
    Leaderboard { name: 'Overall', title: 'Kills', playerCount: 14, leaders: [Array] },
    Leaderboard { name: 'Monthly', title: 'Kills', playerCount: 14, leaders: [Array] },
    Leaderboard { name: 'Weekly', title: 'Kills', playerCount: 14, leaders: [Array] }
  ],
  DUELS: [
    Leaderboard { name: 'Weekly', title: 'Wins', playerCount: 10, leaders: [Array] },
    Leaderboard { name: 'Monthly', title: 'Wins', playerCount: 10, leaders: [Array] }
  ],
  SPEED_UHC: [
    Leaderboard { name: 'Total', title: 'Salt', playerCount: 16, leaders: [Array] },
    Leaderboard { name: 'Normal', title: 'Kills', playerCount: 16, leaders: [Array] },
    Leaderboard { name: 'Normal', title: 'Wins', playerCount: 16, leaders: [Array] },
    Leaderboard { name: 'Insane', title: 'Kills', playerCount: 16, leaders: [Array] },
    Leaderboard { name: 'Insane', title: 'Wins', playerCount: 16, leaders: [Array] }
  ],
  TNTGAMES: [
    Leaderboard { name: 'Overall', title: 'TNT Run Wins', playerCount: 10, leaders: [Array] },
    Leaderboard { name: 'Overall', title: 'PVP Run Wins', playerCount: 10, leaders: [Array] },
    Leaderboard { name: 'Overall', title: 'Wizards Wins', playerCount: 10, leaders: [Array] },
    Leaderboard { name: 'Overall', title: 'TNT Tag Wins', playerCount: 10, leaders: [Array] },
    Leaderboard { name: 'Overall', title: 'Spleef Wins', playerCount: 10, leaders: [Array] }
  ],
  BEDWARS: [
    Leaderboard { name: 'Current', title: 'Level', playerCount: 14, leaders: [Array] },
    Leaderboard { name: 'Overall', title: 'Wins', playerCount: 14, leaders: [Array] },
    Leaderboard { name: 'Weekly', title: 'Wins', playerCount: 14, leaders: [Array] },
    Leaderboard { name: 'Overall', title: 'Final Kills', playerCount: 14, leaders: [Array] },
    Leaderboard { name: 'Weekly', title: 'Final Kills', playerCount: 14, leaders: [Array] }
  ],
  TURBO_KART_RACERS: [
    Leaderboard { name: 'Overall', title: 'Gold Trophies', playerCount: 10, leaders: [Array] },
    Leaderboard { name: 'Monthly', title: 'Gold Trophies', playerCount: 10, leaders: [Array] },
    Leaderboard { name: 'Weekly', title: 'Gold Trophies', playerCount: 10, leaders: [Array] },
    Leaderboard { name: 'Overall', title: 'Laps Completed', playerCount: 10, leaders: [Array] },
    Leaderboard { name: 'Grand Prix', title: 'Points', playerCount: 10, leaders: [Array] }
  ],
  BUILD_BATTLE: [
    Leaderboard { name: 'Lifetime', title: 'Score', playerCount: 14, leaders: [Array] },
    Leaderboard { name: 'Lifetime', title: 'Coins', playerCount: 14, leaders: [Array] },
    Leaderboard { name: 'Lifetime', title: 'Wins', playerCount: 14, leaders: [Array] }
  ],
  ARCADE: [
    Leaderboard { name: 'Current', title: 'Coins', playerCount: 10, leaders: [Array] },
    Leaderboard { name: 'Weekly', title: 'Coins', playerCount: 10, leaders: [Array] },
    Leaderboard { name: 'Monthly', title: 'Coins', playerCount: 10, leaders: [Array] }
  ],
  SKYCLASH: [
    Leaderboard { name: 'Total', title: 'Kills', playerCount: 14, leaders: [Array] },
    Leaderboard { name: 'Solo', title: 'Wins', playerCount: 14, leaders: [Array] },
    Leaderboard { name: 'Doubles', title: 'Wins', playerCount: 14, leaders: [Array] },
    Leaderboard { name: 'TeamWar', title: 'Wins', playerCount: 14, leaders: [Array] },
    Leaderboard { name: 'Monthly', title: 'Kills', playerCount: 14, leaders: [] }
  ],
  QUAKECRAFT: [
    Leaderboard { name: 'Overall', title: 'Kills', playerCount: 10, leaders: [Array] },
    Leaderboard { name: 'Monthly', title: 'Kills', playerCount: 10, leaders: [] },
    Leaderboard { name: 'Weekly', title: 'Kills', playerCount: 10, leaders: [] }
  ],
  CRAZY_WALLS: [
    Leaderboard { name: 'Overall', title: 'Wins', playerCount: 10, leaders: [Array] },
    Leaderboard { name: 'Overall', title: 'Kills', playerCount: 10, leaders: [Array] },
    Leaderboard { name: 'Monthly', title: 'Kills', playerCount: 10, leaders: [Array] },
    Leaderboard { name: 'Weekly', title: 'Kills', playerCount: 10, leaders: [Array] }
  ],
  MEGA_WALLS: [
    Leaderboard { name: 'Overall', title: 'Final Kills', playerCount: 10, leaders: [Array] },
    Leaderboard { name: 'Monthly', title: 'Final Kills', playerCount: 10, leaders: [Array] },
    Leaderboard { name: 'Weekly', title: 'Final Kills', playerCount: 10, leaders: [Array] }
  ],
  VAMPIREZ: [
    Leaderboard { name: 'Overall', title: 'Human Wins', playerCount: 10, leaders: [Array] },
    Leaderboard { name: 'Monthly', title: 'Human Wins', playerCount: 10, leaders: [Array] },
    Leaderboard { name: 'Weekly', title: 'Human Wins', playerCount: 10, leaders: [Array] }
  ]
}
```

## Links

- [getLeaderboards](https://hypixel-api-reborn.github.io/#/docs/main/master/class/Client?scrollTo=getLeaderboards)
- [Leaderboard](https://hypixel-api-reborn.github.io/#/docs/main/master/class/Leaderboard)
