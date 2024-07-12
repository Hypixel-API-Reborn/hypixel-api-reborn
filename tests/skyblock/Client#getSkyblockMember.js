/* eslint-disable no-undef */
const { SkyblockMember, Errors } = require('../../src/index.js');
const { client } = require('../Client.js');
const { expect } = require('chai');

const uuids = [
  '37501e7512b845ab8796e2baf9e9677a',
  '52d9a36f66ce4cdf9a56ad9724ae9fb4',
  '4982eac19ae7422891b61a17a74c87a2',
  '3b76b69ae5134296a730ed49171ad6f8',
  '14727faefbdc4aff848cd2713eb9939e',
  'ea805d40e8284d8d8e64e9fc8ac301ca',
  '4855c53ee4fb4100997600a92fc50984',
  'f025c1c7f55a4ea0b8d93f47d17dfe0f',
  'fb3d96498a5b4d5b91b763db14b195ad',
  '28667672039044989b0019b14a2c34d6',
];

const usernames = [
  'ILoveWristSpasm',
  'StavZDev',
  'JasperJazzyPants',
  'WarOG',
  'Pixelic',
  'Altpapier',
  'DuckySoSkilled',
  'Plancke',
  'DeathStreeks',
  'Refraction',
];

describe('Client#getSkyblockMember', async () => {
  describe('Valid', async () => {
    uuids.forEach((uuid) => {
      let member;
      describe(`UUID Test ${uuids.indexOf(uuid) + 1}`, async () => {
        it('expect not to throw', async () => {
          member = await client.getSkyblockMember(uuid);
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
    usernames.forEach((username) => {
      let member;
      describe(`Username Test ${usernames.indexOf(username) + 1}`, async () => {
        it('expect not to throw', async () => {
          member = await client.getSkyblockMember(username);
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
      it('expect to throw', async () => {
        try {
          member = await client.getSkyblockMember('b45add7b081443909fb00aa9a3e15eb0');
          throw new Error('Expected an error to be thrown, but no error was thrown.');
        } catch (error) {
          expect(error.message).to.equal(Errors.NO_SKYBLOCK_PROFILES);
        }
      }).timeout(5000);
    });
  });
});
