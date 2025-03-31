import SkyblockMemberCrimsonIsle from './SkyblockMemberCrimsonIsle.js';
import SkyblockMemberCrimsonIsleAbiphone from './SkyblockMemberCrimsonIsleAbiphone.js';
import SkyblockMemberCrimsonIsleDojo from './SkyblockMemberCrimsonIsleDojo.js';
import SkyblockMemberCrimsonIsleKuudra from './SkyblockMemberCrimsonIsleKuudra.js';
import SkyblockMemberCrimsonIsleMatriarch from './SkyblockMemberCrimsonIsleMatriarch.js';
import SkyblockMemberCrimsonIsleTrophyFish from './SkyblockMemberCrimsonIsleTrophyFish.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { CrimsonIsleBoss, CrimsonIsleFaction } from '../../../../Types/Skyblock.js';

test('SkyblockMemberCrimsonIsle', () => {
  const data = new SkyblockMemberCrimsonIsle({ stats: 'meow' }, { stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberCrimsonIsle);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberCrimsonIsle>();
  expect(data.dojo).toBeDefined();
  expectTypeOf(data.dojo).toEqualTypeOf<SkyblockMemberCrimsonIsleDojo>();
  expect(data.kuudra).toBeDefined();
  expectTypeOf(data.kuudra).toEqualTypeOf<SkyblockMemberCrimsonIsleKuudra>();
  expect(data.matriarch).toBeDefined();
  expectTypeOf(data.matriarch).toEqualTypeOf<SkyblockMemberCrimsonIsleMatriarch>();
  expect(data.abiphone).toBeDefined();
  expectTypeOf(data.abiphone).toEqualTypeOf<SkyblockMemberCrimsonIsleAbiphone>();
  expect(data.faction).toBeDefined();
  expectTypeOf(data.faction).toEqualTypeOf<CrimsonIsleFaction | 'UNKNOWN'>();
  expect(data.magesReputation).toBeDefined();
  expectTypeOf(data.magesReputation).toEqualTypeOf<number>();
  expect(data.barbariansReputation).toBeDefined();
  expectTypeOf(data.barbariansReputation).toEqualTypeOf<number>();
  expect(data.lastMiniBossesKilled).toBeDefined();
  expectTypeOf(data.lastMiniBossesKilled).toEqualTypeOf<CrimsonIsleBoss[]>();
  expect(data.trophyFishing).toBeDefined();
  expectTypeOf(data.trophyFishing).toEqualTypeOf<SkyblockMemberCrimsonIsleTrophyFish>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => CrimsonIsleFaction | 'UNKNOWN'>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toEqual(data.faction);
  expectTypeOf(data.toString()).toEqualTypeOf<CrimsonIsleFaction | 'UNKNOWN'>();
});
