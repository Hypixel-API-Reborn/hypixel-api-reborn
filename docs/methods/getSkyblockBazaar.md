# getSkyblockBazaar
Allows you to get list of products
## Arguments
- [Method options](https://hypixel.stavzdev.me/#/docs/main/master/typedef/MethodOptions) (optional)

## Example usage
```js
const Hypixel = require('hypixel-api-reborn');
const hypixel = new Hypixel.Client('API-KEY');
// https://stavzdev.is-inside.me/cCMiZdoy.gif

hypixel.getSkyblockBazaar().then(products => {
  console.log(products);
}).catch(e => {
  console.error(e);
});

// async/await
const products = await hypixel.getSkyblockMember().catch(e => console.error(e));
console.log(products);
```
## Example response
```js
[
  Product {
    productId: 'INK_SACK:3',
    sellSummary: [ [Order], [Order], [Order], [Order], [Order], [Order] ],
    buySummary: [
      [Order], [Order], [Order], [Order],
      [Order], [Order], [Order], [Order],
      [Order], [Order], [Order], [Order],
      [Order], [Order], [Order], [Order],
      [Order], [Order], [Order], [Order],
      [Order], [Order], [Order], [Order],
      [Order], [Order], [Order], [Order],
      [Order], [Order]
    ],
    status: {
      sellPrice: 2,
      buyPrice: 3,
      sellVolume: 2340181,
      buyVolume: 2555183,
      sellMovingWeek: 27628511,
      buyMovingWeek: 7376853,
      sellOrders: 34,
      buyOrders: 337
    }
  }
  ... 204 more items
]
```
## Links
- [getSkyblockBazaar](https://hypixel.stavzdev.me/#/docs/main/master/class/Client?scrollTo=getSkyblockBazaar)
- [Product](https://hypixel.stavzdev.me/#/docs/main/master/class/Product)
- [Order](https://hypixel.stavzdev.me/#/docs/main/master/class/Order)