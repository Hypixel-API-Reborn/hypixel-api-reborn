# Setting up Hypixel-API-Reborn's Client (JavaScript)

This guide will explain how to setup a reuseable Client instance from Hypixel-API-Reborn.

This assumes that you will be using JavaScript. Please checkout
[the TypeScript version](../TypeScript/SettingUpClient.md) of this guide if you need TypeScript

## Requirements

- Hypixel-API-Reborn v12.0.0-15 or **higher**

## Assumptions

This guide assumes the following

- You are using Hypixel-API-Reborn v12.0.0-15
- You are using ES6 Modules

## Initializing a Client Instance

By importing the Client constructor from Hypixel-API-Reborn you can start a new instance of it by calling new on the
class and passing in your API Key

```JavaScript
// File HypixelAPIReborn.js
import { Client } from 'hypixel-api-reborn';

const HypixelAPIReborn = new Client("YOUR API_KEY");
```

## Sharing your Client Instance

We recommend not creating multiple instances of Client because of how we manage ratelimiting and having it cause desync
issues. Instead we recommend making one instance of Client then exporting it and importing it an any files that need the
Client instance.

```JavaScript
// File HypixelAPIReborn.js

import { Client } from 'hypixel-api-reborn.js';

const HypixelAPIReborn = new Client("YOUR API_KEY");

export default HypixelAPIReborn;
```

Once it's exported you can then reimport it into a different file and make requests from it

```JavaScript
// File PlayerExample.js
import HypixelAPIReborn from './HypixelAPIReborn.js';
```

## Fetching a Player

Once you have initialized your client instance you can then call a function on it. In this example we are going to call
[getPlayer](https://hypixel-api-reborn.github.io/hypixel-api-reborn/classes/Client.Client.html#getplayer) but there are
many more endpoints you can fetch. A
[full list can be found on the docs under the Methods section](https://hypixel-api-reborn.github.io/hypixel-api-reborn/classes/Client.Client.html)

```JavaScript
// File PlayerExample.js
import HypixelAPIReborn from './HypixelAPIReborn.js';

const player = await hypixelAPI.getPlayer("kathund");

console.log(player);
```

## Code

The resulting code can be found at
[Code/src/](https://github.com/Hypixel-API-Reborn/hypixel-api-reborn/blob/master/docs/JavaScript/SettingUpClient/Code/src/)
