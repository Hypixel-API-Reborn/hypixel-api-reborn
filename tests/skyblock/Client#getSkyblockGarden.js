/* eslint-disable no-undef */
const { SkyblockGarden } = require('../../src/index.js');
const { client } = require('../Client.js');
const { users } = require('../data.js');
const { expect } = require('chai');

describe('Client#getSkyblockGarden', async () => {
  let garden;
  users.forEach((user) => {
    describe(`User Test ${users.indexOf(user) + 1} | Skyblock Profile ID`, async () => {
      it('expect not to throw', async () => {
        garden = await client.getSkyblockGarden(user.skyblockProfileId);
      });
      it('should be an objecct', () => {
        expect(garden).to.be.an('object');
      });
      it('required keys should exist', () => {
        expect(garden).instanceOf(SkyblockGarden);
      });
    });
  });
});
