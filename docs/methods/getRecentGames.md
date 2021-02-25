# getPlayer
Allows you to get recent games of a player.
## Arguments
- Player nickname or UUID
- [Method options](https://hypixel.stavzdev.xyz/#/docs/main/master/typedef/MethodOptions) (optional)

## Example usage
```js
const Hypixel = require('hypixel-api-reborn');
const hypixel = new Hypixel.Client('API-KEY');
// https://stavzdev.is-inside.me/cCMiZdoy.gif

hypixel.getRecentGames('StavZDev').then(recentGames => {
  console.log(recentGames);
}).catch(e => {
  console.error(e);
});

// async/await
const recentGames = await hypixel.getRecentGames('StavZDev').catch(e => console.error(e));
console.log(recentGames); // if player doesn't exist will return null.
```
## Example response
```js
[
  RecentGame {
    game: 'SKYWARS',
    startedAt: 2021-01-31T04:37:53.760Z,
    startTimestamp: 1612067873760,
    endedAt: null,
    endedTimestamp: null
    mode: 'solo_insane',
    map: 'Aquarius',
    ongoing: true,
  }
]
```
## Links
- [getRecentGames](https://hypixel.stavzdev.xyz/#/docs/main/master/class/Client?scrollTo=getRecentGames)
- [RecentGame](https://hypixel.stavzdev.xyz/#/docs/main/master/class/RecentGame)