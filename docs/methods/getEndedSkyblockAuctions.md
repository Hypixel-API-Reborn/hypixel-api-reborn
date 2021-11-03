# getEndedSkyblockAuctions
Allows you to get all ended auctions in around the last 60 seconds
## Arguments
- Boolean - include item bytes (`false` by default)
- [Method options](https://hypixel.stavzdev.me/#/docs/main/master/typedef/MethodOptions) (optional)

## Example usage
```js
const Hypixel = require('hypixel-api-reborn');
const hypixel = new Hypixel.Client('API-KEY');
// https://stavzdev.is-inside.me/cCMiZdoy.gif

hypixel.getEndedSkyblockAuctions().then(data => {
  console.log(data);
}).catch(e => {
  console.error(e);
});

// async/await
const data = await hypixel.getEndedSkyblockAuctions().catch(e => console.error(e));
console.log(data);
```
## Example response
```js
{
  info: AuctionInfo {
    page: 0,
    totalPages: 1,
    totalAuctions: 409,
    lastUpdatedTimestamp: 1635958343258,
    lastUpdatedAt: 2021-11-03T16:52:23.258Z,
    age: 0
  },
  auctions: [
    PartialAuction {
      auctionId: '0c296cb0369249339b9e7e0dab224091',
      auctioneerUuid: '5ec150a8026e4c299fbf9619f9bf10c9',
      auctioneerProfile: '83c5c5f87aca47f5a5c079ca9bfe2828',
      bin: true,
      itemBytes: null,
      buyer: '91a5a476b2d94632bf542d71c56b4cd3',
      price: 60000
    },
    PartialAuction {
      auctionId: '3ac36e5ed54e487d9a876b3be58bed2f',
      auctioneerUuid: '3e4cbd18866140da88d5ffed25f34d1e',
      auctioneerProfile: '3e4cbd18866140da88d5ffed25f34d1e',
      bin: true,
      itemBytes: null,
      buyer: '840f212f11c640088ea2ce375b70b6a2',
      price: 2690000
    },
    ... 309 more items
  ]
}
```
## Links
- [getEndedSkyblockAuctions](https://hypixel.stavzdev.me/#/docs/main/master/class/Client?scrollTo=getEndedSkyblockAuctions)
- [AuctionInfo](https://hypixel.stavzdev.me/#/docs/main/master/class/AuctionInfo)
- [Partial](https://hypixel.stavzdev.me/#/docs/main/master/class/PartialAuction)