import Client from '../Client.js';
import Errors from '../Errors.js';
import House from '../Structures/House.js';
import RequestData from '../Private/RequestData.js';
import { expect, expectTypeOf, test } from 'vitest';

test('getPlayerHouses (No input)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  await expect(() => client.getPlayerHouses()).rejects.toThrowError(Errors.NO_NICKNAME_UUID);
  client.destroy();
});

test('getPlayerHouses', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const data = await client.getPlayerHouses('69e04609da2a4e7dabb83546a971969e');
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<RequestData<House[]>>();
  data.parsed.forEach((house: House) => {
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
