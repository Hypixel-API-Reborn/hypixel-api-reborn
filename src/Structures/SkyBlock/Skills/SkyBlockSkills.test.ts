import SkyBlockSkills from './SkyBlockSkills.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyBlockSkill from './SkyBlockSkill.js';

test('SkyBlockSkills', () => {
  const data = new SkyBlockSkills({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockSkills);
  expectTypeOf(data).toEqualTypeOf<SkyBlockSkills>();
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
});
