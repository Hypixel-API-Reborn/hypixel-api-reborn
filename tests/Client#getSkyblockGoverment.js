/* eslint-disable no-undef */
const { SkyblockGovernment } = require('../src');
const { client } = require('./Client.js');
const { expect } = require('chai');

describe('Client#getSkyblockGoverment', async () => {
  let goverment;
  it('expect not to throw', async () => {
    goverment = await client.getSkyblockGoverment();
  });
  it('should be an objecct', () => {
    expect(goverment).to.be.an('object');
  });
  it('required keys should exist', () => {
    expect(goverment).instanceOf(SkyblockGovernment);
  });
});
