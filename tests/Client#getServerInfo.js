/* eslint-disable no-undef */
const { client } = require('./Client.js');
const { expect } = require('chai');

describe('Client#getServerInfo', async () => {
  let server;
  it('expect not to throw', async () => {
    server = await client.getServerInfo('not-a-number');
  });
  it('required keys should exist', () => {
    expect(server.protocolUsed).to.be.a('number');
    expect(server.versionInfo).to.be.a('string');
    expect(server.players.max).to.be.a('number');
    expect(server.players.online).to.be.a('number');
    expect(server.players.players).to.be.an('array');
    if (server.rawMOTD) {
      expect(server.rawMOTD).to.be.a('string');
    }
    if (server.cleanMOTD) {
      expect(server.cleanMOTD).to.be.a('string');
    }
    if (server.textMOTD) {
      expect(server.textMOTD).to.be.a('string');
    }
    if (server.faviconB64) {
      expect(server.faviconB64).to.be.a('string');
    }
    if (server.favicon) {
      expect(server.favicon).to.be.instanceOf(Buffer);
    }
    if (server.ping) {
      expect(server.ping).to.be.a('number');
    }
  });
});
