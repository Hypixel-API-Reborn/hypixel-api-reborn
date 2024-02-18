/* eslint-disable no-undef */
const { client } = require('./Client.js');
const { expect } = require('chai');

describe('Client#getServerInfo', async () => {
  let server;
  describe('No amount input test', async () => {
    it('expect not to throw', async () => {
      server = await client.getServerInfo();
    });
    it('should be an object', () => {
      expect(server).to.be.an('object');
    });
    it('required keys should exist', () => {
      expect(server.protocolUsed).to.be.a('number');
      expect(server.versionInfo).to.be.a('string');
      expect(server.players).to.be.an('object');
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
  server;
  describe('Number', async () => {
    describe('Valid amount test', async () => {
      it('expect not to throw', async () => {
        server = await client.getServerInfo(2);
      });
      it('should be an object', () => {
        expect(server).to.be.an('object');
      });
      it('required keys should exist', () => {
        expect(server.protocolUsed).to.be.a('number');
        expect(server.versionInfo).to.be.a('string');
        expect(server.players).to.be.an('object');
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
    server;
    describe('Invalid input test', async () => {
      it('expect not to throw', async () => {
        server = await client.getServerInfo(-1);
      });
      it('should be an object', () => {
        expect(server).to.be.an('object');
      });
      it('required keys should exist', () => {
        expect(server.protocolUsed).to.be.a('number');
        expect(server.versionInfo).to.be.a('string');
        expect(server.players).to.be.an('object');
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
  });
  describe('String', async () => {
    describe('Valid amount test', async () => {
      it('expect not to throw', async () => {
        server = await client.getServerInfo('2');
      });
      it('should be an object', () => {
        expect(server).to.be.an('object');
      });
      it('required keys should exist', () => {
        expect(server.protocolUsed).to.be.a('number');
        expect(server.versionInfo).to.be.a('string');
        expect(server.players).to.be.an('object');
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
    server;
    describe('Invalid input test', async () => {
      it('expect not to throw', async () => {
        server = await client.getServerInfo('HI if u see this');
      });
      it('should be an object', () => {
        expect(server).to.be.an('object');
      });
      it('required keys should exist', () => {
        expect(server.protocolUsed).to.be.a('number');
        expect(server.versionInfo).to.be.a('string');
        expect(server.players).to.be.an('object');
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
  });
});