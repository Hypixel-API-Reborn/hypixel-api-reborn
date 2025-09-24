/* eslint-disable @stylistic/max-len */
import SkyBlockMemberCrimsonIsle from './SkyBlockMemberCrimsonIsle.js';
import SkyBlockMemberCrimsonIsleAbiphone from './SkyBlockMemberCrimsonIsleAbiphone.js';
import SkyBlockMemberCrimsonIsleDojo from './SkyBlockMemberCrimsonIsleDojo.js';
import SkyBlockMemberCrimsonIsleKuudra from './SkyBlockMemberCrimsonIsleKuudra.js';
import SkyBlockMemberCrimsonIsleMatriarch from './SkyBlockMemberCrimsonIsleMatriarch.js';
import SkyBlockMemberCrimsonIsleTrophyFish from './SkyBlockMemberCrimsonIsleTrophyFish/SkyBlockMemberCrimsonIsleTrophyFish.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { CrimsonIsleBoss, CrimsonIsleFaction } from '../../../../Types/SkyBlock.js';
/* eslint-enable @stylistic/max-len */

test('SkyBlockMemberCrimsonIsle', () => {
  const data = new SkyBlockMemberCrimsonIsle({ stats: 'meow' }, { stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberCrimsonIsle);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberCrimsonIsle>();
  expect(data.dojo).toBeDefined();
  expectTypeOf(data.dojo).toEqualTypeOf<SkyBlockMemberCrimsonIsleDojo>();
  expect(data.kuudra).toBeDefined();
  expectTypeOf(data.kuudra).toEqualTypeOf<SkyBlockMemberCrimsonIsleKuudra>();
  expect(data.matriarch).toBeDefined();
  expectTypeOf(data.matriarch).toEqualTypeOf<SkyBlockMemberCrimsonIsleMatriarch>();
  expect(data.abiphone).toBeDefined();
  expectTypeOf(data.abiphone).toEqualTypeOf<SkyBlockMemberCrimsonIsleAbiphone>();
  expect(data.faction).toBeDefined();
  expectTypeOf(data.faction).toEqualTypeOf<CrimsonIsleFaction | 'UNKNOWN'>();
  expect(data.magesReputation).toBeDefined();
  expectTypeOf(data.magesReputation).toEqualTypeOf<number>();
  expect(data.barbariansReputation).toBeDefined();
  expectTypeOf(data.barbariansReputation).toEqualTypeOf<number>();
  expect(data.lastMiniBossesKilled).toBeDefined();
  expectTypeOf(data.lastMiniBossesKilled).toEqualTypeOf<CrimsonIsleBoss[]>();
  expect(data.trophyFishing).toBeDefined();
  expectTypeOf(data.trophyFishing).toEqualTypeOf<SkyBlockMemberCrimsonIsleTrophyFish>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => CrimsonIsleFaction | 'UNKNOWN'>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toEqual(data.faction);
  expectTypeOf(data.toString()).toEqualTypeOf<CrimsonIsleFaction | 'UNKNOWN'>();
});
