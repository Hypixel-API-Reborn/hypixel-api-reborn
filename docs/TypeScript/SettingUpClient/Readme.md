# Setting up Hypixel-API-Reborn's Client (JavaScript)

This guide will explain how to setup a reuseable Client instance from Hypixel-API-Reborn.

This assumes that you will be using TypeScript. Please checkout
[the JavaScript version](../JavaScript/SettingUpClient.md) of this guide if you need JavaScript

## Requirements

- Hypixel-API-Reborn v12.0.0-14 or **higher**
- TypeScript v5.9.2 or **higher**

## Assumptions

This guide assumes the following

- You are using Hypixel-API-Reborn v12.0.0-14
- You are using TypeScript v5.9.2

## Initializing a Client Instance

By importing the Client constructor from Hypixel-API-Reborn you can start a new instance of it by calling new on the
class and passing in your API Key

```TypeScript
// File HypixelAPIReborn.ts
import { Client } from 'hypixel-api-reborn';

const HypixelAPIReborn = new Client("YOUR API_KEY");
```

## Sharing your Client Instance

We recommend not creating multiple instances of Client because of how we manage ratelimiting and having it cause desync
issues. Instead we recommend making one instance of Client then exporting it and importing it an any files that need the
Client instance.

```TypeScript
// File HypixelAPIReborn.ts

import { Client } from 'hypixel-api-reborn';

const HypixelAPIReborn = new Client("YOUR API_KEY");

export default HypixelAPIReborn;
```

Once it's exported you can then reimport it into a different file and make requests from it

```TypeScript
// File PlayerExample.ts
import HypixelAPIReborn from './HypixelAPIReborn';
```

## Fetching a Player

Once you have initialized your client instance you can then call a function on it. In this example we are going to call
[getPlayer](https://hypixel-api-reborn.github.io/hypixel-api-reborn/classes/Client.Client.html#getplayer) but there are
many more endpoints you can fetch. A
[full list can be found on the docs under the Methods section](https://hypixel-api-reborn.github.io/hypixel-api-reborn/classes/Client.Client.html)

```TypeScript
// File PlayerExample.ts
import HypixelAPIReborn from './HypixelAPIReborn';

const player = await hypixelAPI.getPlayer("kathund");

// Check that the player data is not Raw API Data.
if (player.isRaw()) throw new Error("Player data is Raw Data");

console.log(player);
```

When fetching endpoints we use isRaw to check if the data is a raw request data or not. Consider checking out the
[guide on Understanding isRaw](../UnderstandingIsRaw/Guide.md) for more info

## Code

The resulting code can be found at
[Code/src/](https://github.com/Hypixel-API-Reborn/hypixel-api-reborn/blob/master/docs/TypeScript/SettingUpClient/Code/src/)
