# Fetching SkyHelper Networth using Hypixel-API-Reborn (TypeScript)

This will explain how to convert a Hypixel-API-Reborn API request into useable data that can be parsed into SkyHelper
Networth. This assumes that you will be using TypeScript. Please checkout
[the JavaScript version](../JavaScript/SkyHelperNetWorth.md) of this guide if you need JavaScript

## Requirements

- Hypixel-API-Reborn v12.0.0-14 or **higher**
- SkyHelper Networth v2.5.1 or **higher**
- TypeScript v5.9.2 or **higher**

## Assumptions

This guide assumes the following

- You are using Hypixel-API-Reborn v12.0.0-14
- You are using SkyHelper Networth v2.5.1
- You are using TypeScript v5.9.2
- You have setup a Client instance. If not please see [the Setting Up Client guide](../SettingUpClient/Guide.md)

## Fetching A Player's Profiles

Once you have initialized your client instance you can then fetch a user's SkyBlock Profiles and get there currently
selected profile.

```TypeScript
// File ProfileExample.ts
import HypixelAPIReborn from './HypixelAPIReborn';

const profiles = await HypixelAPIReborn.getSkyBlockProfiles('14727faefbdc4aff848cd2713eb9939e');

// Check that the profiles data is not Raw API Data.
if (profiles.isRaw()) throw new Error('Player data is Raw Data.');

const selectedProfile = profiles.selectedProfile;
// Check that the player has a selectedProfile.
if (selectedProfile === undefined) throw new Error("Player doesn't have a skyblock profile selected.");

console.log(selectedProfile);
```

## Fetching A Player's Museum

Once you have found the user's selected profile you will be required to get that player's museum data

```TypeScript
// File MuseumExample.ts
import HypixelAPIReborn from './HypixelAPIReborn';

const museum = await HypixelAPIReborn.getSkyBlockMuseum(selectedProfile.profileId, { raw: true });

// Check that the requested data is raw.
if (!museum.isRaw()) throw new Error('Museum data is not Raw Data.');

// Check that the player has API on.
const museumProfile = museum.data.members[selectedProfile.me.uuid];
if (museumProfile === undefined) throw new Error('Player has museum API off.');

console.log(museumProfile);
```

## Creating a NetworthCalculator

Once you have found the user's selected profile and there museum data we need to parse the SkyblockProfile into useable
data for the Networth Calculator

```TypeScript
// File CalculatorExample.ts
import { PrepareSkyBlockProfileForSkyHelperNetworth } from 'hypixel-api-reborn';
import { ProfileNetworthCalculator } from 'skyhelper-networth';

// Reparse the profile data so that SkyHelper can read it and use it
const profileData = PrepareSkyBlockProfileForSkyHelperNetworth(selectedProfile);

// Create the Networth calculator
const networthCalculator = new ProfileNetworthCalculator(profileData, museumProfile, selectedProfile.banking.balance);
```

## Calculating a Player's Networth

Once we have the Networth Calculator we can calculate the player's networth

```TypeScript
// File NetworthExample.ts
import { PrepareSkyBlockProfileForSkyHelperNetworth } from 'hypixel-api-reborn';
import { ProfileNetworthCalculator } from 'skyhelper-networth';

// Fetch the Networth
const networthData = await networthCalculator.getNetworth({ onlyNetworth: true });
console.log(networthData);
```

## Code

The resulting code can be found at
[Code/src/](https://github.com/Hypixel-API-Reborn/hypixel-api-reborn/blob/master/docs/TypeScript/SkyHelperNetworth/Code/src/)
