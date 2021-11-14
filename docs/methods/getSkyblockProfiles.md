# getSkyblockProfiles
Allows you to get all skyblock profiles of player.
## Arguments
- Player nickname or UUID
- [Method options](https://hypixel.stavzdev.me/#/docs/main/master/typedef/SkyblockMethodOptions) (optional)

## Example usage
```js
const Hypixel = require('hypixel-api-reborn');
const hypixel = new Hypixel.Client('API-KEY');
// https://stavzdev.is-inside.me/cCMiZdoy.gif

hypixel.getSkyblockProfiles('StavZDev').then(profiles => {
  console.log(profiles); // if player has no skyblock profiles will return an empty array
}).catch(e => {
  console.error(e);
  // if player doesn't exist will throw an error
});

// async/await
const profiles = await hypixel.getSkyblockProfiles('StavZDev').catch(e => console.error(e));
console.log(profiles);
```
## Example response
```js
[
  SkyblockProfile {
    profileId: '65feab38f8434631b77d616bb40e1987',
    profileName: 'Lime',
    members: [ [SkyblockMember] ],
    me: SkyblockMember {
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
      skills: [Object],
      slayer: [Object],
      dungeons: [Object],
      collections: [Object],
      getEnderChest: [AsyncFunction (anonymous)],
      getInventory: [AsyncFunction (anonymous)],
      purse: 5089.609042968747,
      stats: [Object],
      pets: [],
      jacob: [Object]
    }
  }
]
```
## Links
- [getSkyblockProfiles](https://hypixel.stavzdev.xyz/#/docs/main/master/class/Client?scrollTo=getSkyblockProfiles)
- [SkyblockProfile](https://hypixel.stavzdev.me/#/docs/main/master/class/SkyblockProfile)
- [SkyblockMember](https://hypixel.stavzdev.me/#/docs/main/master/class/SkyblockMember)