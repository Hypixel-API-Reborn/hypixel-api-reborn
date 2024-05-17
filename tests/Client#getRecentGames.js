/* eslint-disable no-undef */
const { client } = require('./Client.js');
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

describe('Client#getRecentGames', async () => {
  uuids.forEach((uuid) => {
    describe(`UUID Test ${uuids.indexOf(uuid) + 1}`, async () => {
      let recentGames;
      it('expect not to throw', async () => {
        recentGames = await client.getRecentGames(uuid);
      });
      it('should be an array', () => {
        expect(recentGames).to.be.an('array');
      });
      it('required keys should exist', () => {
        if (recentGames.length === 0) return;
        recentGames.forEach((game) => {
          expect(game).to.have.keys([
            'game',
            'id',
            'code',
            'name',
            'found',
            'dateTimestamp',
            'date',
            'mode',
            'map',
            'ongoing',
            'endedAt',
            'endedTimestamp'
          ]);
          expect(game.game).to.be.a('string');
          expect(game.id).to.be.a('number');
          expect(game.code).to.be.a('string');
          expect(game.name).to.be.a('string');
          expect(game.found).to.be.a('boolean');
          expect(game.dateTimestamp).to.be.a('number');
          expect(game.date).to.be.a('date');
          expect(game.mode).to.be.a('string');
          expect(game.map).to.be.a('string');
          expect(game.ongoing).to.be.a('boolean');
          expect(game.endedAt).to.be.a('date');
          expect(game.endedTimestamp).to.be.a('number');
        });
      });
    });
  });
  usernames.forEach((username) => {
    describe(`Username Test ${usernames.indexOf(username) + 1}`, async () => {
      let recentGames;
      it('expect not to throw', async () => {
        recentGames = await client.getRecentGames(username);
      });
      it('should be an array', () => {
        expect(recentGames).to.be.an('array');
      });
      it('required keys should exist', () => {
        if (recentGames.length === 0) return;
        recentGames.forEach((game) => {
          expect(game).to.have.keys([
            'game',
            'id',
            'code',
            'name',
            'found',
            'dateTimestamp',
            'date',
            'mode',
            'map',
            'ongoing',
            'endedAt',
            'endedTimestamp'
          ]);
          expect(game.game).to.be.a('string');
          expect(game.id).to.be.a('number');
          expect(game.code).to.be.a('string');
          expect(game.name).to.be.a('string');
          expect(game.found).to.be.a('boolean');
          expect(game.dateTimestamp).to.be.a('number');
          expect(game.date).to.be.a('date');
          expect(game.mode).to.be.a('string');
          expect(game.map).to.be.a('string');
          expect(game.ongoing).to.be.a('boolean');
          expect(game.endedAt).to.be.a('date');
          expect(game.endedTimestamp).to.be.a('number');
        });
      });
    });
  });
});
