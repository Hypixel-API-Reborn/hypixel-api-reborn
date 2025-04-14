import Warlords from './Warlords.js';
import WarlordsClass from './WarlordsClass.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { WarlordsClasses } from '../../../Types/Player.js';

test('Warlords', () => {
  const data = new Warlords({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(Warlords);
  expectTypeOf(data).toEqualTypeOf<Warlords>();
  expect(data.coins).toBeDefined();
  expect(data.coins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.coins).toEqualTypeOf<number>();
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
  expect(data.losses).toBeDefined();
  expect(data.losses).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.losses).toEqualTypeOf<number>();
  expect(data.WLR).toBeDefined();
  expect(data.WLR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.WLR).toEqualTypeOf<number>();
  expect(data.winStreak).toBeDefined();
  expect(data.winStreak).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.winStreak).toEqualTypeOf<number>();
  expect(data.assists).toBeDefined();
  expect(data.assists).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.assists).toEqualTypeOf<number>();
  expect(data.class).toBeDefined();
  expectTypeOf(data.class).toEqualTypeOf<WarlordsClasses | 'None'>();
  expect(data.pyromancer).toBeDefined();
  expectTypeOf(data.pyromancer).toEqualTypeOf<WarlordsClass>();
  expect(data.mage).toBeDefined();
  expectTypeOf(data.mage).toEqualTypeOf<WarlordsClass>();
  expect(data.thunderlord).toBeDefined();
  expectTypeOf(data.thunderlord).toEqualTypeOf<WarlordsClass>();
  expect(data.shaman).toBeDefined();
  expectTypeOf(data.shaman).toEqualTypeOf<WarlordsClass>();
  expect(data.earthwarden).toBeDefined();
  expectTypeOf(data.earthwarden).toEqualTypeOf<WarlordsClass>();
  expect(data.aquamancer).toBeDefined();
  expectTypeOf(data.aquamancer).toEqualTypeOf<WarlordsClass>();
  expect(data.paladin).toBeDefined();
  expectTypeOf(data.paladin).toEqualTypeOf<WarlordsClass>();
  expect(data.avenger).toBeDefined();
  expectTypeOf(data.avenger).toEqualTypeOf<WarlordsClass>();
  expect(data.warrior).toBeDefined();
  expectTypeOf(data.warrior).toEqualTypeOf<WarlordsClass>();
  expect(data.defender).toBeDefined();
  expectTypeOf(data.defender).toEqualTypeOf<WarlordsClass>();
  expect(data.cryomancer).toBeDefined();
  expectTypeOf(data.cryomancer).toEqualTypeOf<WarlordsClass>();
  expect(data.crusader).toBeDefined();
  expectTypeOf(data.crusader).toEqualTypeOf<WarlordsClass>();
  expect(data.berserker).toBeDefined();
  expectTypeOf(data.berserker).toEqualTypeOf<WarlordsClass>();
  expect(data.protector).toBeDefined();
  expectTypeOf(data.protector).toEqualTypeOf<WarlordsClass>();
  expect(data.revenant).toBeDefined();
  expectTypeOf(data.revenant).toEqualTypeOf<WarlordsClass>();
  expect(data.spiritguard).toBeDefined();
  expectTypeOf(data.spiritguard).toEqualTypeOf<WarlordsClass>();
});
