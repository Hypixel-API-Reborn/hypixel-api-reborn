import CopsAndCrimsGun from './CopsAndCrimsGun.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { CopsAndCrimsGuns } from '../../../Types/Player.js';

test('CopsAndCrimsGun', () => {
  const data = new CopsAndCrimsGun({ stats: 'meow' }, 'smg');
  expect(data).toBeInstanceOf(CopsAndCrimsGun);
  expectTypeOf(data).toEqualTypeOf<CopsAndCrimsGun>();
  expect(data.gunName).toBeDefined();
  expectTypeOf(data.gunName).toEqualTypeOf<CopsAndCrimsGuns>();
  expect(data.damageIncrease).toBeDefined();
  expect(data.damageIncrease).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.damageIncrease).toEqualTypeOf<number>();
  expect(data.recoilReduction).toBeDefined();
  expect(data.recoilReduction).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.recoilReduction).toEqualTypeOf<number>();
  expect(data.reloadSpeedReduction).toBeDefined();
  expect(data.reloadSpeedReduction).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.reloadSpeedReduction).toEqualTypeOf<number>();
  expect(data.costReduction).toBeDefined();
  expect(data.costReduction).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.costReduction).toEqualTypeOf<number>();
  expect(data.kills).toBeDefined();
  expect(data.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.kills).toEqualTypeOf<number>();
  expect(data.headshots).toBeDefined();
  expect(data.headshots).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.headshots).toEqualTypeOf<number>();
});
