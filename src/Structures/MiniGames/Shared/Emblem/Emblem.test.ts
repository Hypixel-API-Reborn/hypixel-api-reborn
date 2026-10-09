import Emblem from './Emblem.ts';
import EmblemColors from './EmblemColors.ts';
import { expect, expectTypeOf, test } from 'vitest';
import type { BuildBattleEmblemIcon, ColorCode } from '../../../../Types/index.ts';

test('Emblem', () => {
  const data = new Emblem<BuildBattleEmblemIcon>({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(Emblem);
  expectTypeOf(data).toEqualTypeOf<Emblem<BuildBattleEmblemIcon>>();
  expect(data.colorUnlocked).toBeDefined();
  expect(data.colorUnlocked).toBeInstanceOf(EmblemColors);
  expectTypeOf(data.colorUnlocked).toEqualTypeOf<EmblemColors>();
  expect(data.selectedColor).toBeDefined();
  expectTypeOf(data.selectedColor).toEqualTypeOf<ColorCode | 'UNKNOWN'>();
  expect(data.selectedIcon).toBeDefined();
  expectTypeOf(data.selectedIcon).toEqualTypeOf<BuildBattleEmblemIcon | 'UNKNOWN'>();
});
