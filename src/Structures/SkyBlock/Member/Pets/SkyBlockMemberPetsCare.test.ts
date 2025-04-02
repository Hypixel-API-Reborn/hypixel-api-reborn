import SkyBlockMemberPetsCare from './SkyBlockMemberPetsCare.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { SacrificedPets } from '../../../../Types/SkyBlock.js';

test('SkyBlockMemberPetsCare', () => {
  const data = new SkyBlockMemberPetsCare({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberPetsCare);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberPetsCare>();
  expect(data.coinsSpent).toBeDefined();
  expectTypeOf(data.coinsSpent).toEqualTypeOf<number>();
  expect(data.petsSacrificed).toBeDefined();
  expectTypeOf(data.petsSacrificed).toEqualTypeOf<SacrificedPets[]>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => number>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toEqual(data.coinsSpent);
  expectTypeOf(data.toString()).toEqualTypeOf<number>();
});
