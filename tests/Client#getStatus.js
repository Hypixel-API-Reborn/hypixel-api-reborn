/* eslint-disable no-undef */
const { client } = require('./Client.js');
const { Game } = require('../src');
const { expect } = require('chai');

const uuids = [
  'f025c1c7f55a4ea0b8d93f47d17dfe0f',
  '52d9a36f66ce4cdf9a56ad9724ae9fb4',
  '4982eac19ae7422891b61a17a74c87a2',
  'f17d5ae1ed1f4dc9833339b56024640c',
  '3b76b69ae5134296a730ed49171ad6f8',
  '14727faefbdc4aff848cd2713eb9939e'
];

const usernames = ['kathund', 'StavZDev', 'Plancke', 'SoupyRaccn', 'duckysoskilled', 'Altpapier'];

describe('Client#getStatus', () => {
  let status;

  uuids.forEach((uuid) => {
    describe(`UUID Test ${uuids.indexOf(uuid) + 1}`, async () => {
      it('expect not to throw', async () => {
        status = await client.getStatus(uuid);
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
  usernames.forEach((username) => {
    describe(`Username Test ${usernames.indexOf(username) + 1}`, async () => {
      it('expect not to throw', async () => {
        status = await client.getStatus(username);
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
