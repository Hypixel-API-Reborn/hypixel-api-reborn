
<div align="center">
<img src="https://i.imgur.com/cDFoQZU.png?1">
<h1>Hypixel API • Reborn</h1>
<a href="https://discord.gg/NSEBNMM"><img src="https://discordapp.com/api/guilds/660416184252104705/embed.png"></a>
<a href="https://travis-ci.org/StavZ/hypixel-api-reborn"><img src="https://flat.badgen.net/travis/StavZ/hypixel-api-reborn"></a>
<a href="https://app.circleci.com/pipelines/github/hypixel-api-reborn/hypixel-api-reborn"><img src="https://flat.badgen.net/github/status/hypixel-api-reborn/hypixel-api-reborn/master/ci/circleci"></a>
<img src="https://flat.badgen.net/npm/v/hypixel-api-reborn">
<img src="https://flat.badgen.net/npm/license/hypixel-api-reborn">
<a href="https://github.com/Hypixel-API-Reborn/hypixel-api-reborn"><img src="https://flat.badgen.net/github/stars/hypixel-api-reborn/hypixel-api-reborn"></a>
<a href="https://www.patreon.com/hypixelapireborn"><img src="https://i.imgur.com/gXkqa1Z.png?1"></a>
<a href="https://www.npmjs.com/package/hypixel-api-reborn"><img src="https://nodei.co/npm/hypixel-api-reborn.png?compact=true"></a>
<h2>This is the only Hypixel API wrapper for Node.js with intellisense support</h2>
</div>

# Documentation

<h3><a href="https://github.com/Hypixel-API-Reborn/hypixel-api-reborn/wiki">GitHub Wiki</a></h3>

|          Functions          |                    Arguments                     |                                                  Returns                                                   |
| :-------------------------: | :----------------------------------------------: | :--------------------------------------------------------------------------------------------------------: |
|          getPlayer          |                 UUID / Nickname                  |                               Promise<[Player](./src/structures/Player.js)>                                |
|          getGuild           | player / name / id \| Guild ID / Name / Nickname |                             Promise<[Guild](./src/structures/Guild/Guild.js)>                              |
|         getFriends          |                 UUID / Nickname                  |                            Promise<Array<[Friend](./src/structures/Friend.js)>>                            |
|         getBoosters         |                                                  |                      Promise<Array<[Booster](./src/structures/Boosters/Booster.js)>>                       |
|          getOnline          |                                                  | Promise<[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)> |
|      getWatchdogStats       |                                                  |                        Promise<[WatchdogStats](./src/structures/Watchdog/Stats.js)>                        |
|     getSkyblockProfiles     |                       UUID / Nickname                        |              Promise<Array<[SkyblockProfile](./src/structures/SkyBlock/SkyblockProfile.js)>>               |
|     getSkyblockAuctions     |                  Number / null                   |              Promise<Array<[SkyblockAuction](./src/structures/SkyBlock/Auctions/Auction.js)>>              |
| getSkyblockAuctionsByPlayer |                       UUID / Nickname                       |              Promise<Array<[SkyblockAuction](./src/structures/SkyBlock/Auctions/Auction.js)>>              |
|      getSkyblockBazaar      |                                                  |               Promise<Array<[SkyblockProduct](./src/structures/SkyBlock/Bazzar/Product.js)>>               |
|          getStatus          |                 UUID / Nickname                  |                               Promise<[Status](./src/structures/Status.js)>                                |
|         getKeyInfo          |                                                  |                              Promise<[KeyInfo](./src/structures/KeyInfo.js)>                               |
|       getLeaderboards       |                                                  |           [Wiki](https://github.com/Hypixel-API-Reborn/hypixel-api-reborn/wiki/getLeaderboards)            |

---

# Setup

``` js
const Hypixel = require('hypixel-api-reborn');

/* 
Parameters:
API Key (String)
options (Object)
options.cache (false by default) - Enables/Disables Request Caching
options.cacheTime (60 by default) - Amount of time in seconds to cache the request.
options.cacheSize (-1 by default) - The amount of how many results will be cached (set -1 for infinity)
*/

//Enables caching with a max age of 30 seconds and a limit of 5 cached results
const options = {
    cache: true,
    cacheTime: 30,
    cacheSize: 5
};
const hypixel = new Hypixel.Client('API-KEY', options);
```
