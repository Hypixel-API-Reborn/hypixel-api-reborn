<div align="center">
<img src="https://i.imgur.com/cDFoQZU.png?1">
<h1>Hypixel API • Reborn</h1>
<a href="https://discord.gg/NSEBNMM"><img src="https://discordapp.com/api/guilds/660416184252104705/embed.png"></a>
<a href="https://travis-ci.org/StavZ/hypixel-api-reborn"><img src="https://flat.badgen.net/travis/StavZ/hypixel-api-reborn"></a>
<a href="https://app.circleci.com/pipelines/github/StavZ/hypixel-api-reborn"><img src="https://flat.badgen.net/github/status/stavz/hypixel-api-reborn/master/ci/circleci"></a>
<img src="https://flat.badgen.net/npm/v/hypixel-api-reborn">
<img src="https://flat.badgen.net/npm/license/hypixel-api-reborn">
<a href="https://github.com/StavZ/hypixel-api-reborn"><img src="https://flat.badgen.net/github/stars/stavz/hypixel-api-reborn"></a>
</div>

[![](https://nodei.co/npm/hypixel-api-reborn.png?compact=true)](https://www.npmjs.com/package/hypixel-api-reborn) 

**Reborned Hypixel API Client for Node.js with many new features**

---

• **Easy for use** <br>• Compact Mode<br>• [Discord Support](https://discord.gg/NSEBNMM)

---

# Documentation

|    Functions     |       Arguments       |                                                  Returns                                                   |
| :--------------: | :-------------------: | :--------------------------------------------------------------------------------------------------------: |
|    getPlayer     |    UUID / Nickname    |                                 Promise<[Player](./src/structures/Player.js)>                                  |
|     getGuild     | GID / Name / Nickname |                               Promise<[Guild](./src/structures/Guild/Guild.js)>                                |
|    getFriends    |    UUID / Nickname    |    Promise<[Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)>    |
| getWatchdogStats |                       | Promise<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)> |
|    getOnline     |                       | Promise<[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)> |
| getSkyblockProfiles |         UUID          |                        Promise<Array<[SkyblockProfile](./src/structures/SkyBlock/SkyblockProfile.js)>>                        |
| getSkyblockAuctions |         Number / null          |                        Promise<Array<[SkyblockAuction](./src/structures/SkyBlock/Auctions/Auction.js)>>                        |
| getSkyblockAuctionsByPlayer |         UUID          |                        Promise<Array<[SkyblockAuction](./src/structures/SkyBlock/Auctions/Auction.js)>>                        |
| getSkyblockBazaar |                   |                        Promise<Array<[SkyblockProduct](./src/structures/SkyBlock/Bazzar/Product.js)>>                        |

*Soon will be more functions*

---

# Setup

``` js
const Hypixel = require('hypixel-api-reborn');

// Parameters:
// API Key (String)

const hypixel = new Hypixel.Client('API-KEY');
```

---

# Examples

### getPlayer

``` js
// Arguments:
// UUID / Player Nickname
hypixel.getPlayer('StavZDev').then(async (player) => {
    if(!player) return;

    console.log(player.uuid) // -> 52d9a36f66ce4cdf9a56ad9724ae9fb4
    console.log(player.karma) // -> 4570876

    // if compact mode is ON
    console.log(player.rank) // -> [MVP+]
    console.log(player.level) // -> 138.01 
    console.log(player.isOnline) // -> false
})

hypixel.getPlayer('abcde1234').then(async (player) => {
    if(!player) return;

    console.log(player) // -> null
}).catch(e => {
    console.log(e) // -> Player does not exist
})
```

### getGuild

``` js
// Arguments:
// id / name / player
// Guild ID / Guild Name / Player Nickname
hypixel.getGuild('name', 'The Foundation').then(async (guild) => {
    if(!guild) return;

    console.log(guild.name) // -> The Foundation
    console.log(guild.description) // -> Foundation ❤ AYS

    //if compact mode is ON
    console.log(guild.level) // -> 73
    console.log(guild.legacyRank) // -> 1
})

hypixel.getGuild('name', 'abcde1234').then(async (guild) => {
    if(!guild) return;

    console.log(guild) // -> null
}).catch(e => {
    console.log(e) // -> Guild does not exist
})
```

### getFriends

``` js
// Arguments:
// UUID / Player Nickname
hypixel.getFriends('StavZDev').then(async (friends) => {
    console.log(friends.length) // -> 12
})

hypixel.getFriends('abcde1234').then(async (friends) => {

    if(!friends) return;

}).catch(e => {
    console.log(e) // -> Player does not exist
})
```

### getWatchdogStats

``` js
hypixel.getWatchdogStats().then(async (stats) => {
    console.log(stats)
    // -> 
    WatchdogStats {
        ByWatchdogTotal: 4112671,
        ByWatchDogLastMinute: 1,
        ByWatchdogRollingDay: 6538,
        ByStaffTotal: 1471159,
        ByStaffRollingDay: 1353
    }
})
```

### getOnline

``` js
hypixel.getOnline().then(async (online) => {
    console.log(online) 
    // ->
    34327
})
```

### getSkyblockProfiles

``` js
// Arguments:
// UUID
hypixel.getSkyblockProfiles('52d9a36f66ce4cdf9a56ad9724ae9fb4').then(async (profiles) => {
    if(!profiles) return;
    console.log(profiles); 
    // -> 

    [
      SkyblockProfile {
        profileId: '65feab38f8434631b77d616bb40e1987',
        profileName: 'Lime',
        members: [ [SkyblockMember] ]
      },
      SkyblockProfile {
        profileId: '1e585237439b4eb78d53e33c65c8edaf',
        profileName: 'Cucumber',
        members: [ [SkyblockMember] ]
      }
    ]

    console.log(profile[0])
    // ->
        SkyblockProfile {
            profileId: '65feab38f8434631b77d616bb40e1987',
            profileName: 'Lime',
            members: [
        SkyblockMember {
          uuid: '52d9a36f66ce4cdf9a56ad9724ae9fb4',
          firstJoin: 1560352500017,
          lastSave: 1581701036662,
          getArmor: [AsyncFunction],
          fairySouls: 14,
          skills: [Object], /*(if API:Skills setting is turned OFF will be null)*/
          collections: [Object], /*(if API:Collection setting is turned OFF will be null)*/
          getEnderChest: [AsyncFunction], /*(if API:Inventory setting is turned OFF will be null)*/
          getInventory: [AsyncFunction], /*(if API:Inventory setting is turned OFF will be null)*/
          stats: [Object] 
        }
      ]
    }

}).catch(e => {
    console.log(e)
    /*
    if player does not have skyblock profiles -> Player does not have Skyblock profiles
    if specified UUID is not valid -> Malformed UUID
    */
})
```

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
