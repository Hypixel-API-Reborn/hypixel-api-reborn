/* eslint-disable no-undef */
const { client } = require('./Client.js');
const { expect } = require('chai');

describe('Client#getStatus', () => {
  let status;
  it('expect not to throw', async () => {
    status = await client.getStatus('f025c1c7f55a4ea0b8d93f47d17dfe0f');
  });
  it('required keys should exist', () => {
    if (status.online) {
      expect(status.online).to.be.a('boolean');
    }
    if (status.game) {
      expect(status.game).to.be.a('number');
    }
    if (status.map) {
      expect(status.map).to.be.a('number');
    }
    if (status.mode) {
      expect(status.mode).to.be.a('number');
    }
  });
});
