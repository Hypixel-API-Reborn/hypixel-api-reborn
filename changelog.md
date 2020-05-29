# Changelog for [hypixel-api-reborn](https://npmjs.com/package/hypixel-api-reborn) v2.0.0

### NEW:
- Compact mode is enabled by default and cannot be disabled
- Skyblock Auctions support
- Skyblock Bazaar support
- Full Intellisense Support
- Improved quality of code
- Fixed bugs which returns `NaN`, `undefined`

### What changed

#### Initialization
```diff
v1.2.2
- const Hypixel = require('hypixel-api-reborn');
- const hypixel = new Hypixel('API-KEY', true);

v2.0
+ const Hypixel = require('hypixel-api-reborn');
+ const hypixel = new Hypixel.Client('API-KEY');

+ const version = Hypixel.version;
```

#### [Player](./src/structures/Player.js)
```diff
+ <Player>.mcVersion;
+ <Player>.recentlyPlayedGame;

- <Player>.isOnline();
+ <Player>.isOnline;

+ <Player>.stats.bedwars.finalDeaths;
+ <Player>.stats.bedwars.beds.lost;
+ <Player>.stats.bedwars.beds.broken;
+ <Player>.stats.bedwars.beds.BLRatio;
+ <Player>.stats.bedwars.avg.finalKills;
+ <Player>.stats.bedwars.avg.kills;
+ <Player>.stats.bedwars.avg.bedsBroken;
+ <Player>.stats.bedwars.finalKDRatio;
+ <Player>.stats.bedwars.solo.finalKDRatio;
+ <Player>.stats.bedwars.solo.WLRatio;
+ <Player>.stats.bedwars.solo.avg.kills;
+ <Player>.stats.bedwars.solo.avg.finalKills;
+ <Player>.stats.bedwars.solo.avg.bedsBroken;
+ <Player>.stats.bedwars.solo.beds.lost;
+ <Player>.stats.bedwars.solo.beds.broken;
+ <Player>.stats.bedwars.solo.beds.BLRatio;
+ <Player>.stats.bedwars.doubles.finalKDRatio;
+ <Player>.stats.bedwars.doubles.WLRatio;
+ <Player>.stats.bedwars.doubles.avg.kills;
+ <Player>.stats.bedwars.doubles.avg.finalKills;
+ <Player>.stats.bedwars.doubles.avg.bedsBroken;
+ <Player>.stats.bedwars.doubles.beds.lost;
+ <Player>.stats.bedwars.doubles.beds.broken;
+ <Player>.stats.bedwars.doubles.beds.BLRatio;
+ <Player>.stats.bedwars.three.finalKDRatio;
+ <Player>.stats.bedwars.three.WLRatio;
+ <Player>.stats.bedwars.three.avg.kills;
+ <Player>.stats.bedwars.three.avg.finalKills;
+ <Player>.stats.bedwars.three.avg.bedsBroken;
+ <Player>.stats.bedwars.three.beds.lost;
+ <Player>.stats.bedwars.three.beds.broken;
+ <Player>.stats.bedwars.three.beds.BLRatio;
+ <Player>.stats.bedwars.four.finalKDRatio;
+ <Player>.stats.bedwars.four.WLRatio;
+ <Player>.stats.bedwars.four.avg.kills;
+ <Player>.stats.bedwars.four.avg.finalKills;
+ <Player>.stats.bedwars.four.avg.bedsBroken;
+ <Player>.stats.bedwars.four.beds.lost;
+ <Player>.stats.bedwars.four.beds.broken;
+ <Player>.stats.bedwars.four.beds.BLRatio;
+ <Player>.stats.crazywalls.solo.normal.WLRatio;
+ <Player>.stats.crazywalls.solo.lucky.WLRatio;
+ <Player>.stats.crazywalls.team.normal.WLRatio;
+ <Player>.stats.crazywalls.team.lucky.WLRatio;
+ <Player>.stats.megawalls.KDRatio;
+ <Player>.stats.megawalls.WLRatio;
+ <Player>.stats.skywars.solo.total;
+ <Player>.stats.skywars.solo.normal;
+ <Player>.stats.skywars.solo.insane;
+ <Player>.stats.skywars.team.total;
+ <Player>.stats.skywars.team.normal;
+ <Player>.stats.skywars.team.insane;
+ <Player>.stats.skywars.ranked.KDRatio;
+ <Player>.stats.skywars.ranked.WLRatio;
+ <Player>.stats.skywars.mega.KDRatio;
+ <Player>.stats.skywars.mega.WLRatio;
+ <Player>.stats.skywars.lab.KDRatio;
+ <Player>.stats.skywars.lab.WLRatio;

```

#### [SkyblockProfile](./src/structures/SkyBlock/SkyblockProfile.js)
```diff
- <SkyblockProfile>.profile_id;
+ <SkyblockProfile>.profileId;

- <SkyblockProfile>.profile_name;
+ <SkyblockProfile>.profileName;
```

#### [SkyblockMember](./src/structures/SkyBlock/SkyblockMember.js)
```diff
- <SkyblockMember>.first_join;
+ <SkyblockMember>.firstJoin;

- <SkyblockMember>.last_save;
+ <SkyblockMember>.lastSave;
```

#### [SkyblockItem](./src/structures/SkyBlock/SkyblockItem.js)
```diff
- <SkyblockItem>.item_id;
+ <SkyblockItem>.itemId;

- <SkyblockItem>.anvil_uses;
+ <SkyblockItem>.anvilUses;
```

#### [SkyblockArmor](./src/structures/SkyBlock/SkyblockArmor.js)
```diff
- <SkyblockArmor>.item_id;
+ <SkyblockArmor>.itemId;

- <SkyblockArmor>.anvil_uses;
+ <SkyblockArmor>.anvilUses;
```

### Methods that changed
```diff
- getSkyblockStats(uuid): Promise<SkyblockProfile> 
+ getSkyblockProfiles(uuid): Promise<Array<SkyblockProfile>>
```

### What's new

#### getSkyblockAuctions()
```js
// Argument:
// Number / null
hypixel.getSkyblockAuctions().then((auctions) => {
    console.log(auctions);
    all auctions from all pages
    [
        Auction {
            auctionId: '319f8f9459724d7fad4899f6d48e35dd',
            auctioneerUuid: 'ec0e13e723e941a3822facc80f602c14',
            coop: [
                'ec0e13e723e941a3822facc80f602c14',
                'ac240c4fdbbd4819ac29a372ff1f5d7d',
                '2699009e36cd4028a7bb82d4c90c3506',
                '2a19e4c8e13048598fd6ddf4af08b84c'
            ],
            auctionStart: 1590730690258,
            auctionEnd: 1590773890258,
            item: 'Enchanted Book',
            itemLore: 'Life Steal III\nHeals for 0.3% of the damage\nyou deal to mobs.\n\nUse this on an item in an Anvil\nto apply it!\n\nCOMMON',
            startingBid: 70000,
            highestBid: 0,
            bids: [],
            claimed: false,
            claimedBidders: [],
            bin: true
        },
        ... 27984 more items
    ]
})
hypixel.getSkyblockAuctions(3).then((auctions) => {
    console.log(auctions);
    all auctions from 3rd page
})
```

#### getSkyblockAuctionsByPlayer()
```js
// Argument
// Player UUID
hypixel.getSkyblockAuctionsByPlayer('ec0e13e723e941a3822facc80f602c14').then((auctions) => {
    console.log(auctions);
    [
        Auction {
            auctionId: 'c70a5447b5844e3c832cab716452db68',
            auctioneerUuid: 'ec0e13e723e941a3822facc80f602c14',
            coop: [
                'ec0e13e723e941a3822facc80f602c14',
                'ac240c4fdbbd4819ac29a372ff1f5d7d',
                '2699009e36cd4028a7bb82d4c90c3506',
                '2a19e4c8e13048598fd6ddf4af08b84c'
            ],
            auctionStart: 1590730661275,
            auctionEnd: 1590773861275,
            item: 'Enchanted Book',
            itemLore: 'Life Steal III\nHeals for 0.3% of the damage\nyou deal to mobs.\n\nUse this on an item in an Anvil\nto apply it!\n\nCOMMON',
            startingBid: 70000,
            highestBid: 0,
            bids: [],
            claimed: false,
            claimedBidders: [],
            bin: true
        },
            ... 4 more items
    ]
})
```

#### getSkyblockBazaar()
```js
hypixel.getSkyblockBazaar().then((products) => {
    console.log(products);
    [
        Product {
            productId: 'INK_SACK:3',
            sellSummary: [
                Order { amount: 1413, pricePerUnit: 4.5, orders: 1 },
                ... 6 more items
            ],
            buySummary: [
                Order { amount: 18032, pricePerUnit: 5.6, orders: 1 },
                ... 30 more items
            ],
            status: {
                sellPrice: 4.4,
                buyPrice: 5.67,
                sellVolume: 336864,
                buyVolume: 1148638,
                sellMovingWeek: 8338523,
                buyMovingWeek: 5820842,
                sellOrders: 11,
                buyOrders: 70
            }
        },
        ... 197 more items
    ]
})
```