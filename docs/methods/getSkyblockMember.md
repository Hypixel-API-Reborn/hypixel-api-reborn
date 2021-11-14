# getSkyblockMember
Allows you to get a player's skyblock member data from all their profiles
## Arguments
- Player nickname or UUID
- [Method options](https://hypixel.stavzdev.me/#/docs/main/master/typedef/MethodOptions) (optional)

## Example usage
```js
const Hypixel = require('hypixel-api-reborn');
const hypixel = new Hypixel.Client('API-KEY');
// https://stavzdev.is-inside.me/cCMiZdoy.gif

hypixel.getSkyblockMember('StavZDev').then(map => {
  console.log(map); // if player has no skyblock profiles will return an empty Map
}).catch(e => {
  console.error(e);
  // if player doesn't exist will throw an error
});

// async/await
const map = await hypixel.getSkyblockMember('StavZDev').catch(e => console.error(e));
console.log(map);
```
## Example response
```js
Map(1) {
  'Lime' => SkyblockMember {
    uuid: '52d9a36f66ce4cdf9a56ad9724ae9fb4',
    player: null,
    profileName: 'Lime',
    firstJoinTimestamp: 1560352500017,
    firstJoinAt: 2019-06-12T15:15:00.017Z,
    firstJoinHubTimestamp: 848208,
    firstJoinHubAt: 2019-06-12T15:29:08.225Z,
    lastSave: 1615632015391,
    lastSaveAt: 2021-03-13T10:40:15.391Z,
    lastDeathAt: 2020-02-14T16:11:05.000Z,
    lastDeath: 21420965,
    getArmor: [AsyncFunction (anonymous)],
    getWardrobe: [AsyncFunction (anonymous)],
    fairySouls: 14,
    fairyExchanges: 0,
    skills: {
      farming: [Object],
      mining: [Object],
      combat: [Object],
      foraging: [Object],
      fishing: [Object],
      enchanting: [Object],
      alchemy: [Object],
      taming: [Object],
      carpentry: [Object],
      runecrafting: [Object]
    },
    slayer: { zombie: [Object], spider: [Object], wolf: [Object] },
    dungeons: { types: [Object], classes: [Object] },
    collections: {
      LOG: 19,
      SEEDS: 7430,
      COBBLESTONE: 6206,
      COAL: 92,
      CARROT_ITEM: 1225,
      ROTTEN_FLESH: 38,
      'LOG:2': 84,
      'LOG:1': 2,
      'LOG_2:1': 69,
      WHEAT: 7770,
      IRON_INGOT: 118,
      GOLD_INGOT: 52,
      SULPHUR: 2,
      'INK_SACK:4': 37,
      REDSTONE: 66,
      SPIDER_EYE: 1,
      STRING: 1,
      BONE: 14,
      ENDER_PEARL: 1,
      MELON: 96,
      PUMPKIN: 6,
      POTATO_ITEM: 89,
      PORK: 15,
      FEATHER: 9,
      RAW_CHICKEN: 9,
      MUTTON: 31,
      SUGAR_CANE: 25,
      RABBIT: 14,
      MUSHROOM_COLLECTION: 63,
      LEATHER: 12
    },
    getEnderChest: [AsyncFunction (anonymous)],
    getInventory: [AsyncFunction (anonymous)],
    purse: 5089.609042968747,
    stats: {
      highestCritDamage: 2259.52084,
      kills: 140,
      killsZombie: 33,
      deaths: 13,
      deathsVoid: 5,
      killsInvisibleCreeper: 2,
      killsLapisZombie: 2,
      killsRedstonePigman: 1,
      deathsRedstonePigman: 1,
      deathsLapisZombie: 1,
      deathsZombie: 3,
      deathsSkeleton: 1,
      killsSpider: 1,
      killsSkeleton: 13,
      killsEnderman: 2,
      highestCriticalDamage: 60.196500000000015,
      deathsUnburriedZombie: 2,
      killsPig: 15,
      killsChicken: 9,
      killsSheep: 31,
      killsRabbit: 14,
      killsCow: 12,
      killsZombieVillager: 5,
      giftsReceived: 2,
      giftsGiven: 6,
      auctionsCreated: 1,
      auctionsFees: 45
    },
    pets: [],
    jacob: { medals: [Object], perks: [Object], contests: [Object] }
  }
}
```
## Links
- [getSkyblockMember](https://hypixel.stavzdev.me/#/docs/main/master/class/Client?scrollTo=getSkyblockMember)
- [SkyblockMember](https://hypixel.stavzdev.me/#/docs/main/master/class/SkyblockMember)