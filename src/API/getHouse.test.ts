import Client from '../Client.js';
import House from '../Structures/House.js';
import RequestData from '../Private/RequestData.js';
import { expect, expectTypeOf, test } from 'vitest';

test('getHouse (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const houses = (await client.getActiveHouses()) as House[];
  if (undefined === houses[0]) return;
  const data = await client.getHouse(houses[0].uuid, { raw: true });
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<House | RequestData>();
  expect(data.isRaw()).toBe(true);
  if (data.isRaw()) return;
  client.destroy();
});

test('getHouse (no input)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  await expect(() => client.getHouse()).rejects.toThrowError(client.errors.NO_UUID);
  client.destroy();
});

test('getHouse', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const houses = (await client.getActiveHouses()) as House[];
  if (undefined === houses[0]) return;
  expect(houses).toBeDefined();
  expectTypeOf(houses).toEqualTypeOf<House[]>();
  const data = await client.getHouse(houses[0].uuid);
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<House | RequestData>();
  expect(data.isRaw()).toBe(false);
  if (data.isRaw()) return;
  expect(data.name).toBeDefined();
  expectTypeOf(data.name).toEqualTypeOf<string>();
  expect(data.uuid).toBeDefined();
  expectTypeOf(data.uuid).toEqualTypeOf<string>();
  expect(data.owner).toBeDefined();
  expectTypeOf(data.owner).toEqualTypeOf<string>();
  expect(data.createdAtTimestamp).toBeDefined();
  expectTypeOf(data.createdAtTimestamp).toEqualTypeOf<number | null>();
  expect(data.createdAt).toBeDefined();
  expectTypeOf(data.createdAt).toEqualTypeOf<Date | null>();
  expect(data.players).toBeDefined();
  expectTypeOf(data.players).toEqualTypeOf<number>();
  expect(data.cookies).toBeDefined();
  expectTypeOf(data.cookies).toEqualTypeOf<number>();
  expect(data.toString()).toBeDefined();
  expectTypeOf(data.toString()).toEqualTypeOf<string>();
  client.destroy();
});
