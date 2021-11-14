<div align="center">
<img src="https://raw.githubusercontent.com/Hypixel-API-Reborn/hypixel-api-reborn.github.io/master/static/default-monochrome-white.png">

<a href="https://discord.gg/NSEBNMM"><img src="https://discordapp.com/api/guilds/660416184252104705/embed.png"></a> <a href="https://travis-ci.org/StavZ/hypixel-api-reborn"><img src="https://flat.badgen.net/travis/hypixel-api-reborn/hypixel-api-reborn"></a> <a href="https://app.codacy.com/gh/Hypixel-API-Reborn/hypixel-api-reborn?utm_source=github.com&utm_medium=referral&utm_content=Hypixel-API-Reborn/hypixel-api-reborn&utm_campaign=Badge_Grade"> <img src="https://flat.badgen.net/codacy/grade/71cd7e95499b496cb2dd11c29b9def33/master"></a> <img src="https://flat.badgen.net/npm/node/hypixel-api-reborn"> <img src="https://flat.badgen.net/npm/v/hypixel-api-reborn"> <img src="https://flat.badgen.net/npm/license/hypixel-api-reborn"><a href="https://github.com/Hypixel-API-Reborn/hypixel-api-reborn"> <img src="https://flat.badgen.net/github/stars/hypixel-api-reborn/hypixel-api-reborn"></a> <a href="https://www.npmjs.com/package/hypixel-api-reborn"><img src="https://nodei.co/npm/hypixel-api-reborn.png?compact=true"></a>
<br>

<h3>Welcome to the hypixel-api-reborn documentation</h3>
</div>

# About

Hypixel API • Reborn is a feature-rich Hypixel API wrapper for Node.js/Typescript.
<br/>
- 100% Promise-based. <br/>
- Speedy and efficient. <br/>
- Intellisense support. [(?)](https://code.visualstudio.com/docs/editor/intellisense)


# Installation

```
// npm
npm i hypixel-api-reborn

// yarn
yarn add hypixel-api-reborn
```
## Example usage

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

## Links
- [Hypixel API • Reborn Discord Server](https://discord.gg/NSEBNMM)
- [GitHub](https://github.com/Hypixel-API-Reborn)
- [NPM](https://www.npmjs.com/package/hypixel-api-reborn)

# Contributing
[Contributing.md](https://github.com/Hypixel-API-Reborn/hypixel-api-reborn/blob/master/.github/CONTRIBUTING.md)

Make sure before creating an issue that it hasn't already reported. Please, don't create an issue for feature request, you can do it on our [discord server](https://discord.gg/NSEBNMM).