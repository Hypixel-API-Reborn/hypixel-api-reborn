/* eslint-disable no-undef */
const { GameChallenges } = require('../src/index.js');
const { client } = require('./Client.js');
const { expect } = require('chai');

describe('Client#getChallenges', async () => {
  let challenges;
  it('expect not to throw', async () => {
    challenges = await client.getChallenges();
  });
  it('should be an objecct', () => {
    expect(challenges).to.be.an('object');
  });
  it('required keys should exist', () => {
    expect(challenges.lastUpdatedTimestamp).to.be.a('number');
    expect(challenges.lastUpdatedAt).to.be.a('date');
    expect(challenges.challengesPerGame).to.be.an('object');
    expect(challenges.challengesPerGame.arcade).instanceOf(GameChallenges);
    expect(challenges.challengesPerGame.arena).instanceOf(GameChallenges);
    expect(challenges.challengesPerGame.bedwars).instanceOf(GameChallenges);
    expect(challenges.challengesPerGame.hungergames).instanceOf(GameChallenges);
    expect(challenges.challengesPerGame.buildbattle).instanceOf(GameChallenges);
    expect(challenges.challengesPerGame.truecombat).instanceOf(GameChallenges);
    expect(challenges.challengesPerGame.duels).instanceOf(GameChallenges);
    expect(challenges.challengesPerGame.mcgo).instanceOf(GameChallenges);
    expect(challenges.challengesPerGame.murdermystery).instanceOf(GameChallenges);
    expect(challenges.challengesPerGame.paintball).instanceOf(GameChallenges);
    expect(challenges.challengesPerGame.quake).instanceOf(GameChallenges);
    expect(challenges.challengesPerGame.skyclash).instanceOf(GameChallenges);
    expect(challenges.challengesPerGame.skywars).instanceOf(GameChallenges);
    expect(challenges.challengesPerGame.supersmash).instanceOf(GameChallenges);
    expect(challenges.challengesPerGame.speeduhc).instanceOf(GameChallenges);
    expect(challenges.challengesPerGame.gingerbread).instanceOf(GameChallenges);
    expect(challenges.challengesPerGame.tntgames).instanceOf(GameChallenges);
    expect(challenges.challengesPerGame.uhc).instanceOf(GameChallenges);
    expect(challenges.challengesPerGame.vampirez).instanceOf(GameChallenges);
    expect(challenges.challengesPerGame.walls3).instanceOf(GameChallenges);
    expect(challenges.challengesPerGame.walls).instanceOf(GameChallenges);
    expect(challenges.challengesPerGame.battleground).instanceOf(GameChallenges);
    expect(challenges.challengesPerGame.woolgames).instanceOf(GameChallenges);
  });
});
