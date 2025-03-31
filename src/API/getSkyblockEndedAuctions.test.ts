import Client from '../Client.js';
import RequestData from '../Private/RequestData.js';
import SkyblockAuction from '../Structures/SkyBlock/Auctions/SkyblockAuction.js';
import SkyblockBaseAucitonInfo from '../Structures/SkyBlock/Auctions/SkyblockBaseAuctionInfo.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { SkyblockAuctionResult } from '../Types/API.js';

test('getSkyblockEndedAuctions (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getSkyblockEndedAuctions({ raw: true });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<SkyblockAuctionResult | RequestData>();
  client.destroy();
});

test('getSkyblockEndedAuctions', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  let data = await client.getSkyblockEndedAuctions();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<SkyblockAuctionResult | RequestData>();
  data = data as SkyblockAuctionResult;
  expect(data.info).toBeDefined();
  expectTypeOf(data.info).toEqualTypeOf<SkyblockBaseAucitonInfo>();
  expect(data.auctions).toBeDefined();
  expectTypeOf(data.auctions).toEqualTypeOf<SkyblockAuction[]>();
  client.destroy();
});
