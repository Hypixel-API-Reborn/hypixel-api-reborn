import Client from '../Client.js';
import RequestData from '../Private/RequestData.js';
import SkyblockInventoryItem from '../Structures/SkyBlock/SkyblockInventoryItem.js';
import SkyblockMuseum from '../Structures/SkyBlock/SkyblockMuseum.js';
import SkyblockMuseumItem from '../Structures/SkyBlock/SkyblockMuseumItem.js';
import SkyblockProfile from '../Structures/SkyBlock/SkyblockProfile.js';
import { expect, expectTypeOf, test } from 'vitest';

test('getSkyblockMuseum (no input)', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  expect(() => client.getSkyblockMuseum()).rejects.toThrowError(client.errors.NO_NICKNAME_UUID);
  client.destroy();
});

test('getSkyblockMuseum (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const profiles = (await client.getSkyblockProfiles('63fe6f4c4b0643b2abd02d15dc303e41')) as SkyblockProfile[];
  const profile = profiles.find((profile: SkyblockProfile) => true === profile.selected) || null;
  if (null === profile) throw new Error("Something wen't wrong while fetching profiles");
  const data = await client.getSkyblockMuseum('63fe6f4c4b0643b2abd02d15dc303e41', profile.profileId, { raw: true });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<SkyblockMuseum | RequestData>();
  client.destroy();
});

test('getSkyblockMuseum', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const profiles = (await client.getSkyblockProfiles('63fe6f4c4b0643b2abd02d15dc303e41')) as SkyblockProfile[];
  const profile = profiles.find((profile: SkyblockProfile) => true === profile.selected) || null;
  if (null === profile) throw new Error("Something wen't wrong while fetching profiles");
  let data = await client.getSkyblockMuseum('63fe6f4c4b0643b2abd02d15dc303e41', profile.profileId);
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<SkyblockMuseum | RequestData>();
  data = data as SkyblockMuseum;

  expect(data.getItems()).toBeDefined();
  expectTypeOf(data.getItems).toEqualTypeOf<() => Promise<SkyblockMuseumItem[]>>();
  expectTypeOf(data.getItems()).toEqualTypeOf<Promise<SkyblockMuseumItem[]>>();

  const items = await data.getItems();
  expect(items).toBeDefined();
  expectTypeOf(items).toEqualTypeOf<SkyblockMuseumItem[]>();
  items.forEach((item: SkyblockMuseumItem) => {
    expect(item).toBeDefined();
    expect(item).toBeInstanceOf(SkyblockMuseumItem);
    expectTypeOf(item).toEqualTypeOf<SkyblockMuseumItem>();

    expect(item.name).toBeDefined();
    expectTypeOf(item.name).toEqualTypeOf<string>();

    expect(item.donated).toBeDefined();
    expectTypeOf(item.donated).toEqualTypeOf<number>();

    expect(item.featuredSlot).toBeDefined();
    expectTypeOf(item.featuredSlot).toEqualTypeOf<string | null>();

    expect(item.borrowing).toBeDefined();
    expectTypeOf(item.borrowing).toEqualTypeOf<boolean>();

    expect(item.items).toBeDefined();
    expectTypeOf(item.items).toEqualTypeOf<SkyblockInventoryItem[]>();
  });

  expect(data.getSpecial()).toBeDefined();
  expectTypeOf(data.getSpecial).toEqualTypeOf<() => Promise<SkyblockMuseumItem[]>>();
  expectTypeOf(data.getSpecial()).toEqualTypeOf<Promise<SkyblockMuseumItem[]>>();

  const special = await data.getSpecial();
  expect(special).toBeDefined();
  expectTypeOf(special).toEqualTypeOf<SkyblockMuseumItem[]>();
  special.forEach((item: SkyblockMuseumItem) => {
    expect(item).toBeDefined();
    expect(item).toBeInstanceOf(SkyblockMuseumItem);
    expectTypeOf(item).toEqualTypeOf<SkyblockMuseumItem>();

    expect(item.name).toBeDefined();
    expectTypeOf(item.name).toEqualTypeOf<string>();

    expect(item.donated).toBeDefined();
    expectTypeOf(item.donated).toEqualTypeOf<number>();

    expect(item.featuredSlot).toBeDefined();
    expectTypeOf(item.featuredSlot).toEqualTypeOf<string | null>();

    expect(item.borrowing).toBeDefined();
    expectTypeOf(item.borrowing).toEqualTypeOf<boolean>();

    expect(item.items).toBeDefined();
    expectTypeOf(item.items).toEqualTypeOf<SkyblockInventoryItem[]>();
  });

  client.destroy();
});
