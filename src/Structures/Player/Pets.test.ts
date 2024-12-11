import Pet from './Pet.js';
import PetConsumables from './PetConsumables.js';
import Pets from './Pets.js';
import { expect, expectTypeOf, test } from 'vitest';

test('Pets', () => {
  const data = new Pets({ stats: 'meow' }, ['meow']);
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(Pets);
  expectTypeOf(data).toEqualTypeOf<Pets>();
  expect(data.pets).toBeDefined();
  expectTypeOf(data.pets).toEqualTypeOf<Pet[]>();
  expect(data.lastJourneyTimestamp).toBeDefined();
  expectTypeOf(data.lastJourneyTimestamp).toEqualTypeOf<number | null>();
  expect(data.lastJourneyAt).toBeDefined();
  expectTypeOf(data.lastJourneyAt).toEqualTypeOf<Date | null>();
  expect(data.petConsumables).toBeDefined();
  expectTypeOf(data.petConsumables).toEqualTypeOf<PetConsumables>();
});
