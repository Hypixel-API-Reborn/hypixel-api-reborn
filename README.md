
<div align="center">
<img src="https://i.imgur.com/cDFoQZU.png?1">
<h1>Hypixel API • Reborn</h1>
<a href="https://discord.gg/NSEBNMM"><img src="https://discordapp.com/api/guilds/660416184252104705/embed.png"></a>
<a href="https://travis-ci.org/StavZ/hypixel-api-reborn"><img src="https://flat.badgen.net/travis/hypixel-api-reborn/hypixel-api-reborn"></a>
<a href="https://app.codacy.com/gh/Hypixel-API-Reborn/hypixel-api-reborn?utm_source=github.com&utm_medium=referral&utm_content=Hypixel-API-Reborn/hypixel-api-reborn&utm_campaign=Badge_Grade"><img src="https://flat.badgen.net/codacy/grade/71cd7e95499b496cb2dd11c29b9def33/master"></a>
<img src="https://flat.badgen.net/npm/v/hypixel-api-reborn">
<img src="https://flat.badgen.net/npm/node/hypixel-api-reborn">
<img src="https://flat.badgen.net/npm/license/hypixel-api-reborn">
<a href="https://github.com/Hypixel-API-Reborn/hypixel-api-reborn"><img src="https://flat.badgen.net/github/stars/hypixel-api-reborn/hypixel-api-reborn"></a>
<a href="https://www.npmjs.com/package/hypixel-api-reborn"><img src="https://nodei.co/npm/hypixel-api-reborn.png?compact=true"></a>
<h2>A feature-rich Hypixel API wrapper for Node.js</h2>
<br>
</div>

### Links
[Discord Support](https://discord.gg/NSEBNMM) | [Documentation](https://hypixel.stavzdev.me) | [NPM](https://www.npmjs.com/package/hypixel-api-reborn) | [GitHub](https://github.com/Hypixel-API-Reborn/hypixel-api-reborn) | [PreMiD Presence](https://premid.app/store/presences/Hypixel%20API%20Reborn) | [ToDo](https://github.com/Hypixel-API-Reborn/hypixel-api-reborn/projects/1) | [CLI](https://github.com/Hypixel-API-Reborn/cli)

#### Requirements

**For Node.js users >= v14.x.x** <br>
**For TypeScript users  >= v3.5**

### Installation & Usage
```shell
npm i hypixel-api-reborn
```
```js
const Hypixel = require('hypixel-api-reborn');
const hypixel = new Hypixel.Client('API-KEY');
// https://stavzdev.is-inside.me/cCMiZdoy.gif

// getPlayer
hypixel.getPlayer('StavZDev').then(player => {
  console.log(player.level); // 141
}).catch(e => {
  console.error(e);
})

// getGuild
hypixel.getGuild('name', 'The Foundation').then(guild => {
  console.log(guild.level); // 111
}).catch(e => {
  console.error(e);
})
```
For more examples go to our [documentation](https://hypixel.stavzdev.me/).
## Changelog
[v9.0.3](https://github.com/Hypixel-API-Reborn/hypixel-api-reborn/releases/tag/9.0.3)

### Try it now
**[Code Sandbox](https://codesandbox.io/s/clever-babbage-xqmfw?file=/src/index.js)**
