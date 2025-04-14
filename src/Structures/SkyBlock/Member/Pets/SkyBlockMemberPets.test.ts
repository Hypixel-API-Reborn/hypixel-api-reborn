import SkyBlockMemberPets from './SkyBlockMemberPets.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyBlockMemberPet from './SkyBlockMemberPet.js';
import type SkyBlockMemberPetsAutoPets from './SkyBlockMemberPetsAutoPets.js';
import type SkyBlockMemberPetsCare from './SkyBlockMemberPetsCare.js';

test('SkyBlockMemberPets', () => {
  const data = new SkyBlockMemberPets({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberPets);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberPets>();
  expect(data.petCare).toBeDefined();
  expectTypeOf(data.petCare).toEqualTypeOf<SkyBlockMemberPetsCare>();
  expect(data.autoPetRules).toBeDefined();
  expectTypeOf(data.autoPetRules).toEqualTypeOf<SkyBlockMemberPetsAutoPets>();
  expect(data.pets).toBeDefined();
  expectTypeOf(data.pets).toEqualTypeOf<SkyBlockMemberPet[]>();
  expect(data.oresMined).toBeDefined();
  expectTypeOf(data.oresMined).toEqualTypeOf<number>();
  expect(data.seaCreaturesKilled).toBeDefined();
  expectTypeOf(data.seaCreaturesKilled).toEqualTypeOf<number>();
  expect(data.totalExpGained).toBeDefined();
  expectTypeOf(data.totalExpGained).toEqualTypeOf<number>();
});
