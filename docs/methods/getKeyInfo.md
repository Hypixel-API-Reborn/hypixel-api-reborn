# getKeyInfo
Gets Key information.
## Arguments
- [Method options](https://hypixel-api-reborn.github.io/#/docs/main/master/typedef/MethodOptions) (optional)

## Example usage
```js
const Hypixel = require('hypixel-api-reborn');
const hypixel = new Hypixel.Client('API-KEY');
// https://stavzdev.is-inside.me/cCMiZdoy.gif

hypixel.getKeyInfo().then(keyinfo => {
  console.log(keyinfo);
}).catch(e => {
  console.error(e);
});

// async/await
const keyinfo = await hypixel.getKeyInfo().catch(e => console.error(e));
console.log(keyinfo);
```
## Example response
```js
KeyInfo {
  key: 'API-KEY',
  owner: '52d9a36f-66ce-4cdf-9a56-ad9724ae9fb4',
  limitPerMinute: 120,
  requestsInPastMin: 0,
  totalRequests: 21664,
  resetsAfter: 18
}
```
## Links
- [getKeyInfo](https://hypixel-api-reborn.github.io/#/docs/main/master/class/Client?scrollTo=getKeyInfo)
- [KeyInfo](https://hypixel-api-reborn.github.io/#/docs/main/master/class/KeyInfo)