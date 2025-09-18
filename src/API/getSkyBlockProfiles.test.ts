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
import type { WithRaw } from '../Types/API.js';
/* eslint-enable @stylistic/max-len  */

test('getSkyBlockProfiles (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getSkyBlockProfiles('14727faefbdc4aff848cd2713eb9939e', { raw: true });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<WithRaw<Map<SkyBlockProfileName | 'UNKNOWN', SkyBlockProfile>> | RequestData>();
  expect(data.isRaw()).toBe(true);
  client.destroy();
});

test('getSkyBlockProfiles (no input)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  await expect(() => client.getSkyBlockProfiles()).rejects.toThrowError(Errors.NO_NICKNAME_UUID);
  client.destroy();
});

test('getSkyBlockProfiles (no profiles)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  await expect(() => client.getSkyBlockProfiles('b491990d53fd4c5fa61e19d58cc7eddf')).rejects.toThrowError(
    Errors.NO_SKYBLOCK_PROFILES
  );
  client.destroy();
});

test('getSkyBlockProfiles', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getSkyBlockProfiles('14727faefbdc4aff848cd2713eb9939e');
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<WithRaw<Map<SkyBlockProfileName | 'UNKNOWN', SkyBlockProfile>> | RequestData>();
  expect(data.isRaw()).toBe(false);
  if (data.isRaw()) return;
  data.forEach((profile) => {
    expect(profile).toBeDefined();
    expectTypeOf(profile).toEqualTypeOf<SkyBlockProfile>();
    expect(profile.profileId).toBeDefined();
    expectTypeOf(profile.profileId).toEqualTypeOf<string>();
    expect(profile.communityUpgrades).toBeDefined();
    expectTypeOf(profile.communityUpgrades).toEqualTypeOf<SkyBlockProfileCommunityUpgrades>();
    expect(profile.createdTimestamp).toBeDefined();
    expectTypeOf(profile.createdTimestamp).toEqualTypeOf<number | null>();
    expect(profile.createdAt).toBeDefined();
    expectTypeOf(profile.createdAt).toEqualTypeOf<Date | null>();
    expect(profile.members).toBeDefined();
    expectTypeOf(profile.members).toEqualTypeOf<SkyBlockMember[]>();
    expect(profile.me).toBeDefined();
    expectTypeOf(profile.me).toEqualTypeOf<SkyBlockMember | null>();
    expect(profile.gameMode).toBeDefined();
    expectTypeOf(profile.gameMode).toEqualTypeOf<SkyBlockProfileType | null>();
    expect(profile.banking).toBeDefined();
    expectTypeOf(profile.banking).toEqualTypeOf<SkyBlockProfileBanking>();
    expect(profile.profileName).toBeDefined();
    expectTypeOf(profile.profileName).toEqualTypeOf<SkyBlockProfileName | 'UNKNOWN'>();
    expect(profile.selected).toBeDefined();
    expectTypeOf(profile.selected).toEqualTypeOf<boolean>();
    expect(profile.garden).toBeDefined();
    expectTypeOf(profile.garden).toEqualTypeOf<SkyBlockGarden | null>();
  });
  client.destroy();
});
