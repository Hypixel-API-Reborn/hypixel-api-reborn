import Client from '../Client.js';
import Errors from '../Errors.ts';
import RequestData from '../Private/RequestData.js';
import SkyBlockGarden from '../Structures/SkyBlock/Garden/SkyBlockGarden.js';
import SkyBlockGardenActiveVisitor from '../Structures/SkyBlock/Garden/SkyBlockGardenActiveVisitor.js';
import SkyBlockGardenComposter from '../Structures/SkyBlock/Garden/SkyBlockGardenComposter.js';
import SkyBlockGardenCropMilestones from '../Structures/SkyBlock/Garden/SkyBlockGardenCropMilestones.js';
import SkyBlockGardenCropsUpgrades from '../Structures/SkyBlock/Garden/SkyBlockGardenCropsUpgrades.js';
import SkyBlockGardenVisitors from '../Structures/SkyBlock/Garden/SkyBlockGardenVisitors.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { BarnPlot, BarnSkin, SkillLevelData } from '../Types/SkyBlock.js';

test('getSkyBlockGarden (no input)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  await expect(() => client.getSkyBlockGarden()).rejects.toThrowError(Errors.NO_UUID);
  client.destroy();
});

test('getSkyBlockGarden (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getSkyBlockGarden('ed9b9d6d-d9b7-43b1-9841-5d0c20b55494', { raw: true });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<SkyBlockGarden | RequestData>();
  client.destroy();
});

test('getSkyBlockGarden', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getSkyBlockGarden('ed9b9d6d-d9b7-43b1-9841-5d0c20b55494');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockGarden);
  expectTypeOf(data).toEqualTypeOf<SkyBlockGarden | RequestData>();
  expect(data.isRaw()).toBe(false);
  if (data.isRaw()) return;
  expect(data.level).toBeDefined();
  expectTypeOf(data.level).toEqualTypeOf<SkillLevelData>();
  expect(data.barnSkin).toBeDefined();
  expectTypeOf(data.barnSkin).toEqualTypeOf<BarnSkin>();
  expect(data.unlockedBarnSkins).toBeDefined();
  expectTypeOf(data.unlockedBarnSkins).toEqualTypeOf<BarnSkin[]>();
  expect(data.unlockedPlots).toBeDefined();
  expectTypeOf(data.unlockedPlots).toEqualTypeOf<BarnPlot[]>();
  expect(data.visitors).toBeDefined();
  expectTypeOf(data.visitors).toEqualTypeOf<SkyBlockGardenVisitors>();
  expect(data.currentVisitors).toBeDefined();
  expectTypeOf(data.currentVisitors).toEqualTypeOf<SkyBlockGardenActiveVisitor[]>();
  expect(data.cropMilestones).toBeDefined();
  expectTypeOf(data.cropMilestones).toEqualTypeOf<SkyBlockGardenCropMilestones>();
  expect(data.composter).toBeDefined();
  expectTypeOf(data.composter).toEqualTypeOf<SkyBlockGardenComposter>();
  expect(data.cropUpgrades).toBeDefined();
  expectTypeOf(data.cropUpgrades).toEqualTypeOf<SkyBlockGardenCropsUpgrades>();
  client.destroy();
});
