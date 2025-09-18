/* eslint-disable @stylistic/max-len  */
import Client from '../Client.js';
import Errors from '../Errors.ts';
import RequestData from '../Private/RequestData.js';
import SkyBlockGarden from '../Structures/SkyBlock/Garden/SkyBlockGarden.js';
import SkyBlockMember from '../Structures/SkyBlock/Member/SkyBlockMember.js';
import SkyBlockProfile from '../Structures/SkyBlock/Profile/SkyBlockProfile.js';
import SkyBlockProfileBanking from '../Structures/SkyBlock/Profile/Banking/SkyBlockProfileBanking.js';
import SkyBlockProfileCommunityUpgrades from '../Structures/SkyBlock/Profile/CommunityUpgrades/SkyBlockProfileCommunityUpgrades.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { SkyBlockProfileName, SkyBlockProfileType } from '../Types/SkyBlock.js';
/* eslint-enable @stylistic/max-len  */

test('getSkyBlockProfile (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getSkyBlockProfile('14727faefbdc4aff848cd2713eb9939e', { raw: true });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<SkyBlockProfile | RequestData>();
  expect(data.isRaw()).toBe(true);
  client.destroy();
});

test('getSkyBlockProfile (no input)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  await expect(() => client.getSkyBlockProfile()).rejects.toThrowError(Errors.NO_UUID);
  client.destroy();
});

test('getSkyBlockProfile (no profiles)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  await expect(() => client.getSkyBlockProfile('ce6685dd-78dd-4418-9f6f-b01cf9778daa')).rejects.toThrowError(
    Errors.NO_SKYBLOCK_PROFILES
  );
  client.destroy();
});

test('getSkyBlockProfile', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getSkyBlockProfile('ed9b9d6d-d9b7-43b1-9841-5d0c20b55494');
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<SkyBlockProfile | RequestData>();
  expect(data.isRaw()).toBe(false);
  if (data.isRaw()) return;
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<SkyBlockProfile>();
  expect(data.profileId).toBeDefined();
  expectTypeOf(data.profileId).toEqualTypeOf<string>();
  expect(data.communityUpgrades).toBeDefined();
  expectTypeOf(data.communityUpgrades).toEqualTypeOf<SkyBlockProfileCommunityUpgrades>();
  expect(data.createdTimestamp).toBeDefined();
  expectTypeOf(data.createdTimestamp).toEqualTypeOf<number | null>();
  expect(data.createdAt).toBeDefined();
  expectTypeOf(data.createdAt).toEqualTypeOf<Date | null>();
  expect(data.members).toBeDefined();
  expectTypeOf(data.members).toEqualTypeOf<SkyBlockMember[]>();
  expect(data.me).toBeDefined();
  expectTypeOf(data.me).toEqualTypeOf<SkyBlockMember | null>();
  expect(data.gameMode).toBeDefined();
  expectTypeOf(data.gameMode).toEqualTypeOf<SkyBlockProfileType | null>();
  expect(data.banking).toBeDefined();
  expectTypeOf(data.banking).toEqualTypeOf<SkyBlockProfileBanking>();
  expect(data.profileName).toBeDefined();
  expectTypeOf(data.profileName).toEqualTypeOf<SkyBlockProfileName | 'UNKNOWN'>();
  expect(data.selected).toBeDefined();
  expectTypeOf(data.selected).toEqualTypeOf<boolean>();
  expect(data.garden).toBeDefined();
  expectTypeOf(data.garden).toEqualTypeOf<SkyBlockGarden | null>();
  client.destroy();
});
