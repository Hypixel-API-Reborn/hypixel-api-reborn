import QuakecraftMode from './QuakecraftMode.js';
import { expect, expectTypeOf, test } from 'vitest';

test('QuakecraftMode', () => {
  const data = new QuakecraftMode({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(QuakecraftMode);
  expectTypeOf(data).toEqualTypeOf<QuakecraftMode>();
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
  expect(data.headshots).toBeDefined();
  expect(data.headshots).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.headshots).toEqualTypeOf<number>();
});
