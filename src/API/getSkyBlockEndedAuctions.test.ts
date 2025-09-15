import Client from '../Client.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockAuction from '../Structures/SkyBlock/Auctions/SkyBlockAuction.js';
import SkyBlockBaseAuctionInfo from '../Structures/SkyBlock/Auctions/SkyBlockBaseAuctionInfo.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { SkyBlockAuctionResult } from '../Types/API.js';

test('getSkyBlockEndedAuctions (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getSkyBlockEndedAuctions({ raw: true });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<SkyBlockAuctionResult | RequestData>();
  expect(data.isRaw()).toBe(true);
  client.destroy();
});

test('getSkyBlockEndedAuctions', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getSkyBlockEndedAuctions();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<SkyBlockAuctionResult | RequestData>();
  expect(data.isRaw()).toBe(false);
  if (data.isRaw()) return;
  expect(data.info).toBeDefined();
  expectTypeOf(data.info).toEqualTypeOf<SkyBlockBaseAuctionInfo>();
  expect(data.auctions).toBeDefined();
  expectTypeOf(data.auctions).toEqualTypeOf<SkyBlockAuction[]>();
  client.destroy();
});
