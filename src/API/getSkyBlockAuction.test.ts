import Client from '../Client.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockAuction from '../Structures/SkyBlock/Auctions/SkyBlockAuction.js';
import SkyBlockBaseAuctionInfo from '../Structures/SkyBlock/Auctions/SkyBlockBaseAuctionInfo.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { SkyBlockAuctionResult } from '../Types/API.js';

test('getSkyBlockAuction (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const auctions = await client.getSkyBlockAuctions(1);
  if (auctions.isRaw()) return;
  if (undefined === auctions.auctions[0]) return;
  if (!auctions.auctions[0].auctioneerUuid) throw new Error("Something wen't wrong while fetching auctions");
  const data = await client.getSkyBlockAuction('AUCTION_ID', auctions.auctions[0].auctionId, { raw: true });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<SkyBlockAuctionResult | RequestData>();
  expect(data.isRaw()).toBe(true);
  client.destroy();
});

test('getSkyBlockAuction (No Type Input)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  await expect(() => client.getSkyBlockAuction()).rejects.toThrowError(client.errors.BAD_AUCTION_FILTER);
  client.destroy();
});

test('getSkyBlockAuction (Bad Type Input)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  await expect(() => client.getSkyBlockAuction('meow', 'meow')).rejects.toThrowError(client.errors.BAD_AUCTION_FILTER);
  client.destroy();
});

test('getSkyBlockAuction (No Query Input)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  await expect(() => client.getSkyBlockAuction('AUCTION_ID')).rejects.toThrowError(client.errors.NO_UUID);
  client.destroy();
});

test('getSkyBlockAuction (PROFILE)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const auctions = await client.getSkyBlockAuctions(1);
  if (auctions.isRaw()) return;
  if (undefined === auctions.auctions[0]) return;
  if (!auctions.auctions[0].auctioneerUuid) throw new Error("Something wen't wrong while fetching auctions");
  const data = await client.getSkyBlockAuction('PROFILE', auctions.auctions[0].auctioneerProfile);
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

test('getSkyBlockAuction (PLAYER)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const auctions = await client.getSkyBlockAuctions(1);
  if (auctions.isRaw()) return;
  if (undefined === auctions.auctions[0]) return;
  if (!auctions.auctions[0].auctioneerUuid) throw new Error("Something wen't wrong while fetching auctions");
  const data = await client.getSkyBlockAuction('PLAYER', auctions.auctions[0].auctioneerUuid);
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
