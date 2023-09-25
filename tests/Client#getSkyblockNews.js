/* eslint-disable no-undef */
const { client } = require('./Client.js');
const { expect } = require('chai');

describe('Client#getSkyblockNews', async () => {
  let news;
  it('expect not to throw', async () => {
    news = await client.getSkyblockNews();
  });
  it('required keys should exist', () => {
    expect(news).to.be.an('array');
    for (const record of news) {
      expect(record.title).to.be.a('string');
      expect(record.link).to.be.a('string');
      expect(record.date).instanceOf(Date);
      expect(record.rawDate).to.be.a('string');
    }
  });
});
