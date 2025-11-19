import Game from './Game.js';
import Status from './Status.js';
import { expect, expectTypeOf, test } from 'vitest';

test('Status', () => {
  const data = new Status({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(Status);
  expectTypeOf(data).toEqualTypeOf<Status>();
  expect(data.online).toBeDefined();
  expectTypeOf(data.online).toEqualTypeOf<boolean>();
  expect(data.game).toBeDefined();
  expectTypeOf(data.game).toEqualTypeOf<Game | null>();
  expect(data.mode).toBeDefined();
  expectTypeOf(data.mode).toEqualTypeOf<string | null>();
  expect(data.map).toBeDefined();
  expectTypeOf(data.map).toEqualTypeOf<string | null>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => 'Online' | 'Offline'>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toBe(data.online ? 'Online' : 'Offline');
  expectTypeOf(data.toString()).toEqualTypeOf<'Online' | 'Offline'>();
});
