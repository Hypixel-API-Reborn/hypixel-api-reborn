# getPlayer
Allows you to get statistics of watchdog, the server anticheat.
## Arguments
- [Method options](https://hypixel.stavzdev.xyz/#/docs/main/master/typedef/MethodOptions) (optional)

## Example usage
```js
const Hypixel = require('hypixel-api-reborn');
const hypixel = new Hypixel.Client('API-KEY');
// https://stavzdev.is-inside.me/cCMiZdoy.gif

hypixel.getWatchdogStats().then(watchdog => {
  console.log(watchdog);
}).catch(e => {
  console.error(e);
});

// async/await
const watchdog = await hypixel.getWatchdogStats().catch(e => console.error(e));
console.log(watchdog); 
```
## Example response
```js
WatchdogStats {
  byWatchdogTotal: 6122345,
  byWatchdogLastMinute: 7,
  byWatchdogRollingDay: 6374,
  byStaffTotal: 2143182,
  byStaffRollingDay: 2248
}
```
## Links
- [getWatchdogStats](https://hypixel.stavzdev.xyz/#/docs/main/master/class/Client?scrollTo=getWatchdogStats)
- [WatchdogStats](https://hypixel.stavzdev.xyz/#/docs/main/master/class/WatchdogStats)