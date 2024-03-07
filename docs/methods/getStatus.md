# getStatus

Allows you to get the status of a player.

## Arguments

- Player nickname or UUID
- [Method options](https://hypixel-api-reborn.github.io/#/docs/main/master/typedef/MethodOptions) (optional)

## Example usage

```js
const Hypixel = require('hypixel-api-reborn');
const hypixel = new Hypixel.Client('API-KEY');

hypixel
  .getStatus('StavZDev')
  .then((status) => {
    console.log(status);
  })
  .catch((e) => {
    console.error(e);
  });

// async/await
const status = await hypixel.getStatus('StavZDev').catch((e) => console.error(e));
console.log(status); // if player doesn't exist will return null
```

## Example response

```js
Status {
  online: true,
  game: Game { game: 'SKYWARS', id: 51, code: 'SKYWARS' },
  mode: 'LOBBY',
  map: null
}
```

## Links

- [getStatus](https://hypixel-api-reborn.github.io/#/docs/main/master/class/Client?scrollTo=getStatus)
- [Status](https://hypixel-api-reborn.github.io/#/docs/main/master/class/Status)
- [Game](https://hypixel-api-reborn.github.io/#/docs/main/master/class/Game)
