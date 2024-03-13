const Errors = require('../../Errors');
const toUuid = require('../../utils/toUuid');
const getPlayer = require('../getPlayer');
module.exports = async function (query, options = { fetchPlayer: false, getMuseum: false }) {
  const SkyblockProfile = require('../../structures/SkyBlock/SkyblockProfile');
  const getSkyblockMuseum = require('../skyblock/getSkyblockMuseum');
  if (!query) throw new Error(Errors.NO_NICKNAME_UUID);
  query = await toUuid(query, this.options.mojangCacheTime);
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
      profile_id: res.profiles[i].profile_id,
      profile_name: res.profiles[i].cute_name,
      members: res.profiles[i].members,
      me: query,
      selected: res.profiles[i].selected,
      museum: options.getMuseum ? await getSkyblockMuseum.call(this, query, res.profiles[i].profile_id) : null
    });
  }

  return profiles.map((p) => new SkyblockProfile(p));
};
