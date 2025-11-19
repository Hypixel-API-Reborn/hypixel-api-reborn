import DragonWars from './DragonWars.js';
import { expect, expectTypeOf, test } from 'vitest';

test('DragonWars', () => {
  const data = new DragonWars({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(DragonWars);
  expectTypeOf(data).toEqualTypeOf<DragonWars>();
  expect(data.kills).toBeDefined();
  expect(data.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.kills).toEqualTypeOf<number>();
  expect(data.wins).toBeDefined();
  expect(data.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.wins).toEqualTypeOf<number>();
});
