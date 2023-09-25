/* eslint-disable no-undef */
const { client } = require('./Client.js');
const { expect } = require('chai');
const { SkyblockMember } = require('../src');

describe('Client#getSkyblockProfiles', async () => {
  let profiles;
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
