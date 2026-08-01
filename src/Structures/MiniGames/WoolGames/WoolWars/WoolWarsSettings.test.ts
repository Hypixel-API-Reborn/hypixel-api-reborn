import WoolWarsSettings from './WoolWarsSettings.js';
import { expect, expectTypeOf, test } from 'vitest';

test('WoolWarsSettings', () => {
  const data = new WoolWarsSettings({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(WoolWarsSettings);
  expectTypeOf(data).toEqualTypeOf<WoolWarsSettings>();
  expect(data.preroundBow).toBeDefined();
  expectTypeOf(data.preroundBow).toEqualTypeOf<boolean>();
  expect(data.preroundPotion).toBeDefined();
  expectTypeOf(data.preroundPotion).toEqualTypeOf<boolean>();
});
