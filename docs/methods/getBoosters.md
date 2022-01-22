# getBoosters
Allows you to get all active boosters.
## Arguments
- [Method options](https://hypixel.stavzdev.me/#/docs/main/master/typedef/MethodOptions) (optional)

## Example usage
```js
const Hypixel = require('hypixel-api-reborn');
const hypixel = new Hypixel.Client('API-KEY');
// https://stavzdev.is-inside.me/cCMiZdoy.gif

hypixel.getBoosters().then(boosters => {
  console.log(boosters);
}).catch(e => {
  console.error(e);
});

// async/await
const boosters = await hypixel.getBoosters().catch(e => console.error(e));
console.log(boosters); 
```
## Example response
```js
[
  Booster {
    purchaser: '978ddb705a8e43618e41749178c020b0',
    amount: 2,
    originalLength: 3600,
    remaining: 3595,
    activatedTimestamp: 1545244519133,
    activated: 2018-12-19T18:35:19.133Z,
    game: Game { game: 24, id: 24, code: 'SUPER_SMASH' }
  },
  Booster {
    purchaser: 'dfe1bb0a4220421486506ba487cdb530',
    amount: 3,
    originalLength: 3600,
    remaining: 3600,
    activatedTimestamp: 1586351429371,
    activated: 2020-04-08T13:10:29.371Z,
    game: Game { game: 23, id: 23, code: 'BATTLEGROUND' }
  },
  Booster {
    purchaser: 'f456fe17ba9741f68d2938907b443313',
    amount: 2.7,
    originalLength: 3600,
    remaining: 1744,
    activatedTimestamp: 1609097441466,
    activated: 2020-12-27T19:30:41.466Z,
    game: Game { game: 51, id: 51, code: 'SKYWARS' }
  },
  ...
]
```
## Links
- [getBoosters](https://hypixel.stavzdev.me/#/docs/main/master/class/Client?scrollTo=getBoosters)
- [Booster](https://hypixel.stavzdev.me/#/docs/main/master/class/Booster)