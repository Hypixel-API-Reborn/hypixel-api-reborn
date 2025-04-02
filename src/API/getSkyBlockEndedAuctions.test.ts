import Client from '../Client.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockAuction from '../Structures/SkyBlock/Auctions/SkyBlockAuction.js';
import SkyBlockBaseAucitonInfo from '../Structures/SkyBlock/Auctions/SkyBlockBaseAuctionInfo.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { SkyBlockAuctionResult } from '../Types/API.js';

test('getSkyBlockEndedAuctions (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getSkyBlockEndedAuctions({ raw: true });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<SkyBlockAuctionResult | RequestData>();
  client.destroy();
});

test('getSkyBlockEndedAuctions', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  let data = await client.getSkyBlockEndedAuctions();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<SkyBlockAuctionResult | RequestData>();
  data = data as SkyBlockAuctionResult;
  expect(data.info).toBeDefined();
  expectTypeOf(data.info).toEqualTypeOf<SkyBlockBaseAucitonInfo>();
  expect(data.auctions).toBeDefined();
  expectTypeOf(data.auctions).toEqualTypeOf<SkyBlockAuction[]>();
  client.destroy();
});
