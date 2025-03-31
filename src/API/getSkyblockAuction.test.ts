import Client from '../Client.js';
import RequestData from '../Private/RequestData.js';
import SkyblockAuction from '../Structures/SkyBlock/Auctions/SkyblockAuction.js';
import SkyblockBaseAucitonInfo from '../Structures/SkyBlock/Auctions/SkyblockBaseAuctionInfo.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { SkyblockAuctionResult, SkyblockAuctionsResult } from '../Types/API.js';

test('getSkyblockAuction (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const auctions = (await client.getSkyblockAuctions(1)) as SkyblockAuctionsResult;
  if (undefined === auctions.auctions[0]) return;
  if (!auctions.auctions[0].auctioneerUuid) throw new Error("Something wen't wrong while fetching auctions");
  const data = await client.getSkyblockAuction('AUCTIONID', auctions.auctions[0].auctionId, { raw: true });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<SkyblockAuctionResult | RequestData>();
});

test('getSkyblockAuction (No Type Input)', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  expect(() => client.getSkyblockAuction()).rejects.toThrowError(client.errors.BAD_AUCTION_FILTER);
  client.destroy();
});

test('getSkyblockAuction (Bad Type Input)', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  expect(() => client.getSkyblockAuction('meow', 'meow')).rejects.toThrowError(client.errors.BAD_AUCTION_FILTER);
  client.destroy();
});

test('getSkyblockAuction (No Query Input)', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  expect(() => client.getSkyblockAuction('AUCTIONID')).rejects.toThrowError(client.errors.NO_UUID);
  client.destroy();
});

test('getSkyblockAuction (PROFILE)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const auctions = (await client.getSkyblockAuctions(1)) as SkyblockAuctionsResult;
  if (undefined === auctions.auctions[0]) return;
  if (!auctions.auctions[0].auctioneerUuid) throw new Error("Something wen't wrong while fetching auctions");
  let data = await client.getSkyblockAuction('PROFILE', auctions.auctions[0].auctioneerProfile);
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<SkyblockAuctionResult | RequestData>();
  data = data as SkyblockAuctionResult;
  expect(data.info).toBeDefined();
  expectTypeOf(data.info).toEqualTypeOf<SkyblockBaseAucitonInfo>();
  expect(data.auctions).toBeDefined();
  expectTypeOf(data.auctions).toEqualTypeOf<SkyblockAuction[]>();
});

test('getSkyblockAuction (PLAYER)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const auctions = (await client.getSkyblockAuctions(1)) as SkyblockAuctionsResult;
  if (undefined === auctions.auctions[0]) return;
  if (!auctions.auctions[0].auctioneerUuid) throw new Error("Something wen't wrong while fetching auctions");
  let data = await client.getSkyblockAuction('PLAYER', auctions.auctions[0].auctioneerUuid);
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<SkyblockAuctionResult | RequestData>();
  data = data as SkyblockAuctionResult;
  expect(data.info).toBeDefined();
  expectTypeOf(data.info).toEqualTypeOf<SkyblockBaseAucitonInfo>();
  expect(data.auctions).toBeDefined();
  expectTypeOf(data.auctions).toEqualTypeOf<SkyblockAuction[]>();
});
