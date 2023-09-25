/* eslint-disable no-undef */
const { client } = require('./Client.js');
const { expect } = require('chai');

describe('Client#getBoosters', async () => {
  let boosters;
  it('expect not to throw', async () => {
    boosters = await client.getBoosters();
  });
  it('should be an array', () => {
    expect(boosters).to.be.an('array');
  });
  it('required keys should exist', () => {
    boosters.forEach((booster) => {
      expect(booster).to.have.property('purchaser').that.is.a('string');
      expect(booster).to.have.property('amount').that.is.a('number');
      expect(booster).to.have.property('originalLength').that.is.a('number');
      expect(booster).to.have.property('remaining').that.is.a('number');
      expect(booster).to.have.property('activatedTimestamp').that.is.a('number');
      expect(booster).to.have.property('activated').that.is.a('Date');
      expect(booster).to.have.property('isActive').that.is.a('boolean');
      expect(booster).to.have.property('type').that.is.oneOf(['QUEUED', 'STACKED', 'ACTIVE']);
      expect(booster).to.have.property('stackers').that.is.an('array');
      expect(booster).to.have.property('expired').that.is.a('boolean');
    });
  });
});
