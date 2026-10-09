import DrawTheirThing from './DrawTheirThing.ts';
import { expect, expectTypeOf, test } from 'vitest';

test('DrawTheirThing', () => {
  const data = new DrawTheirThing({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(DrawTheirThing);
  expectTypeOf(data).toEqualTypeOf<DrawTheirThing>();
  expect(data.wins).toBeDefined();
  expect(data.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.wins).toEqualTypeOf<number>();
});
