import FarmHunt from './FarmHunt.js';
import { expect, expectTypeOf, test } from 'vitest';

test('FarmHunt', () => {
  const data = new FarmHunt({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(FarmHunt);
  expectTypeOf(data).toEqualTypeOf<FarmHunt>();
  expect(data.wins).toBeDefined();
  expect(data.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.wins).toEqualTypeOf<number>();
  expect(data.winsAsAnimal).toBeDefined();
  expect(data.winsAsAnimal).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.winsAsAnimal).toEqualTypeOf<number>();
  expect(data.winsAsHunter).toBeDefined();
  expect(data.winsAsHunter).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.winsAsHunter).toEqualTypeOf<number>();
  expect(data.kills).toBeDefined();
  expect(data.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.kills).toEqualTypeOf<number>();
  expect(data.killsAsAnimal).toBeDefined();
  expect(data.killsAsAnimal).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.killsAsAnimal).toEqualTypeOf<number>();
  expect(data.killsAsHunter).toBeDefined();
  expect(data.killsAsHunter).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.killsAsHunter).toEqualTypeOf<number>();
  expect(data.tauntsUsed).toBeDefined();
  expect(data.tauntsUsed).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.tauntsUsed).toEqualTypeOf<number>();
  expect(data.riskyTauntsUsed).toBeDefined();
  expect(data.riskyTauntsUsed).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.riskyTauntsUsed).toEqualTypeOf<number>();
  expect(data.safeTauntsUsed).toBeDefined();
  expect(data.safeTauntsUsed).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.safeTauntsUsed).toEqualTypeOf<number>();
  expect(data.dangerousTauntsUsed).toBeDefined();
  expect(data.dangerousTauntsUsed).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.dangerousTauntsUsed).toEqualTypeOf<number>();
  expect(data.fireworkTauntsUsed).toBeDefined();
  expect(data.fireworkTauntsUsed).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.fireworkTauntsUsed).toEqualTypeOf<number>();
  expect(data.poop).toBeDefined();
  expect(data.poop).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.poop).toEqualTypeOf<number>();
});