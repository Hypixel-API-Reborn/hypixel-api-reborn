/* eslint-disable no-undef */
const { SkyblockMember } = require('../src');
const { client } = require('./Client.js');
const { expect } = require('chai');

describe('Client#getSkyblockMember', async () => {
  let member;

  describe('Valid', async () => {
    describe('Random (1)', async () => {
      it('expect not to throw', async () => {
        member = await client.getSkyblockMember('f025c1c7f55a4ea0b8d93f47d17dfe0f');
      });
      it('should be an map', () => {
        expect(member).to.be.an('map');
      });
      it('required keys should exist', () => {
        member.forEach((profile) => {
          expect(profile).instanceOf(SkyblockMember);
        });
      });
    });
    describe('Random (2)', async () => {
      it('expect not to throw', async () => {
        member = await client.getSkyblockMember('82d8df1f2d234d9e9a3efe0852f99969');
      });
      it('should be an map', () => {
        expect(member).to.be.an('map');
      });
      it('required keys should exist', () => {
        member.forEach((profile) => {
          expect(profile).instanceOf(SkyblockMember);
        });
      });
    });
    describe('Max (3)', async () => {
      it('expect not to throw', async () => {
        member = await client.getSkyblockMember('fb3d96498a5b4d5b91b763db14b195ad');
      });
      it('should be an map', () => {
        expect(member).to.be.an('map');
      });
      it('required keys should exist', () => {
        member.forEach((profile) => {
          expect(profile).instanceOf(SkyblockMember);
        });
      });
    });
  });
  describe('Invalid', async () => {});
});
