import PlayerCosmeticsPet from './PlayerCosmeticsPet.js';
import PlayerCosmeticsPets from './PlayerCosmeticsPets.js';
import PlayerCosmeticsPetsConsumables from './PlayerCosmeticsPetsConsumables.js';
import { expect, expectTypeOf, test } from 'vitest';

test('PlayerCosmeticsPets', () => {
  const data = new PlayerCosmeticsPets({ stats: 'meow' }, ['meow']);
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(PlayerCosmeticsPets);
  expectTypeOf(data).toEqualTypeOf<PlayerCosmeticsPets>();
  expect(data.lastJourney).toBeDefined();
  expectTypeOf(data.lastJourney).toEqualTypeOf<number | null>();
  expect(data.lastJourneyAt).toBeDefined();
  expectTypeOf(data.lastJourneyAt).toEqualTypeOf<Date | null>();
  expect(data.consumables).toBeDefined();
  expect(data.consumables).toBeInstanceOf(PlayerCosmeticsPetsConsumables);
  expectTypeOf(data.consumables).toEqualTypeOf<PlayerCosmeticsPetsConsumables>();
  expect(data.pets).toBeDefined();
  data.pets.forEach((pet) => {
    expect(pet).toBeDefined();
    expectTypeOf(pet).toEqualTypeOf<PlayerCosmeticsPet>();
  });
  expectTypeOf(data.pets).toEqualTypeOf<PlayerCosmeticsPet[]>();
});
