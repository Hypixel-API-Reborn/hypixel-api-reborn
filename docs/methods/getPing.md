# getPlayer
Pings the minecraft server of hypixel (by default).
## Arguments
- Valid IP/Hostname address

## Example usage
```js
const Hypixel = require('hypixel-api-reborn');
const hypixel = new Hypixel.Client('API-KEY');
// https://stavzdev.is-inside.me/cCMiZdoy.gif

// No API key required
hypixel.getPing().then(ping => {
  console.log(ping);
}).catch(e => {
  console.error(e);
});

// async/await
const ping = await hypixel.getPing().catch(e => console.error(e));
console.log(ping);
```
## Example response
```js
198
```
## Links
- [getPing](https://hypixel.stavzdev.xyz/#/docs/main/master/class/Client?scrollTo=getPing)
- [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)