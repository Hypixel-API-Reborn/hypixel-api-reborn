import Client from '../Client.js';
import RequestData from '../Private/RequestData.js';
import SkyblockGarden from '../Structures/SkyBlock/SkyblockGarden.js';
import { expect, expectTypeOf, test } from 'vitest';
import type {
  SkillLevel,
  SkyblockGardenComposter,
  SkyblockGardenCropMilestones,
  SkyblockGardenVisitor,
  SkyblockGarenCrops
} from '../Types/Skyblock.js';

test('getSkyblockGarden (no input)', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  expect(() => client.getSkyblockGarden()).rejects.toThrowError(client.errors.NO_UUID);
  client.destroy();
});

test('getSkyblockGarden (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getSkyblockGarden('805c9751-0ff1-4cb6-8e9c-1067bf3bc601', { raw: true });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<SkyblockGarden | RequestData>();
  client.destroy();
});

test('getSkyblockGarden', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  let data = await client.getSkyblockGarden('805c9751-0ff1-4cb6-8e9c-1067bf3bc601');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockGarden);
  expectTypeOf(data).toEqualTypeOf<SkyblockGarden | RequestData>();
  data = data as SkyblockGarden;
  expect(data.level).toBeDefined();
  expectTypeOf(data.level).toEqualTypeOf<SkillLevel>();
  expect(data.barnSkin).toBeDefined();
  expectTypeOf(data.barnSkin).toEqualTypeOf<string>();
  expect(data.unlockedPlots).toBeDefined();
  expectTypeOf(data.unlockedPlots).toEqualTypeOf<string[]>();
  expect(data.visitors).toBeDefined();
  expectTypeOf(data.visitors).toEqualTypeOf<SkyblockGardenVisitor>();
  expect(data.cropMilestones).toBeDefined();
  expectTypeOf(data.cropMilestones).toEqualTypeOf<SkyblockGardenCropMilestones>();
  expect(data.composter).toBeDefined();
  expectTypeOf(data.composter).toEqualTypeOf<SkyblockGardenComposter>();
  expect(data.cropUpgrades).toBeDefined();
  expectTypeOf(data.cropUpgrades).toEqualTypeOf<SkyblockGarenCrops>();

  client.destroy();
});
