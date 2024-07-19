/* eslint-disable */
const { client } = require('./Client.js');
const { users } = require('./data.js');
const { Game } = require('../src');
const { expect } = require('chai');

describe('Client#getStatus', () => {
  let status;

  users.forEach((user) => {
    describe(`User Test ${users.indexOf(user) + 1} | UUID`, async () => {
      it('expect not to throw', async () => {
        status = await client.getStatus(user.uuid);
      });
      it('should be an object', () => {
        expect(status).to.be.an('object');
      });
      it('required keys should exist', () => {
        if (status.online) {
          expect(status.online).to.be.a('boolean');
        }
        if (status.game) {
          expect(status.game).instanceOf(Game);
        }
        if (status.map) {
          expect(status.map).to.be.a('string');
        }
        if (status.mode) {
          expect(status.mode).to.be.a('string');
        }
      });
    });
    describe(`User Test ${users.indexOf(user) + 1} | Username`, async () => {
      it('expect not to throw', async () => {
        status = await client.getStatus(user.username);
      });
      it('should be an object', () => {
        expect(status).to.be.an('object');
      });
      it('required keys should exist', () => {
        if (status.online) {
          expect(status.online).to.be.a('boolean');
        }
        if (status.game) {
          expect(status.game).instanceOf(Game);
        }
        if (status.map) {
          expect(status.map).to.be.a('string');
        }
        if (status.mode) {
          expect(status.mode).to.be.a('string');
        }
      });
    });
  });
});
