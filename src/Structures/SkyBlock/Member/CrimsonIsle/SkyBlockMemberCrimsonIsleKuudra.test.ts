import SkyBlockMemberCrimsonIsleKuudra from './SkyBlockMemberCrimsonIsleKuudra.js';
import SkyBlockMemberCrimsonIsleKuudraPartyFinder from './SkyBlockMemberCrimsonIsleKuudraPartyFinder.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberCrimsonIsleKuudra', () => {
  const data = new SkyBlockMemberCrimsonIsleKuudra({ stats: 'meow' }, { stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberCrimsonIsleKuudra);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberCrimsonIsleKuudra>();
  expect(data.basicCompletions).toBeDefined();
  expectTypeOf(data.basicCompletions).toEqualTypeOf<number>();
  expect(data.highestWaveBasic).toBeDefined();
  expectTypeOf(data.highestWaveBasic).toEqualTypeOf<number>();
  expect(data.hotCompletions).toBeDefined();
  expectTypeOf(data.hotCompletions).toEqualTypeOf<number>();
  expect(data.highestWaveHot).toBeDefined();
  expectTypeOf(data.highestWaveHot).toEqualTypeOf<number>();
  expect(data.burningCompletions).toBeDefined();
  expectTypeOf(data.burningCompletions).toEqualTypeOf<number>();
  expect(data.highestWaveBurning).toBeDefined();
  expectTypeOf(data.highestWaveBurning).toEqualTypeOf<number>();
  expect(data.fieryCompletions).toBeDefined();
  expectTypeOf(data.fieryCompletions).toEqualTypeOf<number>();
  expect(data.highestWaveFiery).toBeDefined();
  expectTypeOf(data.highestWaveFiery).toEqualTypeOf<number>();
  expect(data.infernalCompletions).toBeDefined();
  expectTypeOf(data.infernalCompletions).toEqualTypeOf<number>();
  expect(data.highestWaveInfernal).toBeDefined();
  expectTypeOf(data.highestWaveInfernal).toEqualTypeOf<number>();
  expect(data.partyFinderOptions).toBeDefined();
  expectTypeOf(data.partyFinderOptions).toEqualTypeOf<SkyBlockMemberCrimsonIsleKuudraPartyFinder>();
  expect(data.totalCompletions).toBeDefined();
  expectTypeOf(data.totalCompletions).toEqualTypeOf<number>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => number>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toEqual(data.totalCompletions);
  expectTypeOf(data.toString()).toEqualTypeOf<number>();
});
