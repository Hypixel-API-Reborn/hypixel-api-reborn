/* eslint-disable no-undef */
const { SkyblockMember, Errors } = require('../../src/index.js');
const { users, invalid } = require('../data.js');
const { client } = require('../Client.js');
const { expect } = require('chai');

describe('Client#getSkyblockMember', async () => {
  describe('Valid', async () => {
    users.forEach((user) => {
      let member;
      describe(`User Test ${users.indexOf(user) + 1} | UUID`, async () => {
        it('expect not to throw', async () => {
          member = await client.getSkyblockMember(user.uuid);
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
      describe(`User Test ${users.indexOf(user) + 1} | Username`, async () => {
        it('expect not to throw', async () => {
          member = await client.getSkyblockMember(user.username);
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
  });
  describe('Invalid', async () => {
    describe('Never Played skyblock', async () => {
      invalid.noSkyblockProfiles.forEach((user) => {
        it('expect to throw', async () => {
          try {
            member = await client.getSkyblockMember(user.uuid);
            throw new Error('Expected an error to be thrown, but no error was thrown.');
          } catch (error) {
            expect(error.message).to.equal(Errors.NO_SKYBLOCK_PROFILES);
          }
        }).timeout(5000);
      });
    });
  });
});
