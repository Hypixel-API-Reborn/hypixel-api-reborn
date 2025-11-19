import EnderSpleef from './EnderSpleef.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { ArcadeEnderSpleefTrail } from '../../../Types/Player.js';

test('EnderSpleef', () => {
  const data = new EnderSpleef({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(EnderSpleef);
  expectTypeOf(data).toEqualTypeOf<EnderSpleef>();
  expect(data.bigshotPowerupActivations).toBeDefined();
  expect(data.bigshotPowerupActivations).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.bigshotPowerupActivations).toEqualTypeOf<number>();
  expect(data.blocksDestroyed).toBeDefined();
  expect(data.blocksDestroyed).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.blocksDestroyed).toEqualTypeOf<number>();
  expect(data.spleefTrail).toBeDefined();
  expectTypeOf(data.spleefTrail).toEqualTypeOf<ArcadeEnderSpleefTrail | 'UNKNOWN'>();
  expect(data.powerupActivations).toBeDefined();
  expect(data.powerupActivations).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.powerupActivations).toEqualTypeOf<number>();
  expect(data.tripleshotPowerupActivations).toBeDefined();
  expect(data.tripleshotPowerupActivations).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.tripleshotPowerupActivations).toEqualTypeOf<number>();
  expect(data.wins).toBeDefined();
  expect(data.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.wins).toEqualTypeOf<number>();
});
