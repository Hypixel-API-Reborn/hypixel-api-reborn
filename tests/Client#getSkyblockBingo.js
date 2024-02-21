/* eslint-disable no-undef */
const { SkyblockBingoData } = require('../src');
const { client } = require('./Client.js');
const { expect } = require('chai');

describe('Client#getSkyblockBingo', async () => {
  let bingo;
  it('expect not to throw', async () => {
    bingo = await client.getSkyblockBingo();
  });
  it('should be an objecct', () => {
    expect(bingo).to.be.an('object');
  });
  it('required keys should exist', () => {
    expect(bingo).instanceOf(SkyblockBingoData);
  });
});
