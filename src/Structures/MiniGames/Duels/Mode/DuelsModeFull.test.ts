import DuelsModeFull from './DuelsModeFull.ts';
import { expect, expectTypeOf, test } from 'vitest';
import type { DuelsTitleParsed } from '../../../../Types/index.ts';

test('DuelsModeFull', () => {
  const data = new DuelsModeFull({ stats: 'meow' }, 'bridge');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(DuelsModeFull);
  expectTypeOf(data).toEqualTypeOf<DuelsModeFull>();
  expect(data.title).toBeDefined();
  expectTypeOf(data.title).toEqualTypeOf<DuelsTitleParsed>();
});
