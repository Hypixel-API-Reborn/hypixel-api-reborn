import Client from '../Client.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockAuction from '../Structures/SkyBlock/Auctions/SkyBlockAuction.js';
import SkyBlockBaseAuctionInfo from '../Structures/SkyBlock/Auctions/SkyBlockBaseAuctionInfo.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { SkyBlockAuctionResult } from '../Types/API.js';

test('getSkyBlockEndedAuctions', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const data = await client.getSkyBlockEndedAuctions();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<RequestData<SkyBlockAuctionResult>>();
  expect(data.parsed.info).toBeDefined();
  expectTypeOf(data.parsed.info).toEqualTypeOf<SkyBlockBaseAuctionInfo>();
  expect(data.parsed.auctions).toBeDefined();
  expectTypeOf(data.parsed.auctions).toEqualTypeOf<SkyBlockAuction[]>();
  client.destroy();
});
