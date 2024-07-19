/* eslint-disable no-undef */
const { SkyblockMember, Errors } = require('../../src/index.js');
const { users, invalid } = require('../data.js');
const { client } = require('../Client.js');
const { expect } = require('chai');

describe('Client#getSkyblockProfiles', async () => {
  describe('Valid', async () => {
    users.forEach((user) => {
      describe(`User Test ${users.indexOf(user) + 1} | UUID`, async () => {
        let profiles;
        it('expect not to throw', async () => {
          profiles = await client.getSkyblockProfiles(user.uuid);
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
      describe(`User Test ${users.indexOf(user) + 1} | Username`, async () => {
        let profiles;
        it('expect not to throw', async () => {
          profiles = await client.getSkyblockProfiles(user.username);
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
      invalid.noSkyblockProfiles.forEach((user) => {
        it('expect to throw', async () => {
          try {
            member = await client.getSkyblockProfiles(user.uuid);
            throw new Error('Expected an error to be thrown, but no error was thrown.');
          } catch (error) {
            expect(error.message).to.equal(Errors.NO_SKYBLOCK_PROFILES);
          }
        }).timeout(5000);
      });
    });
  });
});
