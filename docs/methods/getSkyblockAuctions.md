# getSkyblockAuctions
Allows you to get skyblock auctions
## Arguments
- "*", a page number, or an array with the start and the end page number (automatically sorted)
- [Method options](https://hypixel.stavzdev.me/#/docs/main/master/typedef/auctionsOptions) (optional)

## Example usage
```js
const Hypixel = require('hypixel-api-reborn');
const hypixel = new Hypixel.Client('API-KEY');
// https://stavzdev.is-inside.me/cCMiZdoy.gif

hypixel.getSkyblockAuctions(1).then(data => {
  console.log(data);
}).catch(e => {
  console.error(e);
});

// async/await
const data = await hypixel.getSkyblockAuctions(1).catch(e => console.error(e));
console.log(data);
```
## Example response
```js
{
  auctions: [
    Auction {
      auctionId: '739762c5556848008bd719df6b027bd8',
      auctioneerUuid: 'b62f419ed8dd40bbaf0d2e8c075a0e1a',
      auctioneerProfile: 'b62f419ed8dd40bbaf0d2e8c075a0e1a',
      bin: true,
      itemBytes: null,
      coop: [Array],
      auctionStartTimestamp: 1635954533152,
      auctionStart: 2021-11-03T15:48:53.152Z,
      auctionEnd: 2021-11-03T21:48:53.152Z,
      auctionEndTimestamp: 1635976133152,
      item: 'Gemstone Mixture',
      itemLore: 'A collection of finely treated\n' +
        'Gemstones held together by\n' +
        'the sturdiest of sticky\n' +
        'substances.\n' +
        '\n' +
        'RARE',
      itemLoreRaw: '§7§7A collection of finely treated\n' +
        '§7§dGemstones §7held together by\n' +
        '§7the sturdiest of §asticky\n' +
        '§a§7substances.\n' +
        '\n' +
        '§9§lRARE',
      rarity: 'RARE',
      startingBid: 1200000,
      highestBid: 1200000,
      bids: [],
      claimed: false,
      claimedBidders: []
    },
    Auction {
      auctionId: '5b27b677b59b4059b9502aa958b9b3a5',
      auctioneerUuid: 'dea9145c3b384f57a23299fa5b7d8ff9',
      auctioneerProfile: '06c2bf868f154bf0b6446fc7f099b5c9',
      bin: true,
      itemBytes: null,
      coop: [Array],
      auctionStartTimestamp: 1635915150654,
      auctionStart: 2021-11-03T04:52:30.654Z,
      auctionEnd: 2021-11-17T04:52:30.654Z,
      auctionEndTimestamp: 1637124750654,
      item: 'Rock Gemstone',
      itemLore: 'Reforge Stone\n' +
        '\n' +
        'Can be used in a Reforge Anvil\n' +
        'or with the Dungeon Blacksmith\n' +
        'to apply the Auspicious\n' +
        'reforge to a pickaxe.\n' +
        '\n' +
        'oThe lowest gemstone in the\n' +
        'ofood chain.\n' +
        '\n' +
        'Auspicious (Legendary):\n' +
        'Mining Speed: +45\n' +
        '\n' +
        'Requires Mining Skill Level\n' +
        'XXI!\n' +
        '\n' +
        'RARE REFORGE STONE',
      itemLoreRaw: '§8Reforge Stone\n' +
        '\n' +
        '§7Can be used in a Reforge Anvil\n' +
        '§7or with the Dungeon Blacksmith\n' +
        '§7to apply the §9Auspicious\n' +
        '§9§7reforge to a pickaxe.\n' +
        '\n' +
        '§7§8§oThe lowest gemstone in the\n' +
        '§8§ofood chain.\n' +
        '\n' +
        '§9Auspicious §7(§6Legendary§7):\n' +
        '§7Mining Speed: §a+45\n' +
        '\n' +
        '§7Requires §aMining Skill Level\n' +
        '§aXXI§7!\n' +
        '\n' +
        '§9§lRARE REFORGE STONE',
      rarity: 'RARE',
      startingBid: 1800000,
      highestBid: 1800000,
      bids: [],
      claimed: false,
      claimedBidders: []
    }
    ... 900 more items
  ],
  info: AuctionInfo {
    page: 1,
    totalPages: 59,
    totalAuctions: 58497,
    lastUpdatedTimestamp: 1635957623258,
    lastUpdatedAt: 2021-11-03T16:40:23.258Z,
    age: 11,
    failedPages: []
  }
}
```
## Links
- [getSkyblockAuctions](https://hypixel.stavzdev.me/#/docs/main/master/class/Client?scrollTo=getSkyblockAuctions)
- [AuctionInfo](https://hypixel.stavzdev.me/#/docs/main/master/class/AuctionInfo)
- [Auction](https://hypixel.stavzdev.me/#/docs/main/master/class/Auction)
- [Bid](https://hypixel.stavzdev.me/#/docs/main/master/class/Bid)