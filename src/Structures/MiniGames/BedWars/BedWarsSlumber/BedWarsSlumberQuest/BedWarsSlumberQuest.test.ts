import BedWarsSlumberQuest from './BedWarsSlumberQuest.ts';
import BedWarsSlumberQuestGamblerGeorge from './BedWarsSlumberQuestGamblerGeorge.ts';
import BedWarsSlumberQuestItem from './BedWarsSlumberQuestItem.ts';
import BedWarsSlumberQuestNPC from './BedWarsSlumberQuestNPC.ts';
import BedWarsSlumberQuestObjective from './BedWarsSlumberQuestObjective.ts';
import { expect, expectTypeOf, test } from 'vitest';

test('BedWarsSlumberQuest', () => {
  const data = new BedWarsSlumberQuest({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(BedWarsSlumberQuest);
  expectTypeOf(data).toEqualTypeOf<BedWarsSlumberQuest>();
  expect(data.gamblerGeorge).toBeDefined();
  expect(data.gamblerGeorge).toBeInstanceOf(BedWarsSlumberQuestGamblerGeorge);
  expectTypeOf(data.gamblerGeorge).toEqualTypeOf<BedWarsSlumberQuestGamblerGeorge>();
  expect(data.item).toBeDefined();
  expect(data.item).toBeInstanceOf(BedWarsSlumberQuestItem);
  expectTypeOf(data.item).toEqualTypeOf<BedWarsSlumberQuestItem>();
  expect(data.npc).toBeDefined();
  expect(data.npc).toBeInstanceOf(BedWarsSlumberQuestNPC);
  expectTypeOf(data.npc).toEqualTypeOf<BedWarsSlumberQuestNPC>();
  expect(data.objective).toBeDefined();
  expect(data.objective).toBeInstanceOf(BedWarsSlumberQuestObjective);
  expectTypeOf(data.objective).toEqualTypeOf<BedWarsSlumberQuestObjective>();
  expect(data.lastTraded).toBeDefined();
  expect(data.lastTraded).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.lastTraded).toEqualTypeOf<number>();
});
