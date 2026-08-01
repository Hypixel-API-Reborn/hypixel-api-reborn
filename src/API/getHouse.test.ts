import Client from '../Client.js';
import Errors from '../Errors.js';
import House from '../Structures/House.js';
import RequestData from '../Private/RequestData.js';
import { expect, expectTypeOf, test } from 'vitest';

test('getHouse (no input)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  await expect(() => client.getHouse()).rejects.toThrowError(Errors.NO_UUID);
  client.destroy();
});

test('getHouse', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const houses = await client.getActiveHouses();
  expect(houses).toBeDefined();
  expectTypeOf(houses).toEqualTypeOf<RequestData<House[]>>();
  if (undefined === houses.parsed[0]) return;
  const data = await client.getHouse(houses.parsed[0].uuid);
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<RequestData<House>>();
  expect(data.parsed.name).toBeDefined();
  expectTypeOf(data.parsed.name).toEqualTypeOf<string>();
  expect(data.parsed.uuid).toBeDefined();
  expectTypeOf(data.parsed.uuid).toEqualTypeOf<string>();
  expect(data.parsed.owner).toBeDefined();
  expectTypeOf(data.parsed.owner).toEqualTypeOf<string>();
  expect(data.parsed.createdAtTimestamp).toBeDefined();
  expectTypeOf(data.parsed.createdAtTimestamp).toEqualTypeOf<number | null>();
  expect(data.parsed.createdAt).toBeDefined();
  expectTypeOf(data.parsed.createdAt).toEqualTypeOf<Date | null>();
  expect(data.parsed.players).toBeDefined();
  expectTypeOf(data.parsed.players).toEqualTypeOf<number>();
  expect(data.parsed.cookies).toBeDefined();
  expectTypeOf(data.parsed.cookies).toEqualTypeOf<number>();
  expect(data.parsed.toString()).toBeDefined();
  expectTypeOf(data.parsed.toString()).toEqualTypeOf<string>();
  client.destroy();
});
