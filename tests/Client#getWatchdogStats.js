/* eslint-disable no-undef */
const { client } = require('./Client.js');
const { expect } = require('chai');

describe('Client#getWatchdogStats', () => {
  let watchdog;
  it('expect not to throw', async () => {
    watchdog = await client.getWatchdogStats();
  });
  it('should be an object', () => {
    expect(watchdog).to.be.an('object');
  });
  it('required keys should exist', () => {
    expect(watchdog.byStaffRollingDay).to.be.a('number');
    expect(watchdog.byStaffTotal).to.be.a('number');
    expect(watchdog.byWatchdogLastMinute).to.be.a('number');
    expect(watchdog.byWatchdogRollingDay).to.be.a('number');
    expect(watchdog.byWatchdogTotal).to.be.a('number');
  });
});