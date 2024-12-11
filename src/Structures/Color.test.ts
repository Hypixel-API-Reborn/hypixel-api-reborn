import Color from './Color.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { ColorCode, ColorHex, ColorString, InGameCode } from '../Types/Color.js';

test('Color', () => {
  const data = new Color('BLACK');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(Color);
  expectTypeOf(data).toEqualTypeOf<Color>();
  expect(data.color).toBeDefined();
  expectTypeOf(data.color).toEqualTypeOf<ColorCode>();
  expect(data.color).toBe('BLACK');
  expect(data.toString()).toBeDefined();
  expectTypeOf(data.toString()).toEqualTypeOf<ColorString>();
  expect(data.toString()).toBe('Black');
  expect(data.toHex()).toBeDefined();
  expectTypeOf(data.toHex()).toEqualTypeOf<ColorHex>();
  expect(data.toHex()).toBe('#000000');
  expect(data.toCode()).toBeDefined();
  expectTypeOf(data.toCode()).toEqualTypeOf<ColorCode>();
  expect(data.toCode()).toBe('BLACK');
  expect(data.toInGameCode()).toBeDefined();
  expectTypeOf(data.toInGameCode()).toEqualTypeOf<InGameCode>();
  expect(data.toInGameCode()).toBe('§0');
});
