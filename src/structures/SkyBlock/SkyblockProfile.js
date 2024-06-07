const SkyblockMember = require('./SkyblockMember');
/**
 * Skyblock Profile class
 */
class SkyblockProfile {
  /**
   * Skyblock profile data
   * @param {object} data
   * @example
   */
  constructor(data) {
    /**
     * Skyblock profile ID
     * @type {string}
     */
    this.profileId = data.profileId;
    /**
     * Skyblock profile name
     * @type {string}
     */
    this.profileName = data.profileName;
    /**
     * Profile's gamemode
     * @type {string|null}
     */
    this.gameMode = data.gameMode;
    /**
     * Profile's banking
     * @type {object}
     */
    this.banking = data.banking;
    /**
     * Profile's community upgrades
     * @type {object}
     */
    this.communityUpgrades = data.communityUpgrades;
    /**
     * Profile is selected
     * @type {boolean}
     */
    this.selected = data.selected;
    /**
     * Skyblock profile members
     * @type {SkyblockMember[]}
     */
    this.members = Object.keys(data.members).map(
      (uuid) =>
        new SkyblockMember({
          uuid: uuid,
          profileId: this.profileId,
          profileName: this.profileName,
          gameMode: this.gameMode,
          m: data.members[uuid],
          banking: this.banking,
          communityUpgrades: this.communityUpgrades,
          museum: null,
          selected: this.selected
        })
    );
    /**
     * Queried player's member stats
     * @type {SkyblockMember}
     */
    this.me = this.members.find((x) => x.uuid === data.uuid);
  }
  /**
   * Profile Name
   * @return {string}
   * @example
   */
  toString() {
    return this.profileName;
  }
}

module.exports = SkyblockProfile;
