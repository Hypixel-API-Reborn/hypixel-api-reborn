# getSkyblockAuctions
Allows you to get player's skyblock auctions
## Arguments
- Player nickname or UUID
- Boolean - include item bytes (`false` by default)
- [Method options](https://hypixel.stavzdev.me/#/docs/main/master/typedef/MethodOptions) (optional)

## Example usage
```js
const Hypixel = require('hypixel-api-reborn');
const hypixel = new Hypixel.Client('API-KEY');
// https://stavzdev.is-inside.me/cCMiZdoy.gif

hypixel.getSkyblockAuctionsByPlayer('StavZDev').then(data => {
  console.log(data);
}).catch(e => {
  console.error(e);
});

// async/await
const data = await hypixel.getSkyblockAuctionsByPlayer('StavZDev').catch(e => console.error(e));
console.log(data);
```
## Example response
```js
[
  Auction {
    auctionId: 'f213f4499d3341959d1fe5a7f78dc14d',
    auctioneerUuid: '28667672039044989b0019b14a2c34d6',
    auctioneerProfile: 'd3df3cccffd3473fbbba311d5329bd25',
    bin: false,
    itemBytes: null,
    coop: [
      '4ce231a79af8473faf1dab7ecf4de2ad',
      '28667672039044989b0019b14a2c34d6',
      '0e3713522c0f4b63a20e2474724ae761',
      'ed32a0660fc948378dcf8ed717d1188c'
    ],
    auctionStartTimestamp: 1565028554338,
    auctionStart: 2019-08-05T18:09:14.338Z,
    auctionEnd: 2019-08-06T06:09:14.338Z,
    auctionEndTimestamp: 1565071754338,
    item: 'Protector Dragon Fragment',
    itemLore: 'Right-click to view recipes!\n\nEPIC',
    itemLoreRaw: '§eRight-click to view recipes!\n\n§5§lEPIC',
    rarity: 'EPIC',
    startingBid: 800,
    highestBid: 80000,
    bids: [ [Bid], [Bid], [Bid], [Bid], [Bid] ],
    claimed: true,
    claimedBidders: [
      '9e93a11bdced49279afb87e1bd205098',
      'd500749d2666436b814b8e34717a3b51',
      '8ce05c84824b404faa0397614be6cac5',
      '56b9c409d8cf4fdda08a131dd6b37579'
    ]
  },
  Auction {
    auctionId: '9b714581da774c729ea95ee0dc38a089',
    auctioneerUuid: '28667672039044989b0019b14a2c34d6',
    auctioneerProfile: 'd3df3cccffd3473fbbba311d5329bd25',
    bin: false,
    itemBytes: null,
    coop: [
      'd8a5686cae794419aafc72a93afb7b26',
      '4ce231a79af8473faf1dab7ecf4de2ad',
      '40884fdda30c4c26ba00abef570469e0',
      '28667672039044989b0019b14a2c34d6',
      '32eda389f6d1446f8c26b30fe1384550'
    ],
    auctionStartTimestamp: 1570978114450,
    auctionStart: 2019-10-13T14:48:34.450Z,
    auctionEnd: 2019-10-13T14:53:34.450Z,
    auctionEndTimestamp: 1570978414450,
    item: 'Rotten Flesh',
    itemLore: 'COMMON',
    itemLoreRaw: '§f§lCOMMON',
    rarity: 'COMMON',
    startingBid: 2,
    highestBid: 532647,
    bids: [ [Bid] ],
    claimed: true,
    claimedBidders: []
  }
  ... 153 more items
]
```
## Links
- [getSkyblockAuctionsByPlayer](https://hypixel.stavzdev.me/#/docs/main/master/class/Client?scrollTo=getSkyblockAuctionsByPlayer)
- [Auction](https://hypixel.stavzdev.me/#/docs/main/master/class/Auction)
- [Bid](https://hypixel.stavzdev.me/#/docs/main/master/class/Bid)