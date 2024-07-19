/* eslint-disable no-undef */
const { House } = require('../../src/index.js');
const { client } = require('../Client.js');
const { users } = require('../data.js');
const { expect } = require('chai');

describe('Client#getPlayerHouses', async () => {
  users.forEach((user) => {
    describe(`User Test ${users.indexOf(user) + 1} | UUID`, async () => {
      let houses;
      it('expect not to throw', async () => {
        houses = await client.getPlayerHouses(user.uuid);
      });
      it('should be an objecct', () => {
        expect(houses).to.be.an('array');
      });
      it('required keys should exist', () => {
        houses.forEach((apiHouse) => {
          expect(apiHouse).instanceOf(House);
        });
      });
    });
    describe(`User Test ${users.indexOf(user) + 1} | Username`, async () => {
      let houses;
      it('expect not to throw', async () => {
        houses = await client.getPlayerHouses(user.username);
      });
      it('should be an objecct', () => {
        expect(houses).to.be.an('array');
      });
      it('required keys should exist', () => {
        houses.forEach((apiHouse) => {
          expect(apiHouse).instanceOf(House);
        });
      });
    });
  });
});
