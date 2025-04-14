import Client from '../Client.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockAuction from '../Structures/SkyBlock/Auctions/SkyBlockAuction.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyBlockAuctionInfo from '../Structures/SkyBlock/Auctions/SkyBlockAuctionInfo.js';
import type { SkyBlockAuctionsResult } from '../Types/API.js';

test('getSkyBlockAuctions (No Input)', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  expect(() => client.getSkyBlockAuctions()).rejects.toThrowError(client.errors.INVALID_OPTION_VALUE);
  client.destroy();
});

test('getSkyBlockAuctions (Negative Input)', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  expect(() => client.getSkyBlockAuctions(-1)).rejects.toThrowError(client.errors.INVALID_OPTION_VALUE);
  client.destroy();
});

test('getSkyBlockAuctions (Page 0)', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  expect(() => client.getSkyBlockAuctions(0)).rejects.toThrowError(client.errors.INVALID_OPTION_VALUE);
  client.destroy();
});

test('getSkyBlockAuctions (String Input)', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  expect(() => client.getSkyBlockAuctions('hi')).rejects.toThrowError(client.errors.INVALID_OPTION_VALUE);
  client.destroy();
});

test('getSkyBlockAuctions (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getSkyBlockAuctions(1, { raw: true });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<SkyBlockAuctionsResult | RequestData>();
  client.destroy();
});

test('getSkyBlockAuctions (One Page)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  let data = await client.getSkyBlockAuctions(1);
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<SkyBlockAuctionsResult | RequestData>();
  data = data as SkyBlockAuctionsResult;
  expect(data.info).toBeDefined();
  expectTypeOf(data.info).toEqualTypeOf<SkyBlockAuctionInfo>();
  expect(data.auctions).toBeDefined();
  expectTypeOf(data.auctions).toEqualTypeOf<SkyBlockAuction[]>();
  client.destroy();
});

test('getSkyBlockAuctions (All Pages)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  let data = await client.getSkyBlockAuctions('*');
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<SkyBlockAuctionsResult | RequestData>();
  data = data as SkyBlockAuctionsResult;
  expect(data.info).toBeDefined();
  expectTypeOf(data.info).toEqualTypeOf<SkyBlockAuctionInfo>();
  expect(data.auctions).toBeDefined();
  expectTypeOf(data.auctions).toEqualTypeOf<SkyBlockAuction[]>();
  client.destroy();
});
