import Quakecraft from './Quakecraft.js';
import QuakecraftMode from './QuakecraftMode.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { ColorCode } from '../../../Types/Color.js';
import type {
  QuakecraftBarrels,
  QuakecraftCase,
  QuakecraftKillSounds,
  QuakecraftMuzzle,
  QuakecraftSights,
  QuakecraftTriggers
} from '../../../Types/Player.js';

test('Quakecraft', () => {
  const data = new Quakecraft({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(Quakecraft);
  expectTypeOf(data).toEqualTypeOf<Quakecraft>();
  expect(data.coins).toBeDefined();
  expect(data.coins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.coins).toEqualTypeOf<number>();
  expect(data.solo).toBeDefined();
  expectTypeOf(data.solo).toEqualTypeOf<QuakecraftMode>();
  expect(data.teams).toBeDefined();
  expectTypeOf(data.teams).toEqualTypeOf<QuakecraftMode>();
  expect(data.wins).toBeDefined();
  expect(data.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.wins).toEqualTypeOf<number>();
  expect(data.kills).toBeDefined();
  expect(data.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.kills).toEqualTypeOf<number>();
  expect(data.deaths).toBeDefined();
  expect(data.deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.deaths).toEqualTypeOf<number>();
  expect(data.KDR).toBeDefined();
  expect(data.KDR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.KDR).toEqualTypeOf<number>();
  expect(data.killStreaks).toBeDefined();
  expect(data.killStreaks).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.killStreaks).toEqualTypeOf<number>();
  expect(data.distanceTravelled).toBeDefined();
  expect(data.distanceTravelled).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.distanceTravelled).toEqualTypeOf<number>();
  expect(data.shotsFired).toBeDefined();
  expect(data.shotsFired).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.shotsFired).toEqualTypeOf<number>();
  expect(data.headShots).toBeDefined();
  expect(data.headShots).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.headShots).toEqualTypeOf<number>();
  expect(data.instantRespawn).toBeDefined();
  expectTypeOf(data.instantRespawn).toEqualTypeOf<boolean>();
  expect(data.killPrefixColor).toBeDefined();
  expectTypeOf(data.killPrefixColor).toEqualTypeOf<ColorCode>();
  expect(data.showPrefix).toBeDefined();
  expectTypeOf(data.showPrefix).toEqualTypeOf<boolean>();
  expect(data.killSound).toBeDefined();
  expectTypeOf(data.killSound).toEqualTypeOf<QuakecraftKillSounds | 'None'>();
  expect(data.barrel).toBeDefined();
  expectTypeOf(data.barrel).toEqualTypeOf<QuakecraftBarrels | 'None'>();
  expect(data.case).toBeDefined();
  expectTypeOf(data.case).toEqualTypeOf<QuakecraftCase | 'None'>();
  expect(data.muzzle).toBeDefined();
  expectTypeOf(data.muzzle).toEqualTypeOf<QuakecraftMuzzle | 'None'>();
  expect(data.sight).toBeDefined();
  expectTypeOf(data.sight).toEqualTypeOf<QuakecraftSights | 'None'>();
  expect(data.trigger).toBeDefined();
  expectTypeOf(data.trigger).toEqualTypeOf<QuakecraftTriggers | 'None'>();
});
