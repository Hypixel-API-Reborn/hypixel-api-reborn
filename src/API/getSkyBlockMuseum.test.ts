import Client from '../Client.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockMuseum from '../Structures/SkyBlock/Museum/SkyBlockMuseum.js';
import SkyBlockMuseumMember from '../Structures/SkyBlock/Museum/SkyBlockMuseumMember.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { UUID } from '../Types/Global.js';

test('getSkyBlockMuseum (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getSkyBlockMuseum('63fe6f4c-4b06-43b2-abd0-2d15dc303e41', { raw: true });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMuseum | RequestData>();
  expect(data.isRaw()).toBe(true);
  client.destroy();
});

test('getSkyBlockMuseum (No input)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  await expect(() => client.getSkyBlockMuseum()).rejects.toThrowError(client.errors.NO_UUID);
  client.destroy();
});

test('getSkyBlockMuseum', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getSkyBlockMuseum('63fe6f4c-4b06-43b2-abd0-2d15dc303e41');
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<SkyBlockMuseum | RequestData>();
  expect(data.isRaw()).toBe(false);
  if (data.isRaw()) return;
  expect(data.members).toBeDefined();
  expectTypeOf(data.members).toEqualTypeOf<Record<UUID, SkyBlockMuseumMember>>();
  client.destroy();
});
