/* eslint-disable no-undef */
const { House } = require('../../src/index.js');
const { client } = require('../Client.js');
const { houses } = require('../data.js');
const { expect } = require('chai');

describe('Client#getHouse', async () => {
  let apiHouse;
  houses.forEach((houseUUID) => {
    describe(`House Test ${houses.indexOf(houseUUID) + 1}`, async () => {
      it('expect not to throw', async () => {
        apiHouse = await client.getHouse(houseUUID);
      });
      it('should be an objecct', () => {
        expect(apiHouse).to.be.an('object');
      });
      it('required keys should exist', () => {
        expect(apiHouse).instanceOf(House);
      });
    });
  });
});
