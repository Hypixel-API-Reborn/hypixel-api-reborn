/* eslint-disable no-undef */
const { APIIncident } = require('../src');
const { client } = require('./Client.js');
const { expect } = require('chai');

describe('Client#getBoosters', async () => {
  let status;
  it('expect not to throw', async () => {
    status = await client.getAPIStatus();
  });
  it('should be an object', () => {
    expect(status).to.be.an('object');
  });
  it('required keys should exist', () => {
    if (status.sourceUrl) expect(status.sourceUrl).to.be.a('string');
    if (status.title) expect(status.title).to.be.a('string');
    if (status.description) expect(status.description).to.be.a('string');
    status.incidents.forEach((incident) => {
      expect(incident).instanceOf(APIIncident);
    });
  });
});
