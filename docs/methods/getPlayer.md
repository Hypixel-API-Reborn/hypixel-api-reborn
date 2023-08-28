# getPlayer
Allows you to get statistics of player.
## Arguments
- Player nickname or UUID
- [Method options](https://hypixel-api-reborn.github.io/#/docs/main/master/typedef/PlayerMethodOptions) (optional)

## Example usage
```js
const Hypixel = require('hypixel-api-reborn');
const hypixel = new Hypixel.Client('API-KEY');
// https://stavzdev.is-inside.me/cCMiZdoy.gif

hypixel.getPlayer('StavZDev').then(player => {
  console.log(player);
}).catch(e => {
  console.error(e);
});

// async/await
const player = await hypixel.getPlayer('StavZDev').catch(e => console.error(e));
console.log(player); // if player doesn't exist will return null 

// include player's guild in Player
hypixel.getPlayer('StavZDev', { guild: true }).then(player => {
  console.log(player);
}).catch(e => {
  console.error(e);
});
```
## Example response
```js
Player {
  nickname: 'StavZDev',
  uuid: '52d9a36f66ce4cdf9a56ad9724ae9fb4',
  history: [
    'StavZ',
    'GravitonSurge',
    'StavZDev'
  ],
  rank: 'MVP+',
  mcVersion: '1.8.9',
  channel: 'PARTY',
  firstLoginTimestamp: 1505345803214,
  firstLogin: 2017-09-13T23:36:43.214Z,
  lastLoginTimestamp: 1609782932833,
  lastLogin: 2021-01-04T17:55:32.833Z,
  lastLogoutTimestamp: 1609783056053,
  lastLogout: 2021-01-04T17:57:36.053Z,
  recentlyPlayedGame: Game { game: 'BEDWARS' },
  plusColor: Color { color: 'DARK_GREEN' },
  guild: null,
  karma: 4747751,
  achievements: {
    skywarsKillsTeam: 3853,
    skywarsCages: 26,
    skywarsWinsTeam: 403,
    skywarsWinsMega: 5,
    skywarsKitsSolo: 23,
    skywarsKitsTeam: 25,
    skywarsWinsSolo: 2767,
    skywarsKillsSolo: 19580,
    skywarsKillsMega: 83,
    skywarsKitsMega: 10,
    generalChallenger: 2838,
    generalQuestMaster: 2183,
    generalWins: 6602,
    ...
  },
  achievementPoints: 4155,
  totalExperience: 25842562,
  level: 141.33,
  socialMedia: [
    { name: 'Twitter', link: 'https://twitter.com/StavZDev', id: 'TWITTER' },
    { name: 'YouTube', link: 'https://www.youtube.com/channel/UCQcOYjpXiDEWpb34eBtObtQ', id: 'YOUTUBE' },
    { name: 'Discord', link: 'StavZDev#6469', id: 'DISCORD' },
    { name: 'Hypixel', link: 'https://hypixel.net/members/imstavz.1246904/', id: 'HYPIXEL' }
  ],
  giftsSent: 25,
  giftsReceived: 6,
  isOnline: false,
  lastDailyReward: 2021-01-03T18:37:11.800Z,
  lastDailyRewardTimestamp: 1609699031800,
  getRecentGames: [Function (anonymous)],
  stats: {
    skywars: SkyWars,
    bedwars: BedWars,
    uhc: UHC,
    speeduhc: SpeedUHC,
    murdermystery: MurderMystery,
    duels: Duels,
    buildbattle: BuildBattle,
    megawalls: MegaWalls,
    copsandcrims: CopsAndCrims,
    tntgames: TNTGames,
    smashheroes: SmashHeroes,
    vampirez: VampireZ,
    blitzsg: BlitzSurvivalGames,
    arena: ArenaBrawl
  }
}
```
## Links
- [getPlayer](https://hypixel-api-reborn.github.io/#/docs/main/master/class/Client?scrollTo=getPlayer)
- [Player](https://hypixel-api-reborn.github.io/#/docs/main/master/class/Player)
- [SkyWars](https://hypixel-api-reborn.github.io/#/docs/main/master/class/SkyWars)
- [BedWars](https://hypixel-api-reborn.github.io/#/docs/main/master/class/BedWars)
- [UHC](https://hypixel-api-reborn.github.io/#/docs/main/master/class/UHC)
- [Speed UHC](https://hypixel-api-reborn.github.io/#/docs/main/master/class/SpeedUHC)
- [Murder Mystery](https://hypixel-api-reborn.github.io/#/docs/main/master/class/MurderMystery)
- [Duels](https://hypixel-api-reborn.github.io/#/docs/main/master/class/Duels)
- [BuildBattle](https://hypixel-api-reborn.github.io/#/docs/main/master/class/BuildBattle)
- [MegaWalls](https://hypixel-api-reborn.github.io/#/docs/main/master/class/MegaWalls)
- [Cops And Crims](https://hypixel-api-reborn.github.io/#/docs/main/master/class/CopsAndCrims)
- [The TNT Games](https://hypixel-api-reborn.github.io/#/docs/main/master/class/TNTGames)
- [Smash Heroes](https://hypixel-api-reborn.github.io/#/docs/main/master/class/ShashHeroes)
- [VampireZ](https://hypixel-api-reborn.github.io/#/docs/main/master/class/VampireZ)
- [Blitz Survival Games](https://hypixel-api-reborn.github.io/#/docs/main/master/class/BlitzSurvivalGames)
- [Arena Brawl](https://hypixel-api-reborn.github.io/#/docs/main/master/class/ArenaBrawl)