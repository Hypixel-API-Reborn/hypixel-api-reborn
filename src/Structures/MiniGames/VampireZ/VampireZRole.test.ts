import VampireZRole from './VampireZRole.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { VampireZRoles } from '../../../Types/Player.js';

test('VampireZRole', () => {
  const data = new VampireZRole({ stats: 'meow' }, 'human');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(VampireZRole);
  expectTypeOf(data).toEqualTypeOf<VampireZRole>();
  expect(data.role).toBeDefined();
  expectTypeOf(data.role).toEqualTypeOf<VampireZRoles>();
  expect(data.kills).toBeDefined();
  expect(data.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.kills).toEqualTypeOf<number>();
  expect(data.deaths).toBeDefined();
  expect(data.deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.deaths).toEqualTypeOf<number>();
  expect(data.KDR).toBeDefined();
  expect(data.KDR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.KDR).toEqualTypeOf<number>();
  expect(data.wins).toBeDefined();
  expect(data.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.wins).toEqualTypeOf<number>();
});
