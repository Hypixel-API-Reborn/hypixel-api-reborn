import GameCountsSuperSmashModes from './GameCountsSuperSmashModes.js';
import { expect, expectTypeOf, test } from 'vitest';

test('GameCountsSuperSmashModes', () => {
  const data = new GameCountsSuperSmashModes({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(GameCountsSuperSmashModes);
  expectTypeOf(data).toEqualTypeOf<GameCountsSuperSmashModes>();
  expect(data['1v1Normal']).toBeDefined();
  expect(data['1v1Normal']).toBeGreaterThanOrEqual(0);
  expectTypeOf(data['1v1Normal']).toEqualTypeOf<number>();
  expect(data.friendsNormal).toBeDefined();
  expect(data.friendsNormal).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.friendsNormal).toEqualTypeOf<number>();
  expect(data['2v2Normal']).toBeDefined();
  expect(data['2v2Normal']).toBeGreaterThanOrEqual(0);
  expectTypeOf(data['2v2Normal']).toEqualTypeOf<number>();
});
