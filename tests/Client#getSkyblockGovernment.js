/* eslint-disable no-undef */
const { GovernmentData } = require('../src/index.js');
const { client } = require('./Client.js');
const { expect } = require('chai');

describe('Client#getSkyblockGovernment', async () => {
  let government;
  it('expect not to throw', async () => {
    government = await client.getSkyblockGovernment();
  });
  it('should be an objecct', () => {
    expect(government).to.be.an('object');
  });
  it('required keys should exist', () => {
    expect(government).instanceOf(GovernmentData);
  });
});
