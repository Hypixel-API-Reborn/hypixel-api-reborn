import Client from '../Client.js';
import RequestData from '../Private/RequestData.js';
import SkyblockMuseum from '../Structures/SkyBlock/Museum/SkyblockMuseum.js';
import SkyblockMuseumMember from '../Structures/SkyBlock/Museum/SkyblockMuseumMember.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { UUID } from '../Types/Global.js';

test('getSkyblockMuseum (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getSkyblockMuseum('63fe6f4c-4b06-43b2-abd0-2d15dc303e41', { raw: true });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<SkyblockMuseum | RequestData>();
  client.destroy();
});

test('getSkyblockMuseum (No input)', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  expect(() => client.getSkyblockMuseum()).rejects.toThrowError(client.errors.NO_UUID);
  client.destroy();
});

test('getSkyblockMuseum', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  let data = await client.getSkyblockMuseum('63fe6f4c-4b06-43b2-abd0-2d15dc303e41');
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<SkyblockMuseum | RequestData>();
  data = data as SkyblockMuseum;
  expect(data.members).toBeDefined();
  expectTypeOf(data.members).toEqualTypeOf<Record<UUID, SkyblockMuseumMember>>();
  client.destroy();
});
