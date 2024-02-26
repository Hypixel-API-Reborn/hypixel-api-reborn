/* eslint-disable no-undef */
const { client } = require('./Client.js');
const { expect } = require('chai');

describe('Client#getRecentGames', async () => {
  let recentGames;
  it('expect not to throw', async () => {
    recentGames = await client.getRecentGames('f025c1c7f55a4ea0b8d93f47d17dfe0f');
  });
  it('should be an array', () => {
    expect(recentGames).to.be.an('array');
  });
  it('required keys should exist', () => {
    if (recentGames.length === 0) return;
    recentGames.forEach((game) => {
      expect(game).to.have.keys(['game', 'id', 'code', 'name', 'found', 'dateTimestamp', 'date', 'mode', 'map', 'ongoing', 'endedAt', 'endedTimestamp']);
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
