import Client from '../Client.js';
import RequestData from '../Private/RequestData.js';
import SkyblockItem from '../Structures/SkyBlock/SkyblockItem.js';
import { expect, expectTypeOf, test } from 'vitest';

test('getSkyblockItems (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getSkyblockItems({ raw: true });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<SkyblockItem[] | RequestData>();
  client.destroy();
});

test('getSkyblockItems', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  let data = await client.getSkyblockItems();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<SkyblockItem[] | RequestData>();
  data = data as SkyblockItem[];
  data.forEach((item: SkyblockItem) => {
    expect(item).toBeDefined();
    expect(item).toBeInstanceOf(SkyblockItem);
    expectTypeOf(item).toEqualTypeOf<SkyblockItem>();
    expect(item.color).toBeDefined();
    expectTypeOf(item.color).toEqualTypeOf<string | null>();
    expect(item.material).toBeDefined();
    expectTypeOf(item.material).toEqualTypeOf<string>();
    expect(item.name).toBeDefined();
    expectTypeOf(item.name).toEqualTypeOf<string>();
    expect(item.tier).toBeDefined();
    expectTypeOf(item.tier).toEqualTypeOf<string>();
    expect(item.id).toBeDefined();
    expectTypeOf(item.id).toEqualTypeOf<string>();
    expect(item.category).toBeDefined();
    expectTypeOf(item.category).toEqualTypeOf<string>();
    expect(item.npcSellPrice).toBeDefined();
    expect(item.npcSellPrice).toBeGreaterThanOrEqual(0);
    expectTypeOf(item.npcSellPrice).toEqualTypeOf<number>();
    expect(item.stats).toBeDefined();
    expectTypeOf(item.stats).toEqualTypeOf<Record<string, number>>();
    expect(item.raritySalvageable).toBeDefined();
    expectTypeOf(item.raritySalvageable).toEqualTypeOf<boolean>();
    expect(item.salvages).toBeDefined();
    expectTypeOf(item.salvages).toEqualTypeOf<Record<string, number>>();
    expect(item.soulbound).toBeDefined();
    expectTypeOf(item.soulbound).toEqualTypeOf<string | null>();
    expect(item.isSoulbound).toBeDefined();
    expectTypeOf(item.isSoulbound).toEqualTypeOf<boolean>();
    expect(item.skin).toBeDefined();
    expectTypeOf(item.skin).toEqualTypeOf<Record<string, number>>();
  });
  client.destroy();
});
