import Parkour from './Parkour.js';
import { expect, expectTypeOf, test } from 'vitest';

test('Parkour', () => {
  const data = new Parkour({ stats: 'meow' }, { stats: 'meow' }, 'meow');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(Parkour);
  expectTypeOf(data).toEqualTypeOf<Parkour>();
  expect(data.location).toBeDefined();
  expectTypeOf(data.location).toEqualTypeOf<string>();
  expect(data.timeStart).toBeDefined();
  expectTypeOf(data.timeStart).toEqualTypeOf<number>();
  expect(data.timeTook).toBeDefined();
  expectTypeOf(data.timeTook).toEqualTypeOf<number>();
  expect(data.checkPoints).toBeDefined();
  expectTypeOf(data.checkPoints).toEqualTypeOf<number[]>();
});
