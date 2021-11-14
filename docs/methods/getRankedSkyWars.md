# getRankedSkyWars
Allows you to get Ranked SkyWars data for current season of a player
## Arguments
- Player nickname or UUID
- [Method options](https://hypixel.stavzdev.xyz/#/docs/main/master/typedef/MethodOptions) (optional)

## Example usage
```js
const Hypixel = require('hypixel-api-reborn');
const hypixel = new Hypixel.Client('API-KEY');
// https://stavzdev.is-inside.me/cCMiZdoy.gif

hypixel.getRankedSkyWars('S0MWY').then(data => {
  console.log(data);
}).catch(e => {
  console.error(e);
  // if data not found or player doesn't exist will throw an error
});

// async/await
const data = await hypixel.getRankedSkyWars('S0MWY').catch(e => console.error(e));
console.log(data);
```
## Example response
```js
SkyWarsRanked {
  seasonKey: '11_21',
  position: 3,
  rating: 1889,
  date: 2021-11-01T05:00:00.000Z
}
```
## Links
- [SkyWarsRanked](https://hypixel.stavzdev.me/#/docs/main/master/class/SkyWarsRanked)