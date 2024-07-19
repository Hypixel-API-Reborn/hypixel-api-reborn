/* eslint-disable no-undef */
const { House } = require('../../src/index.js');
const { client } = require('../Client.js');
const { expect } = require('chai');

describe('Client#getActiveHouses', async () => {
  let houses;
  it('expect not to throw', async () => {
    houses = await client.getActiveHouses();
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
