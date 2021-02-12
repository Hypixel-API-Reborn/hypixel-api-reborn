# getPlayer
Allows you to get current player count.
## Arguments
- [Method options](https://hypixel.stavzdev.xyz/#/docs/main/master/typedef/MethodOptions) (optional)

## Example usage
```js
const Hypixel = require('hypixel-api-reborn');
const hypixel = new Hypixel.Client('API-KEY');
// https://stavzdev.is-inside.me/cCMiZdoy.gif

hypixel.getOnline().then(online => {
  console.log(online);
}).catch(e => {
  console.error(e);
});

// async/await
const online = await hypixel.getOnline().catch(e => console.error(e));
console.log(online);
```
## Example response
```js
111102
```
## Links
- [getOnline](https://hypixel.stavzdev.xyz/#/docs/main/master/class/Client?scrollTo=getOnline)
- [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)