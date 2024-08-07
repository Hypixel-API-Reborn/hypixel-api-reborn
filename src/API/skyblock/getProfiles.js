const Errors = require('../../Errors');
const toUuid = require('../../utils/toUuid');
const getPlayer = require('../getPlayer');
module.exports = async function (query, options = { fetchPlayer: false, getMuseum: false, getGarden: false }) {
  const SkyblockProfile = require('../../structures/SkyBlock/SkyblockProfile');
  const getSkyblockMuseum = require('./getMuseum');
  const getSkyblockGarden = require('./getGarden');
  if (!query) throw new Error(Errors.NO_NICKNAME_UUID);
  query = await toUuid(query, this.options.mojangCacheTime, this.options.useThirdPartyAPI);
  // eslint-disable-next-line no-underscore-dangle
  const res = await this._makeRequest(`/skyblock/profiles?uuid=${query}`);
  if (res.raw) return res;
  if (!res.profiles || !res.profiles.length) throw new Error(Errors.NO_SKYBLOCK_PROFILES);
  const players = new Map();
  if (options.fetchPlayer) {
    const uniqueUuids = [...new Set(res.profiles.map((profile) => Object.keys(profile.members)).flat())];
    await Promise.all(
      uniqueUuids.map(async (uuid) => {
        const player = await getPlayer.call(this, uuid, options);
        players.set(uuid, player);
      })
    );
  }

  const profiles = [];
  for (let i = 0; i < res.profiles.length; i++) {
    if (options.fetchPlayer) {
      for (const memberUuid of Object.keys(res.profiles[i].members)) {
        res.profiles[i].members[memberUuid].player = players.get(memberUuid);
      }
    }

    profiles.push({
      uuid: query,
      profileId: res.profiles[i].profile_id,
      profileName: res.profiles[i].cute_name,
      gameMode: res.profiles[i].game_mode || null,
      m: res.profiles[i].members[query],
      banking: res.profiles[i].banking,
      communityUpgrades: res.profiles[i].community_upgrades,
      museum: options.getMuseum ? await getSkyblockMuseum.call(this, query, res.profiles[i].profile_id) : null,
      garden: options.getGarden ? await getSkyblockGarden.call(this, res.profiles[i].profile_id) : null,
      selected: res.profiles[i].selected,
      members: res.profiles[i].members
    });
  }

  return profiles.map((p) => new SkyblockProfile(p));
};
