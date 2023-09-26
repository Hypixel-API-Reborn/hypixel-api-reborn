# getGuild

Allows you to get statistics of hypixel guild.

## Arguments

- Search parameter. ('player', 'name' or 'id')
- Player UUID/Nickname or Guild Name or Guild ID
- [Method options](https://hypixel-api-reborn.github.io/#/docs/main/master/typedef/MethodOptions) (optional)

## Example usage

```js
const Hypixel = require('hypixel-api-reborn');
const hypixel = new Hypixel.Client('API-KEY');
// https://stavzdev.is-inside.me/cCMiZdoy.gif

hypixel
  .getGuild('name', 'The Foundation')
  .then((guild) => {
    console.log(guild.level); // 112
  })
  .catch((e) => {
    console.error(e);
  });

// async/await
const guild = await hypixel.getGuild('player', 'StavZDev').catch((e) => console.error(e));
console.log(guild); // null (player isn't in guild)
```

## Example response

```js
Guild {
  id: '52e5719284ae51ed0c716c69',
  name: 'The Foundation',
  description: 'Hax <3 Ays Forum thread: https://hypixel.net/threads/the-foundation-f-1-legacy-guild-applications-open-questing-all-games.695949/',
  experience: 317328400,
  level: 112,
  members: [
    [GuildMember], [GuildMember], [GuildMember], [GuildMember], [GuildMember],
    [GuildMember], [GuildMember], [GuildMember], [GuildMember], [GuildMember],
    [GuildMember], [GuildMember], [GuildMember], [GuildMember], [GuildMember],
    [GuildMember], [GuildMember], [GuildMember], [GuildMember], [GuildMember],
    [GuildMember], [GuildMember], [GuildMember], [GuildMember], [GuildMember],
    [GuildMember], [GuildMember], [GuildMember], [GuildMember], [GuildMember],
    [GuildMember], [GuildMember], [GuildMember], [GuildMember], [GuildMember],
    ...
  ],
  ranks: [ [GuildRank], [GuildRank], [GuildRank], [GuildRank], [GuildRank] ],
  totalWeeklyGexp: 13093255,
  getRanksByNewest: [Function (anonymous)],
  getMemberUUIDMap: [Function (anonymous)],
  getRankByPriority: [Function (anonymous)],
  createdAtTimestamp: 1390768530176,
  createdAt: 2014-01-26T20:35:30.176Z,
  joinable: true,
  publiclyListed: false,
  chatMuteUntilTimestamp: null,
  chatMuteUntil: null,
  banner: { Base: '0', Patterns: [Array] },
  tag: 'F',
  tagColor: Color { color: 'YELLOW' },
  legacyRank: 1,
  expHistory: [
  { day: '2021-01-13', exp: 123713 },
  { day: '2021-01-12', exp: 2252825 },
  { day: '2021-01-11', exp: 1942112 },
  { day: '2021-01-10', exp: 1976094 },
  { day: '2021-01-09', exp: 2425690 },
  { day: '2021-01-08', exp: 2345603 },
  { day: '2021-01-07', exp: 2027218 }
],
  achievements: { winners: 2627, experienceKings: 489954, onlinePlayers: 125 },
  preferredGames: [
    [Game], [Game], [Game],
    [Game], [Game], [Game],
    [Game], [Game], [Game],
    [Game], [Game], [Game],
    [Game], [Game], [Game],
    [Game], [Game], [Game],
    [Game]
  ]
}
```

## Links

- [getGuild](https://hypixel-api-reborn.github.io/#/docs/main/master/class/Client?scrollTo=getGuild)
- [Guild](https://hypixel-api-reborn.github.io/#/docs/main/master/class/Guild)
- [GuildMember](https://hypixel-api-reborn.github.io/#/docs/main/master/class/GuildMember)
- [GuildRank](https://hypixel-api-reborn.github.io/#/docs/main/master/class/GuildRank)
- [Color](https://hypixel-api-reborn.github.io/#/docs/main/master/class/Color)
- [Game](https://hypixel-api-reborn.github.io/#/docs/main/master/class/Game)
