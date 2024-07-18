const Errors = require('../../Errors');
const toUuid = require('../../utils/toUuid');
const getPlayer = require('../getPlayer');
module.exports = async function (query, options = { fetchPlayer: false, getMuseum: false, getGarden: false }) {
  const SkyblockMember = require('../../structures/SkyBlock/SkyblockMember');
  const getSkyblockMuseum = require('./getMuseum');
  const getSkyblockGarden = require('./getGarden');
  if (!query) throw new Error(Errors.NO_NICKNAME_UUID);
  query = await toUuid(query, this.options.mojangCacheTime, this.options.useThirdPartyAPI);
  // eslint-disable-next-line no-underscore-dangle
  const res = await this._makeRequest(`/skyblock/profiles?uuid=${query}`);
  if (res.raw) return res;
  if (!res.profiles || !res.profiles.length) throw new Error(Errors.NO_SKYBLOCK_PROFILES);
  const player = options.fetchPlayer ? await getPlayer.call(this, query, options) : null;
  const memberByProfileName = new Map();
  for (const profile of res.profiles) {
    profile.members[query].player = player;
    memberByProfileName.set(
      profile.cute_name,
      new SkyblockMember({
        uuid: query,
        profileId: profile.profile_id,
        profileName: profile.cute_name,
        gameMode: profile.game_mode || null,
        m: profile.members[query],
        banking: profile.banking,
        communityUpgrades: profile.community_upgrades,
        museum: options.getMuseum ? await getSkyblockMuseum.call(this, query, profile.profile_id) : null,
        garden: options.getGarden ? await getSkyblockGarden.call(this, profile.profile_id) : null,
        selected: profile.selected
      })
    );
  }
  return memberByProfileName;
};
