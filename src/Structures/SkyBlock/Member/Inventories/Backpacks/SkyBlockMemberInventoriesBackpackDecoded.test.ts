import SkyBlockMemberInventoriesBackpackDecoded from './SkyBlockMemberInventoriesBackpackDecoded.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberInventoriesBackpackDecoded', () => {
  /* eslint-disable camelcase */
  const data = new SkyBlockMemberInventoriesBackpackDecoded({
    backpackIconDecoded: [
      {
        id: 397,
        Count: 1,
        tag: {
          HideFlags: 254,
          display: {
            Lore: [
              '§7A bag with §a18§7 slots which can be',
              '§7placed in your Storage Menu to',
              '§7store additional items.',
              '',
              '§9§lRARE'
            ],
            Name: '§9Medium Backpack'
          },
          ExtraAttributes: {
            id: 'MEDIUM_BACKPACK',
            backpack_color: 'DEFAULT',
            uuid: '1f8c145e-17b1-4a1d-beed-456a78d1ce0d',
            timestamp: '8/5/22 12:41 AM'
          }
        },
        Damage: 3
      }
    ],
    backpackItemsDecoded: [
      {
        id: 397,
        Count: 3,
        tag: {
          HideFlags: 254,
          display: {
            Lore: ['§7§7A perfect side.', '', '§8§l* §8Co-op Soulbound §8§l*', '§f§lCOMMON'],
            Name: '§fFrench Fries'
          },
          ExtraAttributes: { id: 'FRENCH_FRIES' }
        },
        Damage: 3
      }
    ]
  });
  /* eslint-enable camelcase */
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberInventoriesBackpackDecoded);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberInventoriesBackpackDecoded>();
});
