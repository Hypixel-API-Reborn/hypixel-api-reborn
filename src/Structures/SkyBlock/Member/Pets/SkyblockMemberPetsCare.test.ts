import SkyblockMemberPetsCare from './SkyblockMemberPetsCare.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { SacrificedPets } from '../../../../Types/Skyblock.js';

test('SkyblockMemberPetsCare', () => {
  const data = new SkyblockMemberPetsCare({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberPetsCare);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberPetsCare>();
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
