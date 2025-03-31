import Client from '../Client.js';
import RequestData from '../Private/RequestData.js';
import SkyblockGarden from '../Structures/SkyBlock/Garden/SkyblockGarden.js';
import SkyblockMember from '../Structures/SkyBlock/Member/SkyblockMember.js';
import SkyblockProfile from '../Structures/SkyBlock/Profile/SkyblockProfile.js';
import SkyblockProfileBanking from '../Structures/SkyBlock/Profile/Banking/SkyblockProfileBanking.js';
// eslint-disable-next-line max-len
import SkyblockProfileCommunityUpgrades from '../Structures/SkyBlock/Profile/CommunityUpgrades/SkyblockProfileCommunityUpgrades.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { SkyblockProfileName, SkyblockProfileType } from '../Types/Skyblock.js';

test('getSkyblockProfiles (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getSkyblockProfiles('14727faefbdc4aff848cd2713eb9939e', { raw: true });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<Map<SkyblockProfileName | 'UNKNOWN', SkyblockProfile> | RequestData>();
  client.destroy();
});

test('getSkyblockProfiles (no input)', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  expect(() => client.getSkyblockProfiles()).rejects.toThrowError(client.errors.NO_NICKNAME_UUID);
  client.destroy();
});

test('getSkyblockProfiles (no profiles)', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  expect(() => client.getSkyblockProfiles('b45add7b081443909fb00aa9a3e15eb0')).rejects.toThrowError(
    client.errors.NO_SKYBLOCK_PROFILES
  );
  client.destroy();
});

test('getSkyblockProfiles', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  let data = await client.getSkyblockProfiles('14727faefbdc4aff848cd2713eb9939e');
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<Map<SkyblockProfileName | 'UNKNOWN', SkyblockProfile> | RequestData>();
  data = data as Map<SkyblockProfileName | 'UNKNOWN', SkyblockProfile>;
  data.forEach((profile) => {
    expect(profile).toBeDefined();
    expectTypeOf(profile).toEqualTypeOf<SkyblockProfile>();
    expect(profile.profileId).toBeDefined();
    expectTypeOf(profile.profileId).toEqualTypeOf<string>();
    expect(profile.communityUpgrades).toBeDefined();
    expectTypeOf(profile.communityUpgrades).toEqualTypeOf<SkyblockProfileCommunityUpgrades>();
    expect(profile.createdTimestamp).toBeDefined();
    expectTypeOf(profile.createdTimestamp).toEqualTypeOf<number | null>();
    expect(profile.createdAt).toBeDefined();
    expectTypeOf(profile.createdAt).toEqualTypeOf<Date | null>();
    expect(profile.members).toBeDefined();
    expectTypeOf(profile.members).toEqualTypeOf<SkyblockMember[]>();
    expect(profile.me).toBeDefined();
    expectTypeOf(profile.me).toEqualTypeOf<SkyblockMember | null>();
    expect(profile.gameMode).toBeDefined();
    expectTypeOf(profile.gameMode).toEqualTypeOf<SkyblockProfileType | null>();
    expect(profile.banking).toBeDefined();
    expectTypeOf(profile.banking).toEqualTypeOf<SkyblockProfileBanking>();
    expect(profile.profileName).toBeDefined();
    expectTypeOf(profile.profileName).toEqualTypeOf<SkyblockProfileName | 'UNKNOWN'>();
    expect(profile.selected).toBeDefined();
    expectTypeOf(profile.selected).toEqualTypeOf<boolean>();
    expect(profile.garden).toBeDefined();
    expectTypeOf(profile.garden).toEqualTypeOf<SkyblockGarden | null>();
  });
  client.destroy();
});
