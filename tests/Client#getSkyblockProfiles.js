/* eslint-disable no-undef */
const { SkyblockMember, Errors } = require('../src');
const { client } = require('./Client.js');
const { expect } = require('chai');

describe('Client#getSkyblockProfiles', async () => {
  let profiles;
  describe('Valid', async () => {
    describe('Random (1)', async () => {
      it('expect not to throw', async () => {
        profiles = await client.getSkyblockProfiles('28667672039044989b0019b14a2c34d6');
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
    describe('Max (2)', async () => {
      it('expect not to throw', async () => {
        profiles = await client.getSkyblockProfiles('fb3d96498a5b4d5b91b763db14b195ad');
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
  describe('Invalid', async () => {
    describe('Never played skyblock', async () => {
      it('expect to throw', async () => {
        try {
          member = await client.getSkyblockMember('b45add7b081443909fb00aa9a3e15eb0');
          throw new Error('Expected an error to be thrown, but no error was thrown.');
        } catch (error) {
          expect(error.message).to.equal(Errors.NO_SKYBLOCK_PROFILES);
        }
      }).timeout(5000);
    });
  });
});
