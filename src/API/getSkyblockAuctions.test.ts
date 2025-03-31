import Client from '../Client.js';
import RequestData from '../Private/RequestData.js';
import SkyblockAuction from '../Structures/SkyBlock/Auctions/SkyblockAuction.js';
import SkyblockAuctionInfo from '../Structures/SkyBlock/Auctions/SkyblockAuctionsInfo.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { SkyblockAuctionsResult } from '../Types/API.js';

test('getSkyblockAuctions (No Input)', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  expect(() => client.getSkyblockAuctions()).rejects.toThrowError(client.errors.INVALID_OPTION_VALUE);
  client.destroy();
});

test('getSkyblockAuctions (Negative Input)', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  expect(() => client.getSkyblockAuctions(-1)).rejects.toThrowError(client.errors.INVALID_OPTION_VALUE);
  client.destroy();
});

test('getSkyblockAuctions (Page 0)', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  expect(() => client.getSkyblockAuctions(0)).rejects.toThrowError(client.errors.INVALID_OPTION_VALUE);
  client.destroy();
});

test('getSkyblockAuctions (String Input)', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  expect(() => client.getSkyblockAuctions('hi')).rejects.toThrowError(client.errors.INVALID_OPTION_VALUE);
  client.destroy();
});

test('getSkyblockAuctions (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getSkyblockAuctions(1, { raw: true });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<SkyblockAuctionsResult | RequestData>();
  client.destroy();
});

test('getSkyblockAuctions (One Page)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  let data = await client.getSkyblockAuctions(1);
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<SkyblockAuctionsResult | RequestData>();
  data = data as SkyblockAuctionsResult;
  expect(data.info).toBeDefined();
  expectTypeOf(data.info).toEqualTypeOf<SkyblockAuctionInfo>();
  expect(data.auctions).toBeDefined();
  expectTypeOf(data.auctions).toEqualTypeOf<SkyblockAuction[]>();
  client.destroy();
});

test('getSkyblockAuctions (All Pages)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  let data = await client.getSkyblockAuctions('*');
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<SkyblockAuctionsResult | RequestData>();
  data = data as SkyblockAuctionsResult;
  expect(data.info).toBeDefined();
  expectTypeOf(data.info).toEqualTypeOf<SkyblockAuctionInfo>();
  expect(data.auctions).toBeDefined();
  expectTypeOf(data.auctions).toEqualTypeOf<SkyblockAuction[]>();
  client.destroy();
});
