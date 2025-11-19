import MurderMysteryFavorites from './MurderMysteryFavorites.js';
import { expect, expectTypeOf, test } from 'vitest';
import type {
  MurderMysteryAnimatedHatRaw,
  MurderMysteryDeathCryRaw,
  MurderMysteryGestureRaw,
  MurderMysteryGravestoneRaw,
  MurderMysteryKillNoteRaw,
  MurderMysteryKnifeSkinRaw,
  MurderMysteryLastWordsRaw,
  MurderMysteryProjectileTrailRaw,
  MurderMysteryVictoryDanceRaw
} from '../../../Types/Player.js';

test('MurderMysteryFavorites', () => {
  const data = new MurderMysteryFavorites({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(MurderMysteryFavorites);
  expectTypeOf(data).toEqualTypeOf<MurderMysteryFavorites>();
  expect(data.animatedHat).toBeDefined();
  expectTypeOf(data.animatedHat).toEqualTypeOf<MurderMysteryAnimatedHatRaw[]>();
  expect(data.deathCry).toBeDefined();
  expectTypeOf(data.deathCry).toEqualTypeOf<MurderMysteryDeathCryRaw[]>();
  expect(data.gesture).toBeDefined();
  expectTypeOf(data.gesture).toEqualTypeOf<MurderMysteryGestureRaw[]>();
  expect(data.gravestone).toBeDefined();
  expectTypeOf(data.gravestone).toEqualTypeOf<MurderMysteryGravestoneRaw[]>();
  expect(data.killNote).toBeDefined();
  expectTypeOf(data.killNote).toEqualTypeOf<MurderMysteryKillNoteRaw[]>();
  expect(data.knifeSkin).toBeDefined();
  expectTypeOf(data.knifeSkin).toEqualTypeOf<MurderMysteryKnifeSkinRaw[]>();
  expect(data.lastWords).toBeDefined();
  expectTypeOf(data.lastWords).toEqualTypeOf<MurderMysteryLastWordsRaw[]>();
  expect(data.projectileTrail).toBeDefined();
  expectTypeOf(data.projectileTrail).toEqualTypeOf<MurderMysteryProjectileTrailRaw[]>();
  expect(data.victoryDance).toBeDefined();
  expectTypeOf(data.victoryDance).toEqualTypeOf<MurderMysteryVictoryDanceRaw[]>();
});
