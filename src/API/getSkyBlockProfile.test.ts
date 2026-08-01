/* eslint-disable @stylistic/max-len  */
import Client from '../Client.js';
import Errors from '../Errors.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockGarden from '../Structures/SkyBlock/Garden/SkyBlockGarden.js';
import SkyBlockMember from '../Structures/SkyBlock/Member/SkyBlockMember.js';
import SkyBlockProfile from '../Structures/SkyBlock/Profile/SkyBlockProfile.js';
import SkyBlockProfileBanking from '../Structures/SkyBlock/Profile/Banking/SkyBlockProfileBanking.js';
import SkyBlockProfileCommunityUpgrades from '../Structures/SkyBlock/Profile/CommunityUpgrades/SkyBlockProfileCommunityUpgrades.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { SkyBlockProfileName, SkyBlockProfileType } from '../Types/SkyBlock.js';
/* eslint-enable @stylistic/max-len  */

test('getSkyBlockProfile (no input)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  await expect(() => client.getSkyBlockProfile()).rejects.toThrowError(Errors.NO_UUID);
  client.destroy();
});

test('getSkyBlockProfile (no profiles)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  await expect(() => client.getSkyBlockProfile('ce6685dd-78dd-4418-9f6f-b01cf9778daa')).rejects.toThrowError(
    Errors.NO_SKYBLOCK_PROFILES
  );
  client.destroy();
});

test('getSkyBlockProfile', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const data = await client.getSkyBlockProfile('ed9b9d6d-d9b7-43b1-9841-5d0c20b55494');
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<RequestData<SkyBlockProfile>>();
  expect(data.parsed.profileId).toBeDefined();
  expectTypeOf(data.parsed.profileId).toEqualTypeOf<string>();
  expect(data.parsed.communityUpgrades).toBeDefined();
  expectTypeOf(data.parsed.communityUpgrades).toEqualTypeOf<SkyBlockProfileCommunityUpgrades>();
  expect(data.parsed.createdTimestamp).toBeDefined();
  expectTypeOf(data.parsed.createdTimestamp).toEqualTypeOf<number | null>();
  expect(data.parsed.createdAt).toBeDefined();
  expectTypeOf(data.parsed.createdAt).toEqualTypeOf<Date | null>();
  expect(data.parsed.members).toBeDefined();
  expectTypeOf(data.parsed.members).toEqualTypeOf<SkyBlockMember[]>();
  expect(data.parsed.me).toBeDefined();
  expectTypeOf(data.parsed.me).toEqualTypeOf<SkyBlockMember | null>();
  expect(data.parsed.gameMode).toBeDefined();
  expectTypeOf(data.parsed.gameMode).toEqualTypeOf<SkyBlockProfileType | null>();
  expect(data.parsed.banking).toBeDefined();
  expectTypeOf(data.parsed.banking).toEqualTypeOf<SkyBlockProfileBanking>();
  expect(data.parsed.profileName).toBeDefined();
  expectTypeOf(data.parsed.profileName).toEqualTypeOf<SkyBlockProfileName | 'UNKNOWN'>();
  expect(data.parsed.selected).toBeDefined();
  expectTypeOf(data.parsed.selected).toEqualTypeOf<boolean>();
  expect(data.parsed.garden).toBeDefined();
  expectTypeOf(data.parsed.garden).toEqualTypeOf<RequestData<SkyBlockGarden> | null>();
  client.destroy();
});
