import SkyblockMemberPets from './SkyblockMemberPets.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyblockMemberPet from './SkyblockMemberPet.js';
import type SkyblockMemberPetsAutoPets from './SkyblockMemberPetsAutoPets.js';
import type SkyblockMemberPetsCare from './SkyblockMemberPetsCare.js';

test('SkyblockMemberPets', () => {
  const data = new SkyblockMemberPets({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberPets);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberPets>();
  expect(data.petCare).toBeDefined();
  expectTypeOf(data.petCare).toEqualTypeOf<SkyblockMemberPetsCare>();
  expect(data.autoPetRules).toBeDefined();
  expectTypeOf(data.autoPetRules).toEqualTypeOf<SkyblockMemberPetsAutoPets>();
  expect(data.pets).toBeDefined();
  expectTypeOf(data.pets).toEqualTypeOf<SkyblockMemberPet[]>();
  expect(data.oresMined).toBeDefined();
  expectTypeOf(data.oresMined).toEqualTypeOf<number>();
  expect(data.seaCreaturesKilled).toBeDefined();
  expectTypeOf(data.seaCreaturesKilled).toEqualTypeOf<number>();
  expect(data.totalExpGained).toBeDefined();
  expectTypeOf(data.totalExpGained).toEqualTypeOf<number>();
});
