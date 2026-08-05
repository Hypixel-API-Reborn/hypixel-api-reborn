import DuelsModeFull from './DuelsModeFull.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { DuelsTitleParsed } from '../../../../Types/Player.js';

test('DuelsModeFull', () => {
  const data = new DuelsModeFull({ stats: 'meow' }, 'bridge');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(DuelsModeFull);
  expectTypeOf(data).toEqualTypeOf<DuelsModeFull>();
  expect(data.title).toBeDefined();
  expectTypeOf(data.title).toEqualTypeOf<DuelsTitleParsed>();
});
