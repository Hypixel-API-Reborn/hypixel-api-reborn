/* eslint-disable no-undef */
const { Candidate } = require('../../src/index.js');
const { client } = require('../Client.js');
const { expect } = require('chai');

describe('Client#getSkyblockGovernment', async () => {
  let government;
  it('expect not to throw', async () => {
    government = await client.getSkyblockGovernment();
  });
  it('should be an objecct', () => {
    expect(government).to.be.an('object');
  });
  it('required keys should exist', () => {
    expect(government.lastUpdatedTimestamp).to.be.a('number');
    expect(government.lastUpdatedAt).to.be.a('date');
    government.lastElectionResults.forEach((mayor) => {
      expect(mayor).instanceOf(Candidate);
    });
    expect(government.mayor).instanceOf(Candidate);
    expect(government.runningYear).to.be.a('number');
    expect(government.currentElectionResults).to.be.oneOf([null, 'map']);
    if (government.currentElectionResults) {
      government.currentElectionResults.forEach((mayor) => {
        expect(mayor).instanceOf(Candidate);
      });
    }
    expect(government.currentElectionFor).to.be.oneOf(['number', null]);
  });
});
