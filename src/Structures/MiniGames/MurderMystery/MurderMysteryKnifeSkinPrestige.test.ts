import MurderMysteryKnifeSkinPrestige from './MurderMysteryKnifeSkinPrestige.ts';
import MurderMysteryKnifeSkinPrestigeXp from './MurderMysteryKnifeSkinPrestigeXp.ts';
import { expect, expectTypeOf, test } from 'vitest';
import type { MurderMysteryKnifeSkinRaw } from '../../../Types/index.ts';

test('MurderMysteryKnifeSkinPrestige', () => {
  const data = new MurderMysteryKnifeSkinPrestige({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(MurderMysteryKnifeSkinPrestige);
  expectTypeOf(data).toEqualTypeOf<MurderMysteryKnifeSkinPrestige>();
  expect(data.usePrestige).toBeDefined();
  expectTypeOf(data.usePrestige).toEqualTypeOf<MurderMysteryKnifeSkinRaw[]>();
  expect(data.xp).toBeDefined();
  expect(data.xp).toBeInstanceOf(MurderMysteryKnifeSkinPrestigeXp);
  expectTypeOf(data.xp).toEqualTypeOf<MurderMysteryKnifeSkinPrestigeXp>();
});
