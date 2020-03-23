# ![](https://i.imgur.com/cDFoQZU.png?1)
# Hypixel API • Reborn
---

[![](https://nodei.co/npm/hypixel-api-reborn.png?mini=true)](https://www.npmjs.com/package/hypixel-api-reborn) 
[![Build Status](https://travis-ci.org/StavZ/hypixel-api-reborn.svg?branch=master)](https://travis-ci.org/StavZ/hypixel-api-reborn)

**Reborn Hypixel API Client for Node.js with many new features**

---

• **Easy for use** <br>• Compact Mode<br>• [Discord Support](https://discord.gg/NSEBNMM)

---

# Documentation

| Functions | Arguments | Returns |
| :---: | :---: | :---: |
| getPlayer | UUID / Nickname | Player |
| getGuild | GID / Name / Nickname | Guild |
| getFriends | UUID / Nickname | [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) |
| getWatchdogStats | | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | 
| getOnline | | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| getSkyblockStats | UUID | SkyblockProfile |

*Soon will be more functions*

---

# Setup

``` js
const Hypixel = require('hypixel-api-reborn');

// Parameters:
// API Key (String)
// Compart Mode (Boolean)

const hypixel = new Hypixel('API-KEY', true);
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
    console.log(player.isOnline()) // -> false
})

hypixel.getPlayer('abcde1234').then(async (player) => {
    if(!player) return;

    console.log(player) // -> null
}).catch(e => {
    console.log(e) // -> Player does not exist
})
```

### getSkyblockStats

``` js
// Arguments:
// UUID
hypixel.getSkyblockStats('52d9a36f66ce4cdf9a56ad9724ae9fb4').then(async (profile) => {
    if(!profile) return;

    //if does not have skyblock profiles -> null

    //if player has 1 skyblock profile
    //profile - object
    //else 
    //profile array of objects

    //if compact mode if ON
    console.log(profile); // -> 
    // [
    //   SkyblockProfile {
    //     profile_id: '65feab38f8434631b77d616bb40e1987',
    //     profile_name: 'Lime',
    //     members: [ [SkyblockMember] ]
    //   },
    //   SkyblockProfile {
    //     profile_id: '1e585237439b4eb78d53e33c65c8edaf',
    //     profile_name: 'Cucumber',
    //     members: [ [SkyblockMember] ]
    //   }
    // ]

    console.log(profile[0])
    //     SkyblockProfile {
    //   profile_id: '65feab38f8434631b77d616bb40e1987',
    //   profile_name: 'Lime',
    //   members: [
    //     SkyblockMember {
    //       uuid: '52d9a36f66ce4cdf9a56ad9724ae9fb4',
    //       first_join: 1560352500017,
    //       last_save: 1581701036662,
    //       getArmor: [AsyncFunction],
    //       fairy_souls: 14,
    //       skills: [Object], (if API:Skills setting is OFF will be null)
    //       collections: [Object], (if API:Collection setting is OFF will be null)
    //       getEnderChest: [AsyncFunction], (if API:Inventory setting is OFF will be null)
    //       getInventory: [AsyncFunction], (if API:Inventory setting is OFF will be null)
    //       stats: [Object] 
    //     }
    //   ]
    // }
}).catch(e => {
    console.log(e) // Player does not have Skyblock profiles
})
```

### getGuild

``` js
// Arguments:
// Guild ID / Guild Name / Player Nickname
// id / name / player
hypixel.getGuild('The Foundation', 'name').then(async (guild) => {
    if(!guild) return;

    console.log(guild.name) // -> The Foundation
    console.log(guild.description) // -> Foundation ❤ AYS

    //if compact mode is ON
    console.log(guild.level) // -> 73
    console.log(guild.legacyRank) // -> 1
})

hypixel.getGuild('abcde1234', 'name').then(async (guild) => {
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
    /* -> 
    WatchdogStats {
        ByWatchdogTotal: 4112671,
        ByWatchDogLastMinute: 1,
        ByWatchdogRollingDay: 6538,
        ByStaffTotal: 1471159,
        ByStaffRollingDay: 1353
    }
    */
})
```

### getOnline

``` js
hypixel.getOnline().then(async (online) => {
    console.log(online) // -> 34327
})
```

