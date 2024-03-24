/* eslint-disable no-undef */
const { SkyblockMember, Errors } = require('../../src');
const { client } = require('../Client.js');
const { expect } = require('chai');

const uuids = [
  'f025c1c7f55a4ea0b8d93f47d17dfe0f',
  '52d9a36f66ce4cdf9a56ad9724ae9fb4',
  '4982eac19ae7422891b61a17a74c87a2',
  'f17d5ae1ed1f4dc9833339b56024640c',
  '3b76b69ae5134296a730ed49171ad6f8',
  '14727faefbdc4aff848cd2713eb9939e'
];

const usernames = ['kathund', 'StavZDev', 'Plancke', 'SoupyRaccn', 'duckysoskilled', 'Altpapier'];

describe('Client.skyblock#getProfiles', async () => {
  describe('Valid', async () => {
    uuids.forEach((uuid) => {
      describe(`UUID Test ${uuids.indexOf(uuid) + 1}`, async () => {
        let profiles;
        it('expect not to throw', async () => {
          profiles = await client.skyblock.getProfiles(uuid);
        });
        it('should be an array', () => {
          expect(profiles).to.be.an('array');
        });
        it('required keys should exist', () => {
          profiles.forEach((profile) => {
            expect(profile.profileId).to.be.a('string');
            expect(profile.profileName).to.be.oneOf([
              'Apple',
              'Banana',
              'Blueberry',
              'Coconut',
              'Cucumber',
              'Grapes',
              'Kiwi',
              'Lemon',
              'Lime',
              'Mango',
              'Orange',
              'Papaya',
              'Pear',
              'Peach',
              'Pineapple',
              'Pomegranate',
              'Raspberry',
              'Strawberry',
              'Tomato',
              'Watermelon',
              'Zucchini'
            ]);
            profile.members.forEach((profile) => {
              expect(profile).instanceOf(SkyblockMember);
            });
            expect(profile.me).instanceOf(SkyblockMember);
          });
        });
      });
    });

    usernames.forEach((username) => {
      describe(`Username Test ${usernames.indexOf(username) + 1}`, async () => {
        let profiles;
        it('expect not to throw', async () => {
          profiles = await client.skyblock.getProfiles(username);
        });
        it('should be an array', () => {
          expect(profiles).to.be.an('array');
        });
        it('required keys should exist', () => {
          profiles.forEach((profile) => {
            expect(profile.profileId).to.be.a('string');
            expect(profile.profileName).to.be.oneOf([
              'Apple',
              'Banana',
              'Blueberry',
              'Coconut',
              'Cucumber',
              'Grapes',
              'Kiwi',
              'Lemon',
              'Lime',
              'Mango',
              'Orange',
              'Papaya',
              'Pear',
              'Peach',
              'Pineapple',
              'Pomegranate',
              'Raspberry',
              'Strawberry',
              'Tomato',
              'Watermelon',
              'Zucchini'
            ]);
            profile.members.forEach((profile) => {
              expect(profile).instanceOf(SkyblockMember);
            });
            expect(profile.me).instanceOf(SkyblockMember);
          });
        });
      });
    });
  });
  describe('Invalid', async () => {
    describe('Never played skyblock', async () => {
      it('expect to throw', async () => {
        try {
          member = await client.skyblock.getProfiles('b45add7b081443909fb00aa9a3e15eb0');
          throw new Error('Expected an error to be thrown, but no error was thrown.');
        } catch (error) {
          expect(error.message).to.equal(Errors.NO_SKYBLOCK_PROFILES);
        }
      }).timeout(5000);
    });
  });
});
