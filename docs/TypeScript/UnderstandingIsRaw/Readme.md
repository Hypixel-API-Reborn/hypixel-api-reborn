# Understanding Is Raw

This guide will explain how isRaw works and why it's needed in TypeScript.

This assumes that you will be using TypeScript. There will not be a JavaScript version of this guide.

## Requirements

- Hypixel-API-Reborn v12.0.0-14 or **higher**
- TypeScript v5.9.2 or **higher**

## Assumptions

This guide assumes the following

- You are using Hypixel-API-Reborn v12.0.0-14
- You are using TypeScript v5.9.2

## Why

When fetching an endpoint it returns the following

```TypeScript
client.getPlayer(): Promise<RequestData | Player>
```

In this case when fetching getPlayer it returns the RequestData Or the Player data. Using `isRaw()` as a type guard we
can confirm that it's the Player data because we did not include the raw option in our request. This isRaw will be on
every endpoint because every endpoint supports fetching raw data thus returning RequestData
