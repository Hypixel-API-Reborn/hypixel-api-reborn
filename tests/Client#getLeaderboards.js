/* eslint-disable no-undef */
const { client } = require('./Client.js');
const { expect } = require('chai');

describe('Client#getLeaderboards', async () => {
  let leaderboards;
  it('expect not to throw', async () => {
    leaderboards = await client.getLeaderboards();
  });
  it('should be an object', () => {
    expect(leaderboards).to.be.an('object');
  });
  it('required keys should exist', () => {
    for (const minigame in leaderboards) {
      const minigameLbs = leaderboards[minigame];
      for (const lb of minigameLbs) {
        expect(lb).to.be.an('object');
        expect(lb.leaders).to.be.an('array');
        expect(lb.playerCount).to.be.a('number');
        if (lb.name) {
          expect(lb.name).to.be.a('string');
        }
        if (lb.title) {
          expect(lb.title).to.be.a('string');
        }
      }
    }
  });
});