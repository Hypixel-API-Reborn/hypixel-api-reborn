/* eslint-disable no-undef */
const { SkyblockMember } = require('../src');
const { client } = require('./Client.js');
const { expect } = require('chai');

describe('Client#getSkyblockProfiles', async () => {
  let profiles;
  describe('Valid', async () => {
    describe('Random (1)', async () => {
      it('expect not to throw', async () => {
        profiles = await client.getSkyblockProfiles('f025c1c7f55a4ea0b8d93f47d17dfe0f');
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
    describe('Random (2)', async () => {
      it('expect not to throw', async () => {
        profiles = await client.getSkyblockProfiles('82d8df1f2d234d9e9a3efe0852f99969');
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
    describe('Max (3)', async () => {
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
  describe('Invalid', async () => {});
});
