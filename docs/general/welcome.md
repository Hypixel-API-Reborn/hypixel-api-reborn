
<div align="center">
<img src="https://i.imgur.com/cDFoQZU.png?1">
<h1>Hypixel API • Reborn</h1>
<a href="https://discord.gg/NSEBNMM"><img src="https://discordapp.com/api/guilds/660416184252104705/embed.png"></a>
<a href="https://travis-ci.org/StavZ/hypixel-api-reborn"><img src="https://flat.badgen.net/travis/hypixel-api-reborn/hypixel-api-reborn"></a>
<a href="https://app.circleci.com/pipelines/github/hypixel-api-reborn/hypixel-api-reborn"><img src="https://flat.badgen.net/github/status/hypixel-api-reborn/hypixel-api-reborn/master/ci/circleci"></a>
<img src="https://flat.badgen.net/npm/v/hypixel-api-reborn">
<img src="https://flat.badgen.net/npm/license/hypixel-api-reborn">
<a href="https://github.com/Hypixel-API-Reborn/hypixel-api-reborn"><img src="https://flat.badgen.net/github/stars/hypixel-api-reborn/hypixel-api-reborn"></a>
<a href="https://www.patreon.com/hypixelapireborn"><img src="https://i.imgur.com/gXkqa1Z.png?1"></a>
<a href="https://www.npmjs.com/package/hypixel-api-reborn"><img src="https://nodei.co/npm/hypixel-api-reborn.png?compact=true"></a>
<br>
</div>
#### Welcome to the hypixel-api-reborn documentation
### About
Hypixel API • Reborn is feature-rich Hypixel API wrapper for Node.js/Typescript.
<br>
- 100% Promise-based.
- Speedy and efficient.
- Intellisense support. [(?)](https://code.visualstudio.com/docs/editor/intellisense)
### Installation
```js
npm i hypixel-api-reborn
```
### Example usage
```js
const Hypixel = require('hypixel-api-reborn');
const hypixel = new Hypixel.Client('API-KEY');
// https://stavzdev.is-inside.me/cCMiZdoy.gif

hypixel.getPlayer('StavZDev').then(player => {
  console.log(player.level); // 141
}).catch(e => {
  console.error(e);
});
```

### Links
- [Hypixel API • Reborn Discord Server](https://discord.gg/NSEBNMM)
- [GitHub](https://github.com/Hypixel-API-Reborn)
- [NPM](https://www.npmjs.com/package/hypixel-api-reborn)

### Contributing
Make sure before creating an issue that it hasn't already reported. Please, don't create an issue for feature request, you can do it on our [discord server](https://discord.gg/NSEBNMM).
