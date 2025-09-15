import Client from '../Client.js';
import House from '../Structures/House.js';
import RequestData from '../Private/RequestData.js';
import { WithRaw } from '../Types/API.js';
import { expect, expectTypeOf, test } from 'vitest';

test('getActiveHouses (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getActiveHouses({ raw: true });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<WithRaw<House[]> | RequestData>();
  expect(data.isRaw()).toBe(true);
  client.destroy();
});

test('getActiveHouses', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getActiveHouses();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<WithRaw<House[]> | RequestData>();
  expect(data.isRaw()).toBe(false);
  if (data.isRaw()) return;
  data.forEach((house: House) => {
    expect(house).toBeDefined();
    expect(house).toBeInstanceOf(House);
    expectTypeOf(house).toEqualTypeOf<House>();
    expect(house.name).toBeDefined();
    expectTypeOf(house.name).toEqualTypeOf<string>();
    expect(house.uuid).toBeDefined();
    expectTypeOf(house.uuid).toEqualTypeOf<string>();
    expect(house.owner).toBeDefined();
    expectTypeOf(house.owner).toEqualTypeOf<string>();
    expect(house.createdAtTimestamp).toBeDefined();
    expectTypeOf(house.createdAtTimestamp).toEqualTypeOf<number | null>();
    expect(house.createdAt).toBeDefined();
    expectTypeOf(house.createdAt).toEqualTypeOf<Date | null>();
    expect(house.players).toBeDefined();
    expectTypeOf(house.players).toEqualTypeOf<number>();
    expect(house.cookies).toBeDefined();
    expectTypeOf(house.cookies).toEqualTypeOf<number>();
    expect(house.toString()).toBeDefined();
    expectTypeOf(house.toString()).toEqualTypeOf<string>();
    expect(house.toString()).toBe(house.name);
  });
  client.destroy();
});
