# Fetching SkyHelper Networth using Hypixel-API-Reborn (JavaScript)

This will explain how to convert a Hypixel-API-Reborn API request into useable data that can be parsed into SkyHelper
Networth. This assumes that you will be using JavaScript. Please checkout
[the TypeScript version](../TypeScript/SkyHelperNetWorth.md) of this guide if you need TypeScript

## Requirements

- Hypixel-API-Reborn v12.0.0-28 or **higher**
- Node v22.22.3 or **higher**
- SkyHelper Networth v2.8.0 or **higher**

## Assumptions

This guide assumes the following

- You are using Hypixel-API-Reborn v12.0.0-28
- You are using Node v22.22.3
- You are using SkyHelper Networth v2.8.0
- You are using ES6 Modules
- You have setup a Client instance. If not please see [the Setting Up Client guide](../SettingUpClient/Guide.md)

## Fetching A Player's Profiles

Once you have initialized your client instance you can then fetch a user's SkyBlock Profiles and get there currently
selected profile.

```JavaScript
// File ProfileExample.js
import HypixelAPIReborn from './HypixelAPIReborn.js';

const profiles = await HypixelAPIReborn.getSkyBlockProfiles('14727faefbdc4aff848cd2713eb9939e');

// Check that the player has a selectedProfile.
const selectedProfile = profiles.raw.rawData.profiles.find((profile) => profile.selected === true);
if (selectedProfile === undefined) throw new Error("Player doesn't have a skyblock profile selected.");

console.log(selectedProfile);
```

## Fetching A Player's Museum

Once you have found the user's selected profile you will be required to get that player's museum data

```JavaScript
// File MuseumExample.js
import HypixelAPIReborn from './HypixelAPIReborn.js';

// Fetch the player's museum data
const museum = await HypixelAPIReborn.getSkyBlockMuseum(selectedProfile.profileId);

// Check that the player has API on.
const museumProfile = museum.raw.rawData.members[selectedProfile.me.uuid];
if (museumProfile === undefined) throw new Error('Player has museum API off.');

console.log(museumProfile);
```

## Creating a NetworthCalculator

Once you have found the user's selected profile and there museum data we need to parse the SkyblockProfile into useable
data for the Networth Calculator

```JavaScript
// File CalculatorExample.js
import { ProfileNetworthCalculator } from 'skyhelper-networth';

// Create the Networth calculator
const networthCalculator = new ProfileNetworthCalculator(
  selectedProfile,
  museumProfile,
  selectedProfile.banking.balance
);
console.log(networthCalculator);
```

## Calculating a Player's Networth

Once we have the Networth Calculator we can calculate the player's networth

```JavaScript
// File NetworthExample.js

// Fetch the Networth
const networthData = await networthCalculator.getNetworth({ onlyNetworth: true });
console.log(networthData);
```

## Code

The resulting code can be found at
[Code/src/](https://github.com/Hypixel-API-Reborn/hypixel-api-reborn/blob/master/docs/JavaScript/SkyHelperNetworth/Code/src/)
