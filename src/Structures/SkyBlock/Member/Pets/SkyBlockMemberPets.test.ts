import SkyBlockMemberPet from './SkyBlockMemberPet.js';
import SkyBlockMemberPets from './SkyBlockMemberPets.js';
import SkyBlockMemberPetsAutoPets from './SkyBlockMemberPetsAutoPets.js';
import SkyBlockMemberPetsCare from './SkyBlockMemberPetsCare.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberPets', () => {
  const data = new SkyBlockMemberPets({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberPets);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberPets>();
  expect(data.petCare).toBeDefined();
  expect(data.petCare).toBeInstanceOf(SkyBlockMemberPetsCare);
  expectTypeOf(data.petCare).toEqualTypeOf<SkyBlockMemberPetsCare>();
  expect(data.autoPetRules).toBeDefined();
  expect(data.autoPetRules).toBeInstanceOf(SkyBlockMemberPetsAutoPets);
  expectTypeOf(data.autoPetRules).toEqualTypeOf<SkyBlockMemberPetsAutoPets>();
  expect(data.pets).toBeDefined();
  expectTypeOf(data.pets).toEqualTypeOf<SkyBlockMemberPet[]>();
  expect(data.oresMined).toBeDefined();
  expect(data.oresMined).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.oresMined).toEqualTypeOf<number>();
  expect(data.seaCreaturesKilled).toBeDefined();
  expect(data.seaCreaturesKilled).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.seaCreaturesKilled).toEqualTypeOf<number>();
  expect(data.totalExpGained).toBeDefined();
  expect(data.totalExpGained).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.totalExpGained).toEqualTypeOf<number>();
});
