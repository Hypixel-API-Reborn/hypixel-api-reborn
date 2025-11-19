import PlayerParkour from './PlayerParkour.js';
import { expect, expectTypeOf, test } from 'vitest';

test('PlayerParkour', () => {
  const data = new PlayerParkour({ stats: 'meow' }, { stats: 'meow' }, 'mrrp');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(PlayerParkour);
  expectTypeOf(data).toEqualTypeOf<PlayerParkour>();
  expect(data.location).toBeDefined();
  expectTypeOf(data.location).toEqualTypeOf<string>();
  expect(data.timeStart).toBeDefined();
  expect(data.timeStart).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.timeStart).toEqualTypeOf<number>();
  expect(data.timeTook).toBeDefined();
  expect(data.timeTook).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.timeTook).toEqualTypeOf<number>();
  expect(data.checkPoints).toBeDefined();
  expectTypeOf(data.checkPoints).toEqualTypeOf<number[]>();
});
