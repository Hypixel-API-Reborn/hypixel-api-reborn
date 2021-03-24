# getFriends
Allows you get player's list of friends.
## Arguments
- Player nickname or UUID
- [Method options](https://hypixel.stavzdev.xyz/#/docs/main/master/typedef/MethodOptions) (optional)

## Example usage
```js
const Hypixel = require('hypixel-api-reborn');
const hypixel = new Hypixel.Client('API-KEY');
// https://stavzdev.is-inside.me/cCMiZdoy.gif

hypixel.getFriends('StavZDev').then(friends => {
  console.log(friends);
}).catch(e => {
  console.error(e);
});

// async/await
const friends = await hypixel.getFriends('StavZDev').catch(e => console.error(e));
console.log(friends); // if player doesn't exist will return null 
```
## Example response
```js
[
  Friend {
    sender: '52d9a36f66ce4cdf9a56ad9724ae9fb4',
    receiver: '1f5b04ce01d743b8a385019be12612ff',
    friendSinceTimestamp: 1528363745834,
    friendSince: 2018-06-07T09:29:05.834Z
  },
  Friend {
    sender: '52d9a36f66ce4cdf9a56ad9724ae9fb4',
    receiver: 'a36032c818844fadb5ffce49d363323f',
    friendSinceTimestamp: 1545905804709,
    friendSince: 2018-12-27T10:16:44.709Z
  },
  Friend {
    sender: '5c04726420ed4d328cb81feea9162dca',
    receiver: '52d9a36f66ce4cdf9a56ad9724ae9fb4',
    friendSinceTimestamp: 1513356605946,
    friendSince: 2017-12-15T16:50:05.946Z
  },
  Friend {
    sender: 'b051defe261b45e6b745602a32fd6903',
    receiver: '52d9a36f66ce4cdf9a56ad9724ae9fb4',
    friendSinceTimestamp: 1521611271670,
    friendSince: 2018-03-21T05:47:51.670Z
  },
  ...
]
```
## Links
- [getFriends](https://hypixel.stavzdev.xyz/#/docs/main/master/class/Client?scrollTo=getFriends)
- [Friend](https://hypixel.stavzdev.xyz/#/docs/main/master/class/Friend)