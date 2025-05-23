import Client from '../Client.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockSkill from '../Structures/SkyBlock/Skills/SkyBlockSkill.js';
import SkyBlockSkills from '../Structures/SkyBlock/Skills/SkyBlockSkills.js';
import { expect, expectTypeOf, test } from 'vitest';

test('getSkyBlockSkills (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getSkyBlockSkills({ raw: true });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<SkyBlockSkills | RequestData>();
  client.destroy();
});

test('getSkyBlockSkills', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  let data = await client.getSkyBlockSkills();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<SkyBlockSkills | RequestData>();
  data = data as SkyBlockSkills;
  expect(data.lastUpdated).toBeDefined();
  expectTypeOf(data.lastUpdated).toEqualTypeOf<number>();
  expect(data.lastUpdatedAt).toBeDefined();
  expectTypeOf(data.lastUpdatedAt).toEqualTypeOf<Date>();
  expect(data.version).toBeDefined();
  expectTypeOf(data.version).toEqualTypeOf<string>();
  expect(data.farming).toBeDefined();
  expectTypeOf(data.farming).toEqualTypeOf<SkyBlockSkill>();
  expect(data.mining).toBeDefined();
  expectTypeOf(data.mining).toEqualTypeOf<SkyBlockSkill>();
  expect(data.combat).toBeDefined();
  expectTypeOf(data.combat).toEqualTypeOf<SkyBlockSkill>();
  expect(data.foraging).toBeDefined();
  expectTypeOf(data.foraging).toEqualTypeOf<SkyBlockSkill>();
  expect(data.fishing).toBeDefined();
  expectTypeOf(data.fishing).toEqualTypeOf<SkyBlockSkill>();
  expect(data.enchanting).toBeDefined();
  expectTypeOf(data.enchanting).toEqualTypeOf<SkyBlockSkill>();
  expect(data.alchemy).toBeDefined();
  expectTypeOf(data.alchemy).toEqualTypeOf<SkyBlockSkill>();
  expect(data.carpentry).toBeDefined();
  expectTypeOf(data.carpentry).toEqualTypeOf<SkyBlockSkill>();
  expect(data.runecrafting).toBeDefined();
  expectTypeOf(data.runecrafting).toEqualTypeOf<SkyBlockSkill>();
  expect(data.social).toBeDefined();
  expectTypeOf(data.social).toEqualTypeOf<SkyBlockSkill>();
  expect(data.taming).toBeDefined();
  expectTypeOf(data.taming).toEqualTypeOf<SkyBlockSkill>();
  client.destroy();
});
