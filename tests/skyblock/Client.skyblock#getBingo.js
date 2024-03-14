/* eslint-disable no-undef */
const { BingoData } = require('../../src');
const { client } = require('../Client.js');
const { expect } = require('chai');

describe('Client.skyblock#getBingo', async () => {
  let bingo;
  it('expect not to throw', async () => {
    bingo = await client.skyblock.getBingo();
  });
  it('should be an objecct', () => {
    expect(bingo).to.be.an('object');
  });
  it('required keys should exist', () => {
    expect(bingo).instanceOf(BingoData);
  });
});
