/* eslint-disable no-undef */
const { client } = require('./Client.js');
const { users } = require('./data.js');
const { expect } = require('chai');

describe('Client#getRecentGames', async () => {
  users.forEach((user) => {
    let recentGames;
    describe(`User Test ${users.indexOf(user) + 1} | UUID`, async () => {
      it('expect not to throw', async () => {
        recentGames = await client.getRecentGames(user.uuid);
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
    describe(`User Test ${users.indexOf(user) + 1} | Username`, async () => {
      it('expect not to throw', async () => {
        recentGames = await client.getRecentGames(user.username);
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
