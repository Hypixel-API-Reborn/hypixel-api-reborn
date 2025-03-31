import Client from '../Client.js';
import RequestData from '../Private/RequestData.js';
import SkyblockGarden from '../Structures/SkyBlock/Garden/SkyblockGarden.js';
import SkyblockGardenActiveVisitor from '../Structures/SkyBlock/Garden/SkyblockGardenActiveVisitor.js';
import SkyblockGardenComposter from '../Structures/SkyBlock/Garden/SkyblockGardenComposter.js';
import SkyblockGardenCropMilestones from '../Structures/SkyBlock/Garden/SkyblockGardenCropMilestones.js';
import SkyblockGardenCropsUpgrades from '../Structures/SkyBlock/Garden/SkyblockGardenCropsUpgrades.js';
import SkyblockGardenVisitors from '../Structures/SkyBlock/Garden/SkyblockGardenVisitors.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { BarnPlot, BarnSkin, SkillLevelData } from '../Types/Skyblock.js';

test('getSkyblockGarden (no input)', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  expect(() => client.getSkyblockGarden()).rejects.toThrowError(client.errors.NO_UUID);
  client.destroy();
});

test('getSkyblockGarden (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getSkyblockGarden('ed9b9d6d-d9b7-43b1-9841-5d0c20b55494', { raw: true });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<SkyblockGarden | RequestData>();
  client.destroy();
});

test('getSkyblockGarden', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  let data = await client.getSkyblockGarden('ed9b9d6d-d9b7-43b1-9841-5d0c20b55494');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockGarden);
  expectTypeOf(data).toEqualTypeOf<SkyblockGarden | RequestData>();
  data = data as SkyblockGarden;
  expect(data.level).toBeDefined();
  expectTypeOf(data.level).toEqualTypeOf<SkillLevelData>();
  expect(data.barnSkin).toBeDefined();
  expectTypeOf(data.barnSkin).toEqualTypeOf<BarnSkin>();
  expect(data.unlockedBarnSkins).toBeDefined();
  expectTypeOf(data.unlockedBarnSkins).toEqualTypeOf<BarnSkin[]>();
  expect(data.unlockedPlots).toBeDefined();
  expectTypeOf(data.unlockedPlots).toEqualTypeOf<BarnPlot[]>();
  expect(data.visitors).toBeDefined();
  expectTypeOf(data.visitors).toEqualTypeOf<SkyblockGardenVisitors>();
  expect(data.currentVisitors).toBeDefined();
  expectTypeOf(data.currentVisitors).toEqualTypeOf<SkyblockGardenActiveVisitor[]>();
  expect(data.cropMilestones).toBeDefined();
  expectTypeOf(data.cropMilestones).toEqualTypeOf<SkyblockGardenCropMilestones>();
  expect(data.composter).toBeDefined();
  expectTypeOf(data.composter).toEqualTypeOf<SkyblockGardenComposter>();
  expect(data.cropUpgrades).toBeDefined();
  expectTypeOf(data.cropUpgrades).toEqualTypeOf<SkyblockGardenCropsUpgrades>();
  client.destroy();
});
