/* eslint-disable no-undef */
const { FireSale } = require('../../src/index.js');
const { client } = require('../Client.js');
const { expect } = require('chai');

describe('Client#getSkyblockFireSales', async () => {
  let fireSales;
  it('expect not to throw', async () => {
    fireSales = await client.getSkyblockFireSales();
  });
  it('should be an objecct', () => {
    expect(fireSales).to.be.an('array');
  });
  it('required keys should exist', () => {
    fireSales.forEach((sale) => {
      expect(sale).instanceOf(FireSale);
    });
  });
});
